module.exports = {
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
    identifyBrowser:function identifyBrowser(userAgent, elements) {
        var regexps = {
                'Chrome':[ /Chrome\/(\S+)/ ],
                'Firefox':[ /Firefox\/(\S+)/ ],
                'MSIE':[ /MSIE (\S+);/ ],
                'Opera':[
                    /Opera\/.*?Version\/(\S+)/, /* Opera 10 */
                    /Opera\/(\S+)/                  /* Opera 9 and older */
                ],
                'Safari':[ /Version\/(\S+).*?Safari\// ]
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
    },
// Based on fantastic jQuery useragent parser plugin https://gist.github.com/373298
    parse:function parse(uaStr) {
        var agent = {
            platform:{},
            browser:{},
            engine:{}
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
        } else if (/Linux|X11/.test(ua)) {
            p.name = 'linux';
            p.linux = true;
        } else if (/iPhone|iPod|iOS/.test(ua)) {
            p.name = 'iphone';
            p.iphone = true;
        } else if (/iPad/.test(ua)) {
            p.name = 'ipad';
            p.ipad = true;
        } else if (/Android|Opera Mini/.test(ua)) {
            p.name = 'android';
            p.android = true;
        } else if (/bot|spider|crawler|Bot|Java\//.test(ua)) {
            p.name = 'bot';
            p.bot = true;
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
            try {
                b.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
            } catch (e) {
                e.version = /Mobile\/([^ ]*?)/.exec(ua)[1];
            }
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
            e.version = /Trident/.test(ua) ? /Trident\/(\d+(\.\d+)*)/.exec(ua)[1] : 0;
        } else if (e.gecko) {
            try {
                e.version = /rv:(\d+(\.\d+)*)/.exec(ua)[1];
            } catch (e) {
                try {
                    e.version = /Mobile\/(.*)/.exec(ua)[1];
                } catch (e) {
                    e.version = "other";
                }
            }
        } else if (e.webkit) {
            e.version = /WebKit\/(\d+(\.\d+)*)/.exec(ua)[1];
        } else if (e.presto) {
            e.version = /Presto\/(\d+(\.\d+)*)/.exec(ua)[1];
        } else {
            e.version = 0;
        }

        return agent;
    }


}