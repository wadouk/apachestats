"use strict";
var moment = require('moment');
var fs = require('fs');
var ua = require('./useragent.js');
var sqlite = require('sqlite3').verbose();

var DB = new sqlite.Database('apachestats.db');
DB.serialize(function () {
    DB.run('create table apachestats (ip,date,verb,url,status,length,agent,referrer,platform)');
});
var DIR = '/Users/wadouk/apache2/';

// https://github.com/tobie/ua-parser

function insertLog(blocs, request) {
    try {
        var data = {
            $ip:blocs[1],
            $date:moment(blocs[2], 'DD/MMM/YYYY:HH:mm:ss ZZ').valueOf(),
            $verb:request[0],
            $url:request[1],
            $status:blocs[4],
            $length:blocs[5],
            $agent:blocs[7],
            $platform:ua.parse(blocs[7]).platform.name
        };

        if (blocs[6] !== "-") {
            data.$referrer = blocs[6];
        }
        DB.serialize(function () {
            DB.run("insert into apachestats (ip,date,verb,url,status,length,agent,referrer,platform)" +
                "values" +
                "($ip,$date,$verb,$url,$status,$length,$agent,$referrer,$platform)",
                data
            );
        });
    } catch (e) {
    }
}
function parseLogLine(lines) {
    var nbLines = lines.length;
    for (var i = 0; i < nbLines; i++) {
        var regExp = /([\d\.]*?) - - \[(.*?)\] "(.*?)" (\d*) (\d*) "(.*?)" "(.*?)"/g;
        var blocs = regExp.exec(lines[i]);
        if (!blocs) break;

        var request = blocs[3].split(" ");
        if (blocs[1] == "10.61.4.184" && /Java/.test(blocs[7]))
            return;
        insertLog(blocs, request);
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
