import { google, im } from "../model/proto-bundle";
import { Response } from "../model/response";
import TurmsResponse = im.turms.proto.TurmsResponse;
import IInt64Value = google.protobuf.IInt64Value;
export default class ResponseUtil {
    static transform(data?: object | number, parentKey?: string): object | number | undefined;
    static getFirstArrayAndTransform(data?: object): Array<any> | undefined;
    static transformDate(date?: IInt64Value): Date | undefined;
    static getFirstIdFromIds(response?: TurmsResponse): number | null;
    static getIds(response: im.turms.proto.TurmsResponse): number[];
    static getIdsWithVersion(response: im.turms.proto.TurmsResponse): Response.IdsWithVersion;
}
