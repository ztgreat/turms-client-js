import { CreateFriendRequestRequest, CreateRelationshipGroupRequest, CreateRelationshipRequest, DeleteRelationshipGroupRequest, DeleteRelationshipRequest, google, QueryRelationshipGroupsRequest, QueryRelationshipsRequest, QueryUserProfileRequest, QueryUsersIdsNearbyRequest, QueryUsersInfosNearbyRequest, UpdateFriendRequestRequest, UpdateLocationRequest, UpdateRelationshipGroupRequest, UpdateRelationshipRequest, UpdateTypingStatusRequest, UpdateUserOnlineStatusRequest, UpdateUserProfileRequest, UserStatus } from "../model/dto-bundle";
var StringValue = google.protobuf.StringValue;
var FloatValue = google.protobuf.FloatValue;
var Int32Value = google.protobuf.Int32Value;
var BoolValue = google.protobuf.BoolValue;
var Int64Value = google.protobuf.Int64Value;
import ConstantsUtil from "../util/constants-util";
var UserService = /** @class */ (function () {
    function UserService(turmsClient) {
        this._turmsClient = turmsClient;
        this._turmsClient.driver.addOpenListener(this._onLogin);
        this._turmsClient.driver.addCloseListener(this._onClose);
        this._turmsClient.driver.addErrorListener(this._onLoginError);
    }
    Object.defineProperty(UserService.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "customOnLoginListener", {
        set: function (value) {
            this._customOnLoginListener = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "customOnLoginErrorListener", {
        set: function (value) {
            this._customOnLoginErrorListener = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "customOnLogoutListener", {
        set: function (value) {
            this._customOnLogoutListener = value;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (userId, password, userOnlineStatus, deviceType, deviceDetail, location, onLogin, onLoginError) {
        this.customOnLoginListener = onLogin || this._customOnLoginListener;
        this.customOnLoginErrorListener = onLoginError || this._customOnLoginErrorListener;
        this._userId = userId;
        this._password = password;
        document.cookie = 'uid=' + userId;
        document.cookie = 'pwd=' + escape(password);
        document.cookie = userOnlineStatus ? 'us=' + userOnlineStatus.toUpperCase() : '';
        document.cookie = deviceType ? 'dt=' + deviceType.toUpperCase() : '';
        document.cookie = deviceDetail ? 'dd=' + deviceDetail.toUpperCase() : '';
        document.cookie = location ? 'loc=' + location.toUpperCase() : '';
        this._turmsClient.driver.open();
        document.cookie = 'uid=;expires=' + new Date().toUTCString();
        document.cookie = 'pwd=;expires=' + new Date().toUTCString();
        document.cookie = 'us=;expires=' + new Date().toUTCString();
        document.cookie = 'dt=;expires=' + new Date().toUTCString();
        document.cookie = 'dd=;expires=' + new Date().toUTCString();
        document.cookie = 'loc=;expires=' + new Date().toUTCString();
    };
    UserService.prototype.logout = function (code, reason, onLogout) {
        this.customOnLogoutListener = onLogout || this._customOnLogoutListener;
        this._turmsClient.driver.close();
    };
    UserService.prototype.updateUserOnlineStatus = function (onlineStatus, onAcknowledge) {
        if (onlineStatus === UserStatus.OFFLINE) {
            throw new Error('illegal params');
        }
        if (typeof onlineStatus === 'string') {
            onlineStatus = ConstantsUtil.string2UserOnlineStatus(onlineStatus);
        }
        var request = UpdateUserOnlineStatusRequest.encode({
            userStatus: onlineStatus
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.updateUserProfile = function (name, intro, profilePictureUrl, profileAccessStrategy, onAcknowledge) {
        if (!name && !intro && !profilePictureUrl && !profileAccessStrategy) {
            throw new Error('illegal params');
        }
        if (typeof profileAccessStrategy === 'string') {
            profileAccessStrategy = ConstantsUtil.string2ProfileAccessStrategy(profileAccessStrategy);
        }
        var request = UpdateUserProfileRequest.encode({
            name: StringValue.fromObject({ value: name }),
            intro: StringValue.fromObject({ value: intro }),
            profilePictureUrl: StringValue.fromObject({ value: profilePictureUrl }),
            profileAccessStrategy: profileAccessStrategy
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.queryUserProfile = function (userId, onAcknowledge) {
        var request = QueryUserProfileRequest.encode({
            userId: userId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.queryUsersIdsNearby = function (onResponse, latitude, longitude, distance, maxNumber) {
        var request = QueryUsersIdsNearbyRequest.encode({
            latitude: latitude,
            longitude: longitude,
            distance: FloatValue.fromObject({ value: distance }),
            maxNumber: Int32Value.fromObject({ value: maxNumber })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    UserService.prototype.queryUsersInfosNearby = function (onResponse, latitude, longitude, distance, maxNumber) {
        var request = QueryUsersInfosNearbyRequest.encode({
            latitude: latitude,
            longitude: longitude,
            distance: FloatValue.fromObject({ value: distance }),
            maxNumber: Int32Value.fromObject({ value: maxNumber })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    // Relationship
    UserService.prototype.queryRelationships = function (onResponse, userId, isRelatedUsers, isContacts, blocked, groupName) {
        if (!userId && !isRelatedUsers && !isContacts && !blocked && !groupName) {
            throw new Error('illegal params');
        }
        var request = QueryRelationshipsRequest.encode({
            userId: Int64Value.fromObject({ value: userId }),
            isRelatedUsers: BoolValue.fromObject({ value: isRelatedUsers }),
            isContacts: BoolValue.fromObject({ value: isContacts }),
            blocked: BoolValue.fromObject({ value: blocked }),
            groupName: StringValue.fromObject({ value: groupName })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    UserService.prototype.queryFriends = function (onResponse, isContact, group) {
        return this.queryRelationships(onResponse, undefined, true, isContact, false, group);
    };
    UserService.prototype.queryBlacklistedUsers = function (onResponse, isContact, group) {
        return this.queryRelationships(onResponse, undefined, true, isContact, true, group);
    };
    /**
     * Note: A failed result will return if the turms server requiring to send a friend request before creating a relationship.
     */
    UserService.prototype.createRelationship = function (userId, isContact, blocked, groupName, onAcknowledge) {
        var request = CreateRelationshipRequest.encode({
            userId: userId,
            isContact: isContact,
            blocked: blocked,
            groupName: groupName
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.createFriendRelationship = function (userId, isContact, group, onAcknowledge) {
        this.createRelationship(userId, isContact, false, group, onAcknowledge);
    };
    UserService.prototype.createBlacklistedUserRelationship = function (userId, isContact, group, onAcknowledge) {
        this.createRelationship(userId, isContact, true, group, onAcknowledge);
    };
    UserService.prototype.deleteRelationship = function (relatedUserId, onAcknowledge) {
        var request = DeleteRelationshipRequest.encode({
            relatedUserId: relatedUserId
        }).finish();
        this._turmsClient.requestManager.send(request, onAcknowledge);
    };
    UserService.prototype.updateRelationship = function (relatedUserId, isContact, blocked, groupName, onAcknowledge) {
        var request = UpdateRelationshipRequest.encode({
            relatedUserId: relatedUserId,
            isContact: BoolValue.fromObject({ value: isContact }),
            blocked: BoolValue.fromObject({ value: blocked }),
            groupName: StringValue.fromObject({ value: groupName })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.sendFriendRequest = function (recipientId, content, onAcknowledge) {
        var request = CreateFriendRequestRequest.encode({
            recipientId: recipientId,
            content: content
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.replyFriendRequest = function (requestId, responseAction, reason, onAcknowledge) {
        if (typeof responseAction === 'string') {
            responseAction = ConstantsUtil.string2ResponseAction(responseAction);
        }
        var request = UpdateFriendRequestRequest.encode({
            requestId: requestId,
            responseAction: responseAction,
            reason: StringValue.fromObject({ value: reason })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.createRelationshipGroup = function (name, onAcknowledge) {
        var request = CreateRelationshipGroupRequest.encode({
            name: name
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.deleteRelationshipGroups = function (groupName, targetGroupName, onAcknowledge) {
        var request = DeleteRelationshipGroupRequest.encode({
            groupName: groupName,
            targetGroupName: StringValue.fromObject({ value: targetGroupName })
        }).finish();
        this._turmsClient.requestManager.send(request, onAcknowledge);
    };
    UserService.prototype.updateRelationshipGroup = function (name, newName, onAcknowledge) {
        var request = UpdateRelationshipGroupRequest.encode({
            name: name,
            newName: newName
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    UserService.prototype.queryRelationshipGroups = function (onResponse, relationshipGroupLastUpdatedDate) {
        var request = QueryRelationshipGroupsRequest.encode({
            relationshipGroupLastUpdatedDate: Int32Value.fromObject({ value: relationshipGroupLastUpdatedDate })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    UserService.prototype.moveRelatedUserToGroup = function (relatedUserId, groupName, onAcknowledge) {
        var request = UpdateRelationshipRequest.encode({
            relatedUserId: relatedUserId,
            groupName: StringValue.create({ value: groupName })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    // Status
    UserService.prototype.sendTypingStatus = function (chatType, toId, onAcknowledge) {
        if (typeof chatType === 'string') {
            chatType = ConstantsUtil.string2ChatType(chatType);
        }
        var request = UpdateTypingStatusRequest.encode({
            chatType: chatType,
            toId: toId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    /**
     * sendLocation() in UserService is different from sendMessage() with records of Location in MessageService
     * sendLocation() in UserService sends the location of user to the server only.
     * sendMessage() with records of Location sends the location of user to both the server and its recipients.
     */
    UserService.prototype.sendLocation = function () {
        UpdateLocationRequest.create({});
    };
    UserService.prototype.sendLocationPeriodically = function () {
    };
    UserService.prototype._onLogin = function (event) {
        if (this._customOnLoginListener) {
            this._customOnLoginListener(event);
        }
    };
    UserService.prototype._onLoginError = function (error) {
        if (this._customOnLoginErrorListener) {
            this._customOnLoginErrorListener(error);
        }
        //TODO
        //simultaneous_login!
        //route to other servers
        // if (error.data && error.data.code) {
        //     switch (parseInt(error.data.code)) {
        //         case TurmsStatusCode.LOGIN_CONFLICT:
        //             if (onLoginConflict) {
        //                 onLoginConflict();
        //             }
        //             break;
        //     }
        // }
        // if (error.data.code === TurmsStatusCode.LOGIN_CONFLICT) {
        //
        // }
        console.error("Turms Error: " + error);
    };
    UserService.prototype._onClose = function () {
        if (this._customOnLogoutListener) {
            this._customOnLogoutListener();
        }
    };
    return UserService;
}());
export default UserService;
//# sourceMappingURL=user-service.js.map