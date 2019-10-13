import TurmsClient from "../turms-client";
import ConstantTransformer from "../util/constant-transformer";
import {im} from "../model/proto-bundle";
import RequestUtil from "../util/request-util";
import {Response} from "../model/response";
import ResponseUtil from "../util/response-util";
import UserStatus = im.turms.proto.UserStatus;
import ProfileAccessStrategy = im.turms.proto.ProfileAccessStrategy;
import ResponseAction = im.turms.proto.ResponseAction;
import DeviceType = im.turms.proto.DeviceType;

const COOKIE_USER_ID = 'uid';
const COOKIE_PASSWORD = 'pwd';
const COOKIE_USER_ONLINE_STATUS = 'us';
const COOKIE_DEVICE_TYPE = 'dt';
const COOKIE_LOCATION = 'loc';

export default class UserService {
    private _turmsClient: TurmsClient;
    private _userId?: number;
    private _password?: string;

    constructor(turmsClient: TurmsClient) {
        this._turmsClient = turmsClient;
    }

    get password(): string {
        return this._password;
    }

    get userId(): number {
        return this._userId;
    }

    /**
     * Note: Because of user privacy, most of modern browsers request Geolocation APIs to run in the https,
     * getUserLocation() cannot get the location of user in insecure sites.
     * FYI: https://stackoverflow.com/questions/37835805/http-sites-does-not-detect-the-location-in-chrome-issue
     * https://caniuse.com/#search=Geolocation
     */
    static getUserLocationFromBrowser(): Promise<Position> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position);
            }, positionError => {
                reject(positionError);
            });
        });
    }

    /**
     * Note: Make sure to run turms-client in the http(s) protocol rather than the file protocol,
     * or the browsers usually cannot pass the cookies which carry the userId and password to servers.
     * @deviceType: When DeviceType.UNKNOWN, the turms server will try to detect the user's device automatically
     */
    login(
        userId: number,
        password: string,
        location?: string | Position,
        userOnlineStatus = UserStatus.AVAILABLE,
        deviceType = DeviceType.UNKNOWN): Promise<void> {
        RequestUtil.throwIfAnyFalsy(userId, password);
        this._userId = userId;
        this._password = password;
        document.cookie = `${COOKIE_USER_ID}=${userId}; path=/`;
        document.cookie = `${COOKIE_PASSWORD}=${escape(password)}; path=/`;
        document.cookie = `${COOKIE_USER_ONLINE_STATUS}=${userOnlineStatus.toString()}; path=/`;
        document.cookie = `${COOKIE_DEVICE_TYPE}=${deviceType.toString()}; path=/`;
        if (location) {
            if (typeof location === 'string') {
                document.cookie = `${COOKIE_LOCATION}=${location}; path=/`;
            } else {
                document.cookie = `${COOKIE_LOCATION}=${location.coords.latitude}:${location.coords.longitude}; path=/`;
            }
        }
        const promise = this._turmsClient.driver.connect();
        const now = new Date().toUTCString();
        document.cookie = `${COOKIE_USER_ID}=;expires=${now}`;
        document.cookie = `${COOKIE_PASSWORD}=;expires=${now}`;
        document.cookie = `${COOKIE_USER_ONLINE_STATUS}=;expires=${now}`;
        document.cookie = `${COOKIE_DEVICE_TYPE}=;expires=${now}`;
        document.cookie = `${COOKIE_LOCATION}=;expires=${now}`;
        return promise;
    }

    logout(): Promise<CloseEvent> {
        return this._turmsClient.driver.disconnect();
    }

    updateUserOnlineStatus(onlineStatus: string | UserStatus): Promise<void> {
        RequestUtil.throwIfAnyFalsy(onlineStatus);
        if (typeof onlineStatus === 'string') {
            onlineStatus = ConstantTransformer.string2UserOnlineStatus(onlineStatus);
        }
        if (onlineStatus === UserStatus.OFFLINE) {
            throw new Error('illegal params');
        }
        return this._turmsClient.driver.send({
            updateUserOnlineStatusRequest: {
                userStatus: onlineStatus
            }
        }).then();
    }

    updatePassword(password: string): Promise<void> {
        RequestUtil.throwIfAnyFalsy(password);
        return this._turmsClient.driver.send({
            updateUserRequest: {
                password: RequestUtil.getIfNotNull(password)
            }
        }).then();
    }

    updateProfile(
        name?: string,
        intro?: string,
        profilePictureUrl?: string,
        profileAccessStrategy?: string | ProfileAccessStrategy): Promise<void> {
        RequestUtil.throwIfAllFalsy(name, intro, profilePictureUrl, profileAccessStrategy);
        if (typeof profileAccessStrategy === 'string') {
            profileAccessStrategy = ConstantTransformer.string2ProfileAccessStrategy(profileAccessStrategy);
        }
        return this._turmsClient.driver.send({
            updateUserRequest: {
                name: RequestUtil.getIfNotNull(name),
                intro: RequestUtil.getIfNotNull(intro),
                profilePictureUrl: RequestUtil.getIfNotNull(profilePictureUrl),
                profileAccessStrategy: profileAccessStrategy
            }
        }).then();
    }

    queryUserGroupInvitations(lastUpdatedDate?: Date): Promise<Response.GroupInvitationsWithVersion> {
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryUserGroupInvitationsRequest: {
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.groupInvitationsWithVersion));
    }

    queryUserProfile(userId: number, lastUpdatedDate?: Date): Promise<Response.UserInfoWithVersion> {
        RequestUtil.throwIfAnyFalsy(userId);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryUserProfileRequest: {
                userId: userId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => {
            return {
                userInfo: ResponseUtil.transform(response.data.usersInfosWithVersion.userInfos[0]),
                lastUpdatedDate: ResponseUtil.transformDate(response.data.usersInfosWithVersion.lastUpdatedDate)
            }
        });
    }

    queryUsersIdsNearby(latitude: number, longitude: number, distance?: number, maxNumber?: number): Promise<number[]> {
        RequestUtil.throwIfAnyFalsy(latitude, longitude);
        return this._turmsClient.driver.send({
            queryUsersIdsNearbyRequest: {
                latitude: latitude,
                longitude: longitude,
                distance: RequestUtil.getIfNotNull(distance),
                maxNumber: RequestUtil.getIfNotNull(maxNumber)
            }
        }).then(response => ResponseUtil.getIds(response));
    }

    queryUsersInfosNearby(latitude: number, longitude: number, distance?: number, maxNumber?: number): Promise<Response.UserInfo[]> {
        RequestUtil.throwIfAnyFalsy(latitude, longitude);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryUsersInfosNearbyRequest: {
                latitude: latitude,
                longitude: longitude,
                distance: RequestUtil.getIfNotNull(distance),
                maxNumber: RequestUtil.getIfNotNull(maxNumber)
            }
        }).then(response => ResponseUtil.getFirstArrayAndTransform(response.data.usersInfosWithVersion.userInfos));
    }

    queryUsersOnlineStatusRequest(usersIds: number[]): Promise<Response.UserStatusDetail[]> {
        RequestUtil.throwIfAnyFalsy(usersIds);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryUsersOnlineStatusRequest: {
                usersIds
            }
        }).then(response => ResponseUtil.getFirstArrayAndTransform(response.data.usersOnlineStatuses));
    }

    // Relationship

    queryRelationships(
        relatedUsersIds?: number[],
        isRelatedUsers?: boolean,
        isBlocked?: boolean,
        groupIndex?: number,
        lastUpdatedDate?: Date): Promise<Response.UserRelationshipsWithVersion> {
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryRelationshipsRequest: {
                relatedUsersIds,
                isBlocked: RequestUtil.getIfNotNull(isBlocked),
                groupIndex: RequestUtil.getIfNotNull(groupIndex),
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.userRelationshipsWithVersion));
    }

    queryRelatedUsersIds(
        isBlocked?: boolean,
        groupIndex?: number,
        lastUpdatedDate?: Date): Promise<Response.IdsWithVersion> {
        return this._turmsClient.driver.send({
            queryRelatedUsersIdsRequest: {
                isBlocked: RequestUtil.getIfNotNull(isBlocked),
                groupIndex: RequestUtil.getIfNotNull(groupIndex),
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.getIdsWithVersion(response));
    }

    queryFriends(groupIndex?: number): Promise<Response.UserRelationshipsWithVersion> {
        return this.queryRelationships(undefined, true, false, groupIndex);
    }

    queryBlacklistedUsers(groupIndex?: number): Promise<Response.UserRelationshipsWithVersion> {
        return this.queryRelationships(undefined, true, true, groupIndex);
    }

    createRelationship(userId: number, isBlocked: boolean, groupIndex?: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(userId, isBlocked);
        return this._turmsClient.driver.send({
            createRelationshipRequest: {
                userId,
                isBlocked: isBlocked,
                groupIndex: RequestUtil.getIfNotNull(groupIndex)
            }
        }).then();
    }

    createFriendRelationship(userId: number, groupIndex?: number): Promise<void> {
        return this.createRelationship(userId, false, groupIndex);
    }

    createBlacklistedUserRelationship(userId: number, groupIndex?: number): Promise<void> {
        return this.createRelationship(userId, true, groupIndex);
    }

    deleteRelationship(relatedUserId: number, deleteGroupIndex?: number, targetGroupIndex?: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(relatedUserId);
        return this._turmsClient.driver.send({
            deleteRelationshipRequest: {
                relatedUserId,
                groupIndex: RequestUtil.getIfNotNull(deleteGroupIndex),
                targetGroupIndex: RequestUtil.getIfNotNull(targetGroupIndex)
            }
        }).then();
    }

    updateRelationship(relatedUserId: number, isBlocked?: boolean, groupIndex?: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(relatedUserId);
        RequestUtil.throwIfAllFalsy(isBlocked, groupIndex);
        return this._turmsClient.driver.send({
            updateRelationshipRequest: {
                relatedUserId,
                blocked: RequestUtil.getIfNotNull(isBlocked),
                newGroupIndex: RequestUtil.getIfNotNull(groupIndex)
            }
        }).then();
    }

    sendFriendRequest(recipientId: number, content: string): Promise<void> {
        RequestUtil.throwIfAnyFalsy(recipientId, content);
        return this._turmsClient.driver.send({
            createFriendRequestRequest: {
                recipientId,
                content
            }
        }).then();
    }

    replyFriendRequest(requestId: number, responseAction: string | ResponseAction, reason?: string): Promise<void> {
        RequestUtil.throwIfAnyFalsy(requestId, responseAction);
        if (typeof responseAction === 'string') {
            responseAction = ConstantTransformer.string2ResponseAction(responseAction);
        }
        return this._turmsClient.driver.send({
            updateFriendRequestRequest: {
                requestId: requestId,
                responseAction: responseAction,
                reason: RequestUtil.getIfNotNull(reason)
            }
        }).then();
    }

    queryFriendRequests(lastUpdatedDate?: Date): Promise<Response.UserFriendRequestsWithVersion> {
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryFriendRequestsRequest: {
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.userFriendRequestsWithVersion));
    }

    createRelationshipGroup(name: string): Promise<void> {
        RequestUtil.throwIfAnyFalsy(name);
        return this._turmsClient.driver.send({
            createRelationshipGroupRequest: {
                name
            }
        }).then();
    }

    deleteRelationshipGroups(groupIndex: number, targetGroupIndex?: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupIndex);
        return this._turmsClient.driver.send({
            deleteRelationshipGroupRequest: {
                groupIndex,
                targetGroupIndex: RequestUtil.getIfNotNull(targetGroupIndex)
            }
        }).then();
    }

    updateRelationshipGroup(groupIndex: number, newName: string): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupIndex, newName);
        return this._turmsClient.driver.send({
            updateRelationshipGroupRequest: {
                groupIndex,
                newName
            }
        }).then();
    }

    queryRelationshipGroups(lastUpdatedDate?: Date): Promise<Response.UserRelationshipGroupsWithVersion> {
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryRelationshipGroupsRequest: {
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.userRelationshipGroupsWithVersion));
    }

    moveRelatedUserToGroup(relatedUserId: number, groupIndex: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(relatedUserId, groupIndex);
        return this._turmsClient.driver.send({
            updateRelationshipRequest: {
                relatedUserId,
                newGroupIndex: RequestUtil.getIfNotNull(groupIndex)
            }
        }).then();
    }

    /**
     * updateLocation() in UserService is different from sendMessage() with records of location in MessageService
     * updateLocation() in UserService sends the location of user to the server only.
     * sendMessage() with records of location sends user's location to both server and its recipients.
     */
    updateLocation(latitude: number, longitude: number, name?: string, address?: string): Promise<void> {
        RequestUtil.throwIfAnyFalsy(latitude, longitude);
        return this._turmsClient.driver.send({
            updateUserLocationRequest: {
                latitude,
                longitude,
                name: RequestUtil.getIfNotNull(name),
                address: RequestUtil.getIfNotNull(address)
            }
        }).then();
    }
}
