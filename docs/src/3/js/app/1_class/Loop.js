//define(function() {
define(function(require, exports, module) {
    return class Loop {
        constructor(method) {
            this.requestId = 0;
            this.method = method;
            //this.requestId = window.requestAnimationFrame(method);
            //window.onbeforeunload = function(e) { window.cancelAnimationFrame(this.requestId); alert("cancelAnimationFrame実行！"); return "cancelAnimationFrame実行！"; }
        };
        Start() {
            //this.requestId = window.requestAnimationFrame(this.method);
        }
        _Initialize() { alert("Initialize!!"); }
    };
});
