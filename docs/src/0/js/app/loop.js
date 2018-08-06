define(function() {
    var C = {};
    C._FPS = 120;
    C._counter = 0;
    //C._startTime = null;
    C._intervalId = null;
    C._Update = function() {}
    C._Draw = function() {}
    C._Loop = function() {
        var skipTicks = 1000 / C._FPS;
        var maxFrameSkip = 10;
        var nextGameTick = Date.now();
        return function() {
            C._counter = 0;
            //C._startTime = new Date().getTime();
            while (Date.now() > nextGameTick && C._counter < maxFrameSkip) {
                C._Update();
                nextGameTick += skipTicks;
                C._counter++;
            }
            let end = new Date().getTime();
            //let diff = end - C._startTime;
            let diff = nextGameTick - end;
            let fps = C._counter / diff * 1000;
            C._Draw();
            if (0 < fps) { C._Log("FPS:" + fps); }
        };
    }
    C._Log = function(msg) {
        console.log(msg);
        document.body.innerHTML = msg;
    }
    C.Initialize = function() {
        C._intervalId = window.setInterval(C._Loop(), 0);
        window.onbeforeunload = function(e) { window.clearInterval(C._intervalId); alert("clearInterval実行！"); return "cancelAnimationFrame実行！"; }
    }
    return C;
})();

