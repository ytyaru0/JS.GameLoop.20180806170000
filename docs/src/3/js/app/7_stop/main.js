//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Loop = require('js/app/Loop');
    let loop = new Loop();
    console.log("loop:", loop);
    loop.Start();

    window.onbeforeunload = function(e) {
        loop.Stop();
        return "停止！";
    };
    //window.onbeforeunload = function(e) { window.cancelAnimationFrame(loop.requestId); alert("cancelAnimationFrame実行！"); console.log("this:", this, "requestId", loop.requestId); return "requestId " + loop.requestId + " cancelAnimationFrame実行！"; }

//    console.log(loop);
//    loop._Initialize();
    //loop.Initialize();
    //Loop.Initialize();
});
