import { im } from "../model/proto-bundle";
import TurmsResponse = im.turms.proto.TurmsResponse;
export default class TurmsDriver {
    private _heartbeatInterval;
    private _websocket;
    private _heartbeatTimer?;
    private _onMessage?;
    private _onClose?;
    private _url;
    private _connectionTimeout;
    private _requestTimeout;
    private _requestsMap;
    constructor(url?: string, connectionTimeout?: number, requestTimeout?: number);
    set onClose(value: any);
    set onMessage(value: any);
    sendHeartbeat(): Promise<void>;
    connected(): boolean;
    disconnect(): Promise<CloseEvent>;
    connect(url?: string, connectionTimeout?: number, requestTimeout?: number): Promise<void>;
    resetHeartBeatTimer(): void;
    send(message: im.turms.proto.ITurmsRequest): Promise<TurmsResponse>;
    private _generateRandomId;
    private _onWebsocketOpen;
    private _onWebsocketClose;
    private _onWebsocketError;
}
