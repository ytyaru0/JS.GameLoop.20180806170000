//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Loop = require('js/app/Loop');
    let loop = new Loop();
    console.log("loop:", loop);
    loop.Start();
    /*
    window.onbeforeunload = function(e) {
        loop.Stop();
        return "停止！";
    };
    */
});
