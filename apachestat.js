var moment = require('moment');
var fs = require('fs');
var sqlite = require('sqlite3').verbose();

var DB = new sqlite.Database('apachestats.db');
DB.serialize(function () {
    DB.run('create table apachestats (ip,date,verb,url,status,length,agent,referrer)');
});
var DIR = '/Users/wadouk/apache2/';

/**
 * Extracts the browser name and version number from user agent string.
 *
 * @param userAgent
 *            The user agent string to parse. If not specified, the contents of
 *            navigator.userAgent are parsed.
 * @param elements
 *            How many elements of the version number should be returned. A
 *            value of 0 means the whole version. If not specified, defaults to
 *            2 (major and minor release number).
 * @return A string containing the browser name and version number, or null if
 *         the user agent string is unknown.
 */
function identifyBrowser(userAgent, elements) {
    var regexps = {
            'Chrome': [ /Chrome\/(\S+)/ ],
            'Firefox': [ /Firefox\/(\S+)/ ],
            'MSIE': [ /MSIE (\S+);/ ],
            'Opera': [
                /Opera\/.*?Version\/(\S+)/,     /* Opera 10 */
                /Opera\/(\S+)/                  /* Opera 9 and older */
            ],
            'Safari': [ /Version\/(\S+).*?Safari\// ]
        },
        re, m, browser, version;

    if (userAgent === undefined)
        userAgent = navigator.userAgent;

    if (elements === undefined)
        elements = 2;
    else if (elements === 0)
        elements = 1337;

    for (browser in regexps)
        while (re = regexps[browser].shift())
            if (m = userAgent.match(re)) {
                version = (m[1].match(new RegExp('[^.]+(?:\.[^.]+){0,' + --elements + '}')))[0];
                return browser + ' ' + version;
            }

    return null;
}

// Based on fantastic jQuery useragent parser plugin https://gist.github.com/373298
function parse(uaStr) {
    var agent = {
        platform: {},
        browser: {},
        engine: {}
    };

    var ua = uaStr,
        p = agent.platform,
        b = agent.browser,
        e = agent.engine;

    // detect platform
    if (/Windows/.test(ua)) {
        p.name = 'win';
        p.win = true;
    } else if (/Mac/.test(ua)) {
        p.name = 'mac';
        p.mac = true;
    } else if (/Linux/.test(ua)) {
        p.name = 'linux';
        p.linux = true;
    } else if (/iPhone|iPod/.test(ua)) {
        p.name = 'iphone';
        p.iphone = true;
    } else if (/iPad/.test(ua)) {
        p.name = 'ipad';
        p.ipad = true;
    } else if (/Android/.test(ua)) {
        p.name = 'android';
        p.android = true;
    } else {
        p.name = 'other';
        p.unknown = true;
    }

    // detect browser
    if (/MSIE/.test(ua)) {
        b.name = 'msie';
        b.msie = true;
    } else if (/Firefox/.test(ua)) {
        b.name = 'firefox';
        b.firefox = true;
    } else if (/Chrome/.test(ua)) { // must be tested before Safari
        b.name = 'chrome';
        b.chrome = true;
    } else if (/Safari/.test(ua)) {
        b.name = 'safari';
        b.safari = true;
    } else if (/Opera/.test(ua)) {
        b.name = 'opera';
        b.opera = true;
    } else {
        b.name = 'other';
        b.unknown = true;
    }

    // detect browser version
    if (b.msie) {
        b.version = /MSIE (\d+(\.\d+)*)/.exec(ua)[1];
    } else if (b.firefox) {
        b.version = /Firefox\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (b.chrome) {
        b.version = /Chrome\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (b.safari) {
        b.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (b.opera) {
        b.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else {
        b.version = 0;
    }

    // detect engine
    if (/Trident/.test(ua) || b.msie) {
        e.name = 'trident';
        e.trident = true;
    } else if (/WebKit/.test(ua)) { // must be tested before Gecko
        e.name = 'webkit';
        e.webkit = true;
    } else if (/Gecko/.test(ua)) {
        e.name = 'gecko';
        e.gecko = true;
    } else if (/Presto/.test(ua)) {
        e.name = 'presto';
        e.presto = true;
    } else {
        e.name = 'other';
        e.unknown = true;
    }

    // detect engine version
    if (e.trident) {
        e.version = /Trident/.test(ua)? /Trident\/(\d+(\.\d+)*)/.exec(ua)[1]: 0;
    } else if (e.gecko) {
        e.version = /rv:(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (e.webkit) {
        e.version = /WebKit\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (e.presto) {
        e.version = /Presto\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else {
        e.version = 0;
    }

    return agent;
};

// https://github.com/tobie/ua-parser

function parseLogLine(lines) {
    var nbLines = lines.length;
    for (var i = 0; i < nbLines; i++) {
        var regExp = /([\d\.]*?) - - \[(.*?)\] "(.*?)" (\d*) (\d*) "(.*?)" "(.*?)"/g;
        var blocs = regExp.exec(lines[i]);
        if (!blocs) break;

        var request = blocs[3].split(" ");
        var data = {
            $ip : blocs[1],
            $date : moment(blocs[2], 'DD/MMM/YYYY:HH:mm:ss ZZ').valueOf(),
            $verb : request[0],
            $url : request[1],
            $status : blocs[4],
            $length : blocs[5],
            $agent :blocs[7]
        };

        if (blocs[6] !== "-") {
            data.$referrer = blocs[6];
        }
        DB.serialize(function () {
            DB.run("insert into apachestats (ip,date,verb,url,status,length,agent,referrer)" +
                "values" +
                "($ip,$date,$verb,$url,$status,$length,$agent,$referrer)",
                data
            );
        });
    }
}
function readfile(err, data) {
    if (err) throw err;
    parseLogLine(data.split('\n'));
}

function readdir(err, files) {
    if (err) {
        throw err;
    }
    var nbFiles = files.length;
    for (var i = 0; i < nbFiles; i++) {
        if (/access/.exec(files[i])) {
            fs.readFile(DIR + files[i], 'utf8', readfile);
        }
    }
}


fs.readdir(DIR, readdir);
