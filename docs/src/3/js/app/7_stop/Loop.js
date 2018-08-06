//define(function() {
define(function(require, exports, module) {
    return class Loop {
        constructor() {
            this.requestId = 0;
            this.counter = 0;
            this.startTime = null;
            //window.onbeforeunload = function(e) { window.cancelAnimationFrame(this.requestId); alert("cancelAnimationFrame実行！"); console.log("this:", this, "requestId", this.requestId); return "requestId " + this.requestId + " cancelAnimationFrame実行！"; }
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
        Start() {
            this._Loop();
            // https://stackoverflow.com/questions/28908999/use-requestanimationframe-in-a-class
            this.requestId = window.requestAnimationFrame(this.Start.bind(this));
            console.log("this:", this, "requestId", this.requestId);
            
        }
        Stop() {
            window.cancelAnimationFrame(this.requestId); 
        }
    };
});
