//define(function() {
define(function(require, exports, module) {
    return class Loop {
//        constructor(method) {
        constructor() {
            this.requestId = 0;
            this.counter = 0;
            this.startTime = null;
            //this.private = "private!!";
            //this.method = method;
            //this.requestId = window.requestAnimationFrame(method);
            //window.onbeforeunload = function(e) { window.cancelAnimationFrame(this.requestId); alert("cancelAnimationFrame実行！"); return "cancelAnimationFrame実行！"; }
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
//        _Private() { this.private = "PRIVATE!!"; return this.private; }
//        _Initialize() { console.log("this:", this); alert("Initialize!! " + this._Private()); }
        Start() {
            console.log("this:", this);
            this._Loop();
            this.requestId = window.requestAnimationFrame(this.Start);
//            this.requestId = window.requestAnimationFrame(this.method);
        }
        Stop() {
            window.cancelAnimationFrame(this.requestId); 
        }
    };
});
