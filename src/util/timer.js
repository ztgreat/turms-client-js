var Timer = /** @class */ (function () {
    function Timer(intervalFunction, interval, lightMode) {
        var _this = this;
        if (lightMode === void 0) { lightMode = true; }
        if (lightMode) {
            this._function = function () {
                if (!_this._ignoreNextCall) {
                    intervalFunction();
                }
                else {
                    _this._ignoreNextCall = false;
                }
            };
        }
        else {
            this._function = intervalFunction;
        }
        this._function = intervalFunction;
        this._interval = interval;
        this._lightMode = lightMode;
        this._ignoreNextCall = false;
    }
    Timer.prototype.stop = function () {
        if (this._timer) {
            clearInterval(this._timer);
            this._timer = undefined;
        }
        return this;
    };
    Timer.prototype.start = function () {
        if (!this._timer) {
            this.stop();
            this._timer = setInterval(this._function, this._interval);
        }
        return this;
    };
    Timer.prototype.reset = function (interval) {
        if (this._lightMode && this._interval === interval) {
            this._ignoreNextCall = true;
        }
        else {
            this._interval = interval;
            return this.stop().start();
        }
    };
    return Timer;
}());
export default Timer;
//# sourceMappingURL=timer.js.map