"use strict";
var ua = require("../src/useragent.js");


var uagents = "Java/1.7.0_02|6611" + "\n" +
    "iOS/5.1 (9B176) dataaccessd/1.0|2614" + "\n" +
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:11.0) Gecko/20100101 Firefox/11.0|1702" + "\n" +
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)|770" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:11.0) Gecko/20100101 Firefox/11.0|746" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|600" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:11.0) Gecko/20100101 Firefox/11.0|571" + "\n" +
    "Mozilla/4.0 (compatible;)|538" + "\n" +
    "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0|513" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko/20100101 Firefox/11.0|414" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3|413" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0|399" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.152 Safari/535.19|350" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|343" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|328" + "\n" +
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2|322" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|312" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|290" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.2; fr-fr; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30|287" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11|252" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/536.2.3 (KHTML, like Gecko) Version/5.2 Safari/536.2.3|214" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|197" + "\n" +
    "-|195" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:10.0.2) Gecko/20100101 Firefox/10.0.2|193" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|185" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.52.7 (KHTML, like Gecko) Version/5.1.2 Safari/534.52.7|182" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.5 Safari/534.55.3|181" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1|180" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; rv:8.0.1) Gecko/20100101 Firefox/8.0.1|176" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2|160" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:11.0) Gecko/20100101 Firefox/11.0|155" + "\n" +
    "iOS/5.1 (9B179) dataaccessd/1.0|153" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.83 Safari/535.11|150" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.163 Safari/535.19|149" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|143" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.83 Safari/535.11|137" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11|124" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Ubuntu/11.10 Chromium/18.0.1025.142 Chrome/18.0.1025.142 Safari/535.19|122" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B179|102" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko/20100101 Firefox/11.0 Firefox/11.0|101" + "\n" +
    "Mozilla/5.0 (compatible; 008/0.83; http://www.80legs.com/webcrawler.html) Gecko/2008032620|101" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|93" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; GT-I5500 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|91" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/11.10 Chromium/17.0.963.79 Chrome/17.0.963.79 Safari/535.11|91" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.83 Safari/535.11|88" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)|88" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11|86" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|83" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176|82" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/11.10 Chromium/17.0.963.79 Chrome/17.0.963.79 Safari/535.11|81" + "\n" +
    "UnwindFetchor/1.0 (+http://www.gnip.com/)|81" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.152 Safari/535.19|76" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800; Orange)|75" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:10.0.2) Gecko/20100101 Firefox/10.0.2|74" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3|74" + "\n" +
    "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3|73" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64; rv:11.0) Gecko/20100101 Firefox/11.0|72" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800)|72" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.19 (KHTML, like Gecko) Ubuntu/11.10 Chromium/18.0.1025.142 Chrome/18.0.1025.142 Safari/535.19|67" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3|65" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.5 Safari/534.55.3|64" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|64" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|64" + "\n" +
    "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176|63" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|59" + "\n" +
    "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:10.0.2) Gecko/20100101 Firefox/10.0.2|56" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11|55" + "\n" +
    "iCal/1395.7 CFNetwork/454.12.4 Darwin/10.8.0 (i386) (MacBookPro6%2C2)|55" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)|54" + "\n" +
    "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.152 Safari/535.19|54" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.7; fr-fr; HTC Desire Build/GWK74) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|52" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|52" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|51" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1096.1 Safari/536.6|49" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.1) Opera 7.01 [en]|47" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.4; fr-fr; Galaxy Nexus Build/IMM76D) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.77 Mobile Safari/535.7|47" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Ubuntu/11.10 Chromium/18.0.1025.151 Chrome/18.0.1025.151 Safari/535.19|47" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.2; fr-fr; Galaxy Nexus Build/ICL53F) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.77 Mobile Safari/535.7|44" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|44" + "\n" +
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6 (FlipboardProxy/1.1; +http://flipboard.com/browserproxy)|43" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.4 (KHTML, like Gecko) Chrome/16.0.889.0 Safari/535.4|41" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)|40" + "\n" +
    "Mozilla/5.0 (X11; CrOS x86_64 2046.30.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.23 Safari/536.5|40" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.54.16 (KHTML, like Gecko) Version/5.1.4 Safari/534.54.16|37" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1096.1 Safari/536.6|37" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.7; fr-fr; HTC Desire Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|36" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2|36" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|35" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.4; fr-fr; Nexus S Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30|35" + "\n" +
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6 (FlipboardProxy/0.0.5; +http://flipboard.com/browserproxy)|34" + "\n" +
    "Mozilla/5.0 (Windows NT 6.0; rv:11.0) Gecko/20100101 Firefox/11.0|34" + "\n" +
    "Java/1.6.0_26|33" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64; rv:10.0.3) Gecko/20100101 Firefox/10.0.3 Iceweasel/10.0.3|33" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20120405 Firefox/13.0a2|32" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:9.0.1) Gecko/20100101 Firefox/9.0.1|32" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|32" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.53.11 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10|31" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 ( .NET CLR 3.5.30729; .NET4.0E)|31" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.3; fr-fr; GT-I9100 Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30|30" + "\n" +
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16|30" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 (.NET CLR 3.5.30729)|30" + "\n" +
    "Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5|29" + "\n" +
    "iOS/5.0.1 (9A405) dataaccessd/1.0|29" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:12.0) Gecko/20100101 Firefox/12.0|28" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2.9) Gecko/20100625 20000523 Firefox/3.6.9 (.NET CLR 3.5.30729)|28" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7|27" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:6.0.1) Gecko/20100101 Firefox/6.0.1|27" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.83 Safari/535.11|27" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1065.0 Safari/536.3|27" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0 Firefox/11.0|27" + "\n" +
    "Opera/9.80 (Windows NT 6.1; WOW64; U; fr) Presto/2.10.229 Version/11.62|27" + "\n" +
    "W3C-mobileOK/DDC-1.0 (see http://www.w3.org/2006/07/mobileok-ddc)|27" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.786.0 Safari/535.1|26" + "\n" +
    "Summify (Summify/1.0.1; +http://summify.com)|26" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; BTRS129150; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MS-RTC LM 8)|25" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E)|25" + "\n" +
    "Mozilla/5.0 (compatible; Embedly/0.2; +http://support.embed.ly/)|25" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; OMNIA7; Orange)|25" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.1 Safari/536.5|24" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)|24" + "\n" +
    "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)|24" + "\n" +
    "Java/1.4.1_04|23" + "\n" +
    "Mozilla/5.0 (compatible) Feedfetcher-Google;(+http://www.google.com/feedfetcher.html)|23" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.24 Safari/536.5|22" + "\n" +
    "Mozilla/5.0 (compatible; TweetmemeBot/2.11; +http://tweetmeme.com/)|22" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1|21" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11|21" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|21" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/10.04 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2|21" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|20" + "\n" +
    "Python-urllib/2.6|20" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.163 Safari/535.19|19" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11 CoolNovo/2.0.2.26|19" + "\n" +
    "W3C_Validator/1.3|19" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.10 (KHTML, like Gecko) Chrome/17.0.948.0 Safari/535.10|18" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.15 Safari/536.5|18" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; fr; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28|18" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2|18" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.57 Safari/534.24|18" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; [eburo v2.0]; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 1.1.4322; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)|17" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.2.2; fr-fr; MB525 Build/3.4.2-164) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|17" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.54.16 (KHTML, like Gecko) Version/5.1.4 Safari/534.54.16|17" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:10.0.3) Gecko/20100101 Firefox/10.0.3|17" + "\n" +
    "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|17" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2|17" + "\n" +
    "Mozilla/5.0 (compatible; 008/0.83; http://www.80legs.com/webcrawler.html;) Gecko/2008032620|17" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; LEN2)|17" + "\n" +
    "Opera/9.80 (X11; Linux zbov; U; fr) Presto/2.10.254 Version/12.00|17" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB7.3; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; InfoPath.2; .NET4.0C; .NET4.0E)|16" + "\n" +
    "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.100 Safari/534.30|16" + "\n" +
    "Mozilla/5.0 (Windows NT 6.0; rv:9.0.1) Gecko/20100101 Firefox/9.0.1|16" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:11.0) Gecko/20100101 Firefox/11.0 AlexaToolbar/alxf-2.15|16" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20120408 Firefox/13.0a2|16" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20|16" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20041001 Firefox/0.10.1|16" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5|16" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64; rv:9.0.1) Gecko/20100101 Firefox/9.0.1|16" + "\n" +
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)|16" + "\n" +
    "LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/3.1 +http://www.linkedin.com)|15" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)|15" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB7.3; CWADS32; .NET CLR 1.0.3705; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.648; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MS-RTC LM 8)|15" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)|15" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|15" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus One Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|15" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.7; fr-fr; Nexus One Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|15" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|15" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|15" + "\n" +
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; fr; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3|15" + "\n" +
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; fr-fr) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5|15" + "\n" +
    "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|15" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.152 Safari/535.19|15" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.15 Safari/536.5|15" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11 CoolNovo/2.0.2.26|15" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0|15" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.1 (KHTML, like Gecko) Ubuntu/10.10 Chromium/14.0.811.0 Chrome/14.0.811.0 Safari/535.1|15" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19|15" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.15 Safari/536.5|15" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11|15" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1096.1 Safari/536.6|15" + "\n" +
    "Mozilla/5.0 (X11; U; Linux x86_64; fr; rv:1.9.2.20) Gecko/20110804 Red Hat/3.6-2.el5 Firefox/3.6.20|15" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; LG; LG-E900; Orange)|15" + "\n" +
    "Mozilla/5.0 (compatible; PaperLiBot/2.1; http://support.paper.li/entries/20023257-what-is-paper-li)|15" + "\n" +
    "Opera/9.80 (Series 60; Opera Mini/6.5.27309/27.1486; U; fr) Presto/2.8.119 Version/11.10|15" + "\n" +
    "Googlebot-Image/1.0|14" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; GTB7.3; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 1.1.4322; MS-RTC LM 8)|14" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; GT-I9100-ORANGE/I9100BVKE2 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|14" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.3; fr-fr; Nexus S Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.77 Mobile Safari/535.7|14" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.142 Safari/535.19|14" + "\n" +
    "Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1|14" + "\n" +
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5|14" + "\n" +
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5|14" + "\n" +
    "DataAccess/1.0 (8L1)|13" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)|13" + "\n" +
    "Mozilla/5.0 (Android; Linux armv7l; rv:10.0.3) Gecko/20120302 Firefox/10.0.3 Fennec/10.0.3|13" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.5; fr-fr; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|13" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19|13" + "\n" +
    "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; fr; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28|13" + "\n" +
    "Mozilla/5.0 (X11; U; Linux i686; fr; rv:1.9.2.17) Gecko/20110421 Red Hat/3.6-1.el5_6 Firefox/3.6.17|13" + "\n" +
    "Mozilla/5.0 (compatible; TweetedTimes Bot/1.0; +http://tweetedtimes.com)|13" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)|12" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; InfoPath.2)|12" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; HTC_DesireHD-orange-LS Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|12" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 4.0.3; fr-fr; GT-I9000 Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30|12" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.102 Safari/535.2|12" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Safari/535.7|12" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11|12" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6|12" + "\n" +
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.19 (KHTML, like Gecko) Ubuntu/10.04 Chromium/18.0.1025.142 Chrome/18.0.1025.142 Safari/535.19|12" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.83 Safari/535.11|12" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Ubuntu/12.04 Chromium/18.0.1025.142 Chrome/18.0.1025.142 Safari/535.19|12" + "\n" +
    "PostRank/2.0 (postrank.com)|12" + "\n" +
    "Jakarta Commons-HttpClient/3.1|11" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729)|11" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3|11" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.78 Safari/535.11|11" + "\n" +
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_5 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1|11" + "\n" +
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0_1 like Mac OS X; fr_FR) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.1;FBBV/4100.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.0.1;FBSS/2; FBCR/OrangeFrance;FBID/phone;FBLC/fr_FR;FBSF/2.0]|11" + "\n" +
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1 like Mac OS X; fr_FR) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.1.1;FBBV/4110.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1;FBSS/2; FBCR/SFR;FBID/phone;FBLC/fr_FR;FBSF/2.0]|11" + "\n" +
    "Mozilla/5.0 (Linux; U; Android 2.3.3; fr-fr; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1|10" + "\n" +
    "Voyager/1.0|10" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98)|9" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20120417 Firefox/13.0a2|9" + "\n" +
    "123myUserAgent456|8" + "\n" +
    "Java/1.6.0_20|8" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2;  SLCC1;  .NET CLR 1.1.4325;  .NET CLR 2.0.40607;  .NET CLR 3.0.30729;  .NET CLR 3.5.30707)|8" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_6) AppleWebKit/534.24 (KHTML, like Gecko)|8" + "\n" +
    "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 Twitter for iPad|8" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B179 Twitter for iPhone|8" + "\n" +
    "iCal/1395.7 CFNetwork/454.12.4 Darwin/10.8.0 (i386) (MacBookPro5%2C2)|8" + "\n" +
    "LongURL API|7" + "\n" +
    "MLBot (www.metadatalabs.com/mlbot)|7" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) imgsizer Safari/534.34|7" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A406 Safari/7534.48.3|7" + "\n" +
    "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; fr-fr) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8C148|7" + "\n" +
    "Jigsaw/2.2.5 W3C_CSS_Validator_JFouffa/2.0|6" + "\n" +
    "Mozilla/5.0 (Windows NT 5.2; WOW64; rv:9.0.1) Gecko/20100101 Firefox/9.0.1|6" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9b5) Gecko/2008032620 Firefox/3.0b5|6" + "\n" +
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7E18|6" + "\n" +
    "Twisted PageGetter|6" + "\n" +
    "Twitterbot/1.0|6" + "\n" +
    "msnbot/2.0b (+http://search.msn.com/msnbot.htm)|6" + "\n" +
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0)|5" + "\n" +
    "Mozilla/5.0 (compatible; YandexImages/3.0; +http://yandex.com/bots)|5" + "\n" +
    "freenews|5" + "\n" +
    "iCal/1395.7 CFNetwork/454.12.4 Darwin/10.8.0 (i386) (MacBook5%2C2)|5" + "\n" +
    "Apache-HttpClient/4.1 (java 1.5)|4" + "\n" +
    "MetaURI API/2.0 +metauri.com|4" + "\n" +
    "Microsoft Office Mobile /14.0|4" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)|4" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:10.0) Gecko/20100101 Firefox/10.0|4" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0|4" + "\n" +
    "Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0|4" + "\n" +
    "Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.307.7 Safari/532.9|4" + "\n" +
    "Mozilla/5.0 (compatible) Feedfetcher-Google; (+http://www.google.com/feedfetcher.html)|4" + "\n" +
    "Mozilla/5.0 (compatible; Embedly/0.2; snap; +http://support.embed.ly/)|4" + "\n" +
    "Wget/1.12 (linux-gnueabi)|4" + "\n" +
    "iOS/5.0.1 (9A406) dataaccessd/1.0|4" + "\n" +
    "Crowsnest/0.5 (+http://www.crowsnest.tv/)|3" + "\n" +
    "Java/1.6.0_27|3" + "\n" +
    "Microsoft Office/12.0 (Windows NT 5.1; Microsoft Office Outlook 12.0.6562; Pro)|3" + "\n" +
    "Microsoft-WebDAV-MiniRedir/6.1.7601|3" + "\n" +
    "Mozilla/3.0 (compatible; Indy Library)|3" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)|3" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Instapaper/4.0 (+http://www.instapaper.com/)|3" + "\n" +
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.7) Gecko/2009021906 Firefox/3.0.7|3" + "\n" +
    "Mozilla/5.0 (X11; Linux i686; rv:12.0) Gecko/20100101 Firefox/12.0|3" + "\n" +
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/12.0|3" + "\n" +
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 Twitter for iPhone|3" + "\n" +
    "ShowyouBot (http://showyou.com/crawler)|3" + "\n" +
    "BaiduImagespider+(+http://help.baidu.jp/system/05.html)|2" + "\n" +
    "Baiduspider+(+http://www.baidu.com/search/spider.htm)|2" + "\n" +
    "Castabot/0.1 (+http://topixtream.com/)|2" + "\n" +
    "Java/1.6.0_22|2" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)|2" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)|2" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)|2" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; BOIE9;FRFR)|2" + "\n" +
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.112 Safari/534.30|2" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28|2" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.98 Safari/534.13|2" + "\n" +
    "Mozilla/5.0 (compatible; Butterfly/1.0; +http://labs.topsy.com/butterfly/) Gecko/2009032608 Firefox/3.0.8|2" + "\n" +
    "Python-urllib/2.4|2" + "\n" +
    "Twitmunin Crawler http://www.twitmunin.com|2" + "\n" +
    "VonChimpenfurlr|2" + "\n" +
    "facebookexternalhit/1.0 (+http://www.facebook.com/externalhit_uatext.php)|2" + "\n" +
    "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)|2" + "\n" +
    "iCal/1395.7 CFNetwork/454.11.12 Darwin/10.7.3 (x86_64) (MacBookPro8%2C3)|2" + "\n" +
    "iCal/1395.7 CFNetwork/454.12.4 Darwin/10.8.0 (i386) (MacBookPro5%2C3)|2" + "\n" +
    "urlresolver|2" + "\n" +
    "webcollage/1.135a|2" + "\n" +
    "CalendarStore/5.0.2 (1166); iCal/5.0.2 (1571); Mac OS X/10.7.3 (11D50)|1" + "\n" +
    "Cyberduck/9350 CFNetwork/454.12.4 Darwin/10.8.0 (i386) (MacBookPro5%2C2)|1" + "\n" +
    "Dalvik/1.6.0 (Linux; U; Android 4.0.3; GT-I9100 Build/IML74K)|1" + "\n" +
    "EventMachine HttpClient|1" + "\n" +
    "HTMLParser/2.0 AppEngine-Google; (+http://code.google.com/appengine; appid: lupin-apps7)|1" + "\n" +
    "HTTP_Request2/2.0.0 (http://pear.php.net/package/http_request2) PHP/5.3.2-1ubuntu4.14|1" + "\n" +
    "Java/1.6.0_13|1" + "\n" +
    "Java/1.6.0_16|1" + "\n" +
    "Java/1.6.0_18|1" + "\n" +
    "Java/1.6.0_24|1" + "\n" +
    "Java/1.6.0_25|1" + "\n" +
    "Java/1.6.0_30|1" + "\n" +
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)|1" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1|1" + "\n" +
    "Mozilla/5.0 (Windows NT 5.1; rv:6.0.2) Gecko/20100101 Firefox/6.0.2|1" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.12|1" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-us; rv:1.8.1.12) Gecko/20080201 Firefox|1" + "\n" +
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.1.8) Gecko/20100202 AskTbFXTV5/3.8.0.758267 Firefox/3.5.8|1" + "\n" +
    "Mozilla/5.0 (X11; Linux x86_64) KHTML/4.8.1 (like Gecko) Konqueror/4.8|1" + "\n" +
    "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)|1" + "\n" +
    "Mozilla/5.0 (compatible; Google Desktop/5.9.1005.12335; http://desktop.google.com/)|1" + "\n" +
    "Mozilla/5.0 (compatible; woriobot +http://worio.com)|1" + "\n" +
    "Mozilla/5.0 (compatible; woriobot support [at] worio [dot] com +http://worio.com)|1" + "\n" +
    "Plesk|1" + "\n" +
    "ZmEu/vici|1" + "\n" +
    "core-project/1.0|1";

uagents = uagents.split("\n");
var nb_bad = 0, total = 0, nb_bad2 = 0, nb_fail = 0;

for (var i = 0; i < uagents.length; i++) {
    var uagent_stat = uagents[i].split("|")

    var uagent = uagent_stat.shift();
    var nb = parseInt(uagent_stat.shift(), 10);

    try {
        var parse2 = ua.parse(uagent);

        var parseBad = parse2.platform.name == "other";
        if (parseBad) {
            console.log(uagent);
            nb_bad = nb_bad + nb;
        }
    } catch (e) {
        nb_fail = nb_fail + nb;
    }

    total = total + nb;
}

console.log(nb_bad, total, Math.floor(nb_bad / total * 1000) / 10 + "%");
console.log(nb_fail, total, Math.floor(nb_fail / total * 1000) / 10 + "%");