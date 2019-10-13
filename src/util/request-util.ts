import {google} from "../model/proto-bundle";
import Int64Value = google.protobuf.Int64Value;

export default class RequestUtil {
    static ERROR = new Error("Illegal parameters");

    static getIfNotNull(value: any): any | undefined {
        return value ? {value} : undefined;
    }

    static getTimeIfNotNull(value: Date): any | undefined {
        return value ? {value: value.getTime()} : undefined;
    }

    // static getDateIfNotNull(value: Int64Value): Date | undefined {
    //     return value && value.value ? new Date(value.value) : undefined;
    // }

    private static isFalsy(value: any): boolean {
        return typeof value === 'undefined' || value === null || value === [];
    }

    private static isTruthy(value: any): boolean {
        return !this.isFalsy(value);
    }

    static throwIfAnyFalsy(...values: any[]): void {
        if (this.isFalsy(values)) {
            throw this.ERROR;
        } else {
            for (const value of values) {
                if (this.isFalsy(value)) {
                    throw this.ERROR;
                }
            }
        }
    }

    static throwIfAllFalsy(...values: any[]): void {
        if (this.isFalsy(values)) {
            throw this.ERROR;
        } else {
            for (const value of values) {
                if (this.isTruthy(value)) {
                    return;
                }
            }
            throw this.ERROR;
        }
    }
}