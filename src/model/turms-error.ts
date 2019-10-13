import {im} from "./proto-bundle";
import TurmsStatusCode from "./turms-status-code";
import TurmsResponse = im.turms.proto.TurmsResponse;

export default class TurmsError {
    private readonly _code: number;
    private readonly _reason: string;

    static URL_UNINITIALIZED = 'The baseUrl is uninitialized.';
    static CLIENT_ALREADY_CONNECTED = 'The client has connected to the server. Please close it before logging in again.';

    constructor(code: number, reason: string) {
        this._code = code;
        this._reason = reason;
    }

    get code(): number {
        return this._code;
    }

    get reason(): string {
        return this._reason;
    }

    toString(): string {
        return `${this._code}:${this._reason}`;
    }

    static fromResponse(response: TurmsResponse): TurmsError {
        return new TurmsError(response.code, TurmsStatusCode.getReason(response.code));
    }
}