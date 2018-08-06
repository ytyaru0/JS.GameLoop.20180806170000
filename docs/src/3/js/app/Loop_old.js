//define(function() {
define(function(require, exports, module) {
    return class Loop {
    //class MainLoop {
        constructor() {
            this.counter = 0;
            this.startTime = null;
            this.requestId = null;
//            this._Loop();
//            this._Initialize();
//            this.requestId = window.requestAnimationFrame(this._Loop);
        };
        _Loop() {
            console.log('this:', this);
            this.counter++;        
            if(this.counter === 1){
                this.startTime = new Date().getTime();
            }
            if(this.counter === 30){
                let end = new Date().getTime();
                let diff = end - this.startTime;
                let fps = this.counter / diff * 1000;
                this._Log("FPS:" + fps);
                this.counter = 0;
            }
        };
        _Log(msg) {
            console.log(msg);
            document.body.innerHTML = msg;
        };
        /*
        _Initialize() {
            //this._Loop();
            //this.requestId = window.requestAnimationFrame(this._Initialize); //戻り値を取得
            this.requestId = window.requestAnimationFrame(this._Loop);
            window.onbeforeunload = function(e) { window.cancelAnimationFrame(this.requestId); alert("cancelAnimationFrame実行！"); return "cancelAnimationFrame実行！"; }
        };
        */
        _Initialize() {
            console.log('this:', this);
            this.counter++;        
            if(this.counter === 1){
                this.startTime = new Date().getTime();
            }
            if(this.counter === 30){
                let end = new Date().getTime();
                let diff = end - this.startTime;
                let fps = this.counter / diff * 1000;
                this._Log("FPS:" + fps);
                this.counter = 0;
            }
            //this._Loop();
            this.requestId = window.requestAnimationFrame(this._Initialize); //戻り値を取得
            //this.requestId = window.requestAnimationFrame(this._Loop);
            window.onbeforeunload = function(e) { window.cancelAnimationFrame(this.requestId); alert("cancelAnimationFrame実行！"); return "cancelAnimationFrame実行！"; }
        };
    };
    //return new MainLoop();

    /*
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
    */
});
