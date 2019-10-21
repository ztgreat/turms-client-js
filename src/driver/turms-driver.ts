import Timer from "../util/timer";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import * as WebSocketAsPromised from "websocket-as-promised";
import TurmsStatusCode from "../model/turms-status-code";
import TurmsError from "../model/turms-error";
import {im} from "../model/proto-bundle";
import TurmsResponse = im.turms.proto.TurmsResponse;
import TurmsRequest = im.turms.proto.TurmsRequest;

const HEARTBEAT_INTERVAL = 20 * 1000;

export default class TurmsDriver {
    private _heartbeatInterval: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _websocket: any; //WebSocketAsPromised
    private _heartbeatTimer?: Timer;
    private _onMessage?: (response: TurmsResponse) => void;
    private _onClose?: (wasConnected: boolean, error?: any) => void;

    private _url = 'ws://localhost:9510';
    private _connectionTimeout = 10 * 1000;
    private _requestTimeout = 60 * 1000;
    private _minRequestsInterval = 0;
    private _requestsMap: Set<number>;
    private _lastRequestDate = new Date(0);
    private _isLastRequestHeartbeat = false;

    constructor(url?: string, connectionTimeout?: number, requestTimeout?: number, minRequestsInterval?: number) {
        if (url) this._url = url;
        if (connectionTimeout) this._connectionTimeout = connectionTimeout;
        if (requestTimeout) this._requestTimeout = requestTimeout;
        if (minRequestsInterval) this._minRequestsInterval = minRequestsInterval;
        this._heartbeatInterval = HEARTBEAT_INTERVAL;
        this._requestsMap = new Set();
    }

    set onClose(value: any) {
        this._onClose = value;
    }

    set onMessage(value: any) {
        this._onMessage = value;
    }

    sendHeartbeat(): Promise<void> {
        return new Promise((resolve, reject): void => {
            if (this.connected()) {
                this.setLastRequestRecord(true, new Date());
                this._websocket.send(new Uint8Array(0));
                resolve();
            } else {
                reject();
            }
        });
    }

    connected(): boolean {
        return this._websocket && this._websocket.isOpened;
    }

    disconnect(): Promise<CloseEvent> {
        if (this._websocket.isOpened || this._websocket.isOpening) {
            return this._websocket.close()
                .then(() => {
                    this._onWebsocketClose();
                });
        } else {
            return Promise.reject();
        }
    }

    connect(url?: string, connectionTimeout?: number, requestTimeout?: number): Promise<void> {
        if (this.connected()) {
            return Promise.reject(TurmsError.CLIENT_ALREADY_CONNECTED);
        } else {
            this._websocket = new WebSocketAsPromised(url || this._url, {
                createWebSocket: (serverUrl): WebSocket => {
                    const ws = new WebSocket(serverUrl);
                    ws.binaryType = "arraybuffer";
                    return ws;
                },
                attachRequestId: (data: Uint8Array): Uint8Array => data,
                packMessage: (data: Uint8Array): Uint8Array => data,
                unpackMessage: (data: ArrayBuffer): TurmsResponse => TurmsResponse.decode(new Uint8Array(data)),
                connectionTimeout: connectionTimeout || this._connectionTimeout,
                timeout: requestTimeout || this._requestTimeout,
                extractRequestId: (response: TurmsResponse): number | undefined => {
                    if (!response.notification) {
                        return response.requestId;
                    }
                }
            });
            this._websocket.onUnpackedMessage.addListener((response: TurmsResponse) => {
                if (this._onMessage) {
                    this._onMessage(response);
                }
            });
            this._websocket.onClose.addListener(() => {
                this._onWebsocketClose();
            });
            this._websocket.onError.addListener((error) => {
                this._onWebsocketError(error);
            });
            return this._websocket.open()
                .then(() => {
                    this._onWebsocketOpen();
                    return Promise.resolve();
                })
        }
    }

    resetHeartBeatTimer(): void {
        if (this._heartbeatTimer) {
            this._heartbeatTimer.reset(this._heartbeatInterval);
        }
    }

    private setLastRequestRecord(isLastRequestHeartbeat: boolean, lastRequestDate: Date) {
        this._isLastRequestHeartbeat = isLastRequestHeartbeat;
        this._lastRequestDate = lastRequestDate;
    }

    send(message: im.turms.proto.ITurmsRequest): Promise<TurmsResponse> {
        if (this.connected()) {
            const now = new Date();
            if (!this._minRequestsInterval || now.getTime() - this._lastRequestDate.getTime() > this._minRequestsInterval) {
                this.setLastRequestRecord(false, now);
                const requestId = this._generateRandomId();
                message.requestId = {value: requestId};
                const data = TurmsRequest.encode(message).finish();
                this.resetHeartBeatTimer();
                return this._websocket.sendRequest(data, {
                    requestId: requestId
                }).then((response: TurmsResponse) => {
                    if (response.code && TurmsStatusCode.isErrorCode(response.code)) {
                        throw TurmsError.fromResponse(response);
                    } else {
                        return response;
                    }
                });
            } else if (this._isLastRequestHeartbeat) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        this.send(message)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                    }, this._minRequestsInterval);
                })
            } else {
                return Promise.reject("Request is too frequent");
            }
        } else {
            return Promise.reject("The WebSocket is closed");
        }
    }

    private _generateRandomId(): number {
        let id;
        do {
            id = Math.floor(Math.random() * 9007199254740991);
        } while (this._requestsMap.has(id));
        this._requestsMap.add(id);
        return id;
    }

    private _onWebsocketOpen(): void {
        if (this._heartbeatTimer && this._heartbeatTimer.isRunning) {
            this._heartbeatTimer.reset(this._heartbeatInterval);
        } else {
            this._heartbeatTimer = new Timer((): Promise<void> => {
                const difference = new Date().getTime() - this._lastRequestDate.getTime();
                if (difference > this._minRequestsInterval) {
                    return this.sendHeartbeat();
                } else {
                    return Promise.reject();
                }
            }, this._heartbeatInterval);
            this._heartbeatTimer.start();
        }
    }

    private _onWebsocketClose(): void {
        const wasLogged = !!(this._heartbeatTimer && this._heartbeatTimer.isRunning);
        if (this._heartbeatTimer && this._heartbeatTimer.isRunning) {
            this._heartbeatTimer.stop();
        }
        if (this._onClose) {
            this._onClose(wasLogged);
        }
    }

    private _onWebsocketError(error): void {
        const wasLogged = !!(this._heartbeatTimer && this._heartbeatTimer.isRunning);
        if (this._heartbeatTimer && this._heartbeatTimer.isRunning) {
            this._heartbeatTimer.stop();
        }
        if (this._onClose) {
            this._onClose(wasLogged, error);
        }
    }
}
