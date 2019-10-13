import ResponseManager from "./manager/response-manager";
import TurmsDriver from "./driver/turms-driver";
import RequestManager from "./manager/request-manager";
import UserService from "./service/user-service";
import GroupService from "./service/group-service";
import MessageService from "./service/message-service";
var TurmsClient = /** @class */ (function () {
    function TurmsClient(baseUrl) {
        this._driver = new TurmsDriver(baseUrl);
        this._requestManager = new RequestManager(this);
        this._responseManager = new ResponseManager(this);
        this._userService = new UserService(this);
        this._groupService = new GroupService(this);
        this._messageService = new MessageService(this);
    }
    Object.defineProperty(TurmsClient.prototype, "driver", {
        //Driver
        get: function () {
            return this._driver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "requestManager", {
        //Manager
        get: function () {
            return this._requestManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "responseManager", {
        get: function () {
            return this._responseManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "userService", {
        //Service
        get: function () {
            return this._userService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "groupService", {
        get: function () {
            return this._groupService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "messageService", {
        get: function () {
            return this._messageService;
        },
        enumerable: true,
        configurable: true
    });
    return TurmsClient;
}());
export default TurmsClient;
//# sourceMappingURL=turms-client.js.map