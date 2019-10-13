import ClientSettings from "../model/client-settings";
import Timer from "../util/timer";
import TurmsError from "../constant/turms-error";
import { SleepRequest, WakeRequest } from "../model/dto-bundle";
var HEARTBEAT_INTERVAL = 30;
var DEFAULT_TURMS_SERVER_URL = 'ws://localhost:9510';
var TurmsDriver = /** @class */ (function () {
    function TurmsDriver(baseUrl) {
        this._settings = new ClientSettings(baseUrl || DEFAULT_TURMS_SERVER_URL, HEARTBEAT_INTERVAL);
        this._onOpenListeners = [];
        this._onCloseListeners = [];
        this._onErrorListeners = [];
        this._onMessageListeners = [];
    }
    TurmsDriver.prototype.connected = function () {
        return this._websocket instanceof WebSocket && this._websocket.readyState === WebSocket.OPEN;
    };
    TurmsDriver.prototype.sendPing = function () {
        if (this.connected()) {
            this._websocket.send('');
            return true;
        }
        else {
            return false;
        }
    };
    TurmsDriver.prototype.setServerUrl = function (baseUrl) {
        this._settings.baseUrl = baseUrl;
        this.open();
        //todo
    };
    TurmsDriver.prototype.close = function (code, reason) {
        if (this.connected()) {
            this._websocket.close(code, reason);
            this._websocket = null;
        }
        for (var _i = 0, _a = this._onCloseListeners; _i < _a.length; _i++) {
            var onCloseListener = _a[_i];
            onCloseListener();
        }
    };
    TurmsDriver.prototype.open = function () {
        if (!this._settings.baseUrl) {
            console.error(TurmsError.URL_UNINITIALIZED);
        }
        else if (this.connected()) {
            console.error(TurmsError.ANOTHER_CLIENT_CONNECTED);
        }
        else {
            this._websocket = new WebSocket(this._settings.baseUrl);
            this._websocket.binaryType = "arraybuffer";
            this._websocket.onopen = this._onWebsocketOpen;
            this._websocket.onclose = this._onWebsocketClose;
            this._websocket.onerror = this._onWebsocketError;
            this._websocket.onmessage = this._onWebsocketMessage;
        }
    };
    TurmsDriver.prototype.sleep = function () {
        if (this.connected()) {
            if (!TurmsDriver._sleepRequest) {
                var request = SleepRequest.create();
                TurmsDriver._sleepRequest = SleepRequest.encode(request).finish();
            }
            this.send(TurmsDriver._sleepRequest);
        }
    };
    TurmsDriver.prototype.wake = function () {
        if (this.connected()) {
            if (!TurmsDriver._wakeRequest) {
                var request = WakeRequest.create();
                TurmsDriver._wakeRequest = WakeRequest.encode(request).finish();
            }
            this.send(TurmsDriver._wakeRequest);
        }
    };
    TurmsDriver.prototype.resetHeartBeatTimer = function () {
        this._heartbeatTimer.reset(this._settings.heartbeatInterval);
    };
    TurmsDriver.prototype.send = function (data) {
        this.resetHeartBeatTimer();
        this._websocket.send(data);
    };
    TurmsDriver.prototype.setOpenListeners = function (listeners) {
        this._onOpenListeners = listeners;
    };
    TurmsDriver.prototype.addOpenListener = function (listener) {
        this._onOpenListeners.push(listener);
    };
    TurmsDriver.prototype.addCloseListener = function (listener) {
        this._onCloseListeners.push(listener);
    };
    TurmsDriver.prototype.addErrorListener = function (listener) {
        this._onErrorListeners.push(listener);
    };
    TurmsDriver.prototype.addMessageListener = function (listener) {
        this._onMessageListeners.push(listener);
    };
    TurmsDriver.prototype._onWebsocketOpen = function () {
        var _this = this;
        if (this._heartbeatTimer) {
            this._heartbeatTimer.reset(this._settings.heartbeatInterval);
        }
        else {
            this._heartbeatTimer = new Timer(function () {
                if (!_this.sendPing()) {
                    _this._websocket.close();
                }
            }, this._settings.heartbeatInterval);
        }
        for (var _i = 0, _a = this._onOpenListeners; _i < _a.length; _i++) {
            var onOpenListener = _a[_i];
            onOpenListener();
        }
    };
    TurmsDriver.prototype._onWebsocketClose = function () {
        if (this._heartbeatTimer) {
            this._heartbeatTimer.stop();
            this._heartbeatTimer = null;
        }
        for (var _i = 0, _a = this._onCloseListeners; _i < _a.length; _i++) {
            var onCloseListener = _a[_i];
            onCloseListener();
        }
    };
    TurmsDriver.prototype._onWebsocketError = function (error) {
        for (var _i = 0, _a = this._onErrorListeners; _i < _a.length; _i++) {
            var onErrorListener = _a[_i];
            onErrorListener(error);
        }
    };
    TurmsDriver.prototype._onWebsocketMessage = function (message) {
        // message.data;
        // this._inboundMessageService._add(message);
        // switch (message.type) {
        //     case "ACK":
        //         this._outboundMessageService.setAcknowledged(message.deliveryDate, true);
        //         break;
        //     case "content":
        //         // this._outboundMessageService._sendReadReceipt(message.chatType, message.fromId);
        //         break;
        // }
    };
    return TurmsDriver;
}());
export default TurmsDriver;
//# sourceMappingURL=turms-driver.js.map