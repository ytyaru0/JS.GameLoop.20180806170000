//define(function() {
define(function(require, exports, module) {
    return class LoopCounter {
        constructor() {
            this.counter = 0;
            this.startTime = null;
            this.requestId = null;
        };
        Loop() {
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
    };
});
