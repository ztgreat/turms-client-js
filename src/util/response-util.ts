import {google, im} from "../model/proto-bundle";
import {Response} from "../model/response";
import TurmsResponse = im.turms.proto.TurmsResponse;
import IInt64Value = google.protobuf.IInt64Value;

export default class ResponseUtil {
    static transform(data?: object | number, parentKey?: string): object | number | undefined {
        // Note: data can be 0
        if (typeof data !== 'undefined' && data !== null) {
            if (typeof parentKey === 'string' && (parentKey.endsWith('Date') || parentKey.endsWith('_date') || parentKey === 'date')
                    && typeof data === 'number') {
                return new Date(data);
            } else if (typeof data === 'object') {
                const keys = Object.keys(data);
                for (const key of keys) {
                    if ((key === 'value' || key === 'values') && keys.length === 1) {
                        return data[key];
                    } else {
                        data[key] = this.transform(data[key], key);
                    }
                }
            }
        }
        return data;
    }

    static getFirstArrayAndTransform(data?: object): Array<any> | undefined {
        if (typeof data === 'object') {
            for (const key of Object.keys(data)) {
                const item = data[key];
                if (item instanceof Array) {
                    item.map(value => this.transform(value));
                    return item;
                }
            }
        }
    }

    static transformDate(date?: IInt64Value): Date | undefined {
        if (date && typeof date.value === 'number') {
            return new Date(date.value);
        }
    }

    static getFirstIdFromIds(response?: TurmsResponse): number | null {
        return response.data && response.data.ids && response.data.ids.values
            ? response.data.ids.values[0] : null;
    }

    static getIds(response: im.turms.proto.TurmsResponse): number[] {
        return response.data && response.data.ids
            ? response.data.ids.values : null;
    }

    static getIdsWithVersion(response: im.turms.proto.TurmsResponse): Response.IdsWithVersion {
        return {
            ids: response.data.idsWithVersion.values,
            lastUpdatedDate: response.data.idsWithVersion.lastUpdatedDate && response.data.idsWithVersion.lastUpdatedDate.value ?
                new Date(response.data.idsWithVersion.lastUpdatedDate.value) : null
        };
    }
}
