//define(function() {
define(function(require, exports, module) {
    return class Loop {
        constructor() {
            this.counter = 0;
        };
        _Private() {
            console.log("this:", this, "counter:", this.counter);
        };
        Public() {
            console.log("this:", this);
            this._Private();
        }
    };
});
