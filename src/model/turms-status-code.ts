enum Code {
    OK = 2000,
    NOT_FOUND,
    ALREADY_UP_TO_DATE,
    RECIPIENTS_OFFLINE,

    NOT_RESPONSIBLE = 3000,

    FAILED = 4000,
    DISABLE_FUNCTION,
    EXPIRY_DATE_BEFORE_NOW,
    EXPIRY_RESOURCE,
    ID_DUPLICATED,
    ILLEGAL_ARGUMENTS,
    ILLEGAL_DATE_FORMAT,
    OWNED_RESOURCE_LIMIT_REACHED,
    REQUESTED_RECORDS_TOO_MANY,
    RESOURCES_HAVE_BEEN_HANDLED,
    RESOURCES_HAVE_CHANGED,
    SESSION_SIMULTANEOUS_CONFLICTS_DECLINE,
    SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY,
    SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE,
    SUCCESSOR_NOT_GROUP_MEMBER,
    TARGET_USERS_UNAUTHORIZED,
    UNAUTHORIZED,

    SERVER_INTERNAL_ERROR = 5000,
    LOGGED_DEVICES_CANNOT_OFFLINE
}

export default class TurmsStatusCode {
    private static _code2ReasonMap = {
        [Code.OK]: "ok",
        [Code.NOT_RESPONSIBLE]: "The server isn't responsible for the user",
        [Code.FAILED]: "failed",
        [Code.SERVER_INTERNAL_ERROR]: "Internal server error",

        [Code.NOT_FOUND]: "Not Found",
        [Code.ALREADY_UP_TO_DATE]: "Already up-to-date",
        [Code.RECIPIENTS_OFFLINE]: "The recipients are offline",

        [Code.DISABLE_FUNCTION]: "The function has been disabled in servers",
        [Code.EXPIRY_DATE_BEFORE_NOW]: "Expiration date must be greater than now",
        [Code.EXPIRY_RESOURCE]: "The target resource has expired",
        [Code.ID_DUPLICATED]: "ID must be unique",
        [Code.ILLEGAL_ARGUMENTS]: "Illegal arguments",
        [Code.ILLEGAL_DATE_FORMAT]: "Illegal date format",
        [Code.OWNED_RESOURCE_LIMIT_REACHED]: "The resource limit is reached",
        [Code.REQUESTED_RECORDS_TOO_MANY]: "Too many records are requested",
        [Code.RESOURCES_HAVE_BEEN_HANDLED]: "The resources have been handled",
        [Code.RESOURCES_HAVE_CHANGED]: "The resources have been changed",
        [Code.SESSION_SIMULTANEOUS_CONFLICTS_DECLINE]: "A different device has logged into your account",
        [Code.SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY]: "Someone attempted to log into your account",
        [Code.SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE]: "A different device has logged into your account",
        [Code.SUCCESSOR_NOT_GROUP_MEMBER]: "The successor is not the group member",
        [Code.TARGET_USERS_UNAUTHORIZED]: "The target users are unauthorized",
        [Code.UNAUTHORIZED]: "Unauthorized",
        [Code.LOGGED_DEVICES_CANNOT_OFFLINE]: "Cannot set logged in devices offline"
    };

    static isSuccessCode(code: number | string | Code): boolean {
        if (typeof code === 'string') {
            code = parseInt(code);
        }
        return code === Code.OK;
    }

    static isErrorCode(code: number | string): boolean {
        return !this.isSuccessCode(code);
    }

    static getReason(code: number): string {
        return this._code2ReasonMap[code];
    }
}