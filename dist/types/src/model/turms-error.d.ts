import { im } from "./proto-bundle";
import TurmsResponse = im.turms.proto.TurmsResponse;
export default class TurmsError {
    private readonly _code;
    private readonly _reason;
    static URL_UNINITIALIZED: string;
    static CLIENT_ALREADY_CONNECTED: string;
    constructor(code: number, reason: string);
    get code(): number;
    get reason(): string;
    toString(): string;
    static fromResponse(response: TurmsResponse): TurmsError;
}
