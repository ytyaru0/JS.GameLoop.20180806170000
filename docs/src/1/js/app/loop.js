define(function() {
    var C = {};
    C._counter = 0;
    C._startTime = null;
    C._Loop = function() {
        C._counter++;        
        if(C._counter === 1){
            C._startTime = new Date().getTime();
        }
        if(C._counter === 30){
            end = new Date().getTime();
            diff = end - C._startTime;
            fps = C._counter / diff * 1000;
            C._Log("FPS:" + fps);
            C._counter = 0;
        }
    }
    C._Log = function(msg) {
        console.log(msg);
        document.body.innerHTML = msg;
    }
    C.Initialize = function() {
        C._Loop();
        C._requestId = window.requestAnimationFrame(C.Initialize); //戻り値を取得
        window.onbeforeunload = function(e) { window.cancelAnimationFrame(C._requestId); alert("cancelAnimationFrame実行！"); return "cancelAnimationFrame実行！"; }
    }
    return C;
});
