import TurmsClient from "../turms-client";
import { im } from "../model/proto-bundle";
import { Response } from "../model/response";
import UserStatus = im.turms.proto.UserStatus;
import ProfileAccessStrategy = im.turms.proto.ProfileAccessStrategy;
import ResponseAction = im.turms.proto.ResponseAction;
import DeviceType = im.turms.proto.DeviceType;
export default class UserService {
    private _turmsClient;
    private _userId?;
    private _password?;
    constructor(turmsClient: TurmsClient);
    get password(): string;
    get userId(): number;
    static getUserLocationFromBrowser(): Promise<Position>;
    login(userId: number, password: string, location?: string | Position, userOnlineStatus?: UserStatus, deviceType?: DeviceType): Promise<void>;
    logout(): Promise<CloseEvent>;
    updateUserOnlineStatus(onlineStatus: string | UserStatus): Promise<void>;
    updatePassword(password: string): Promise<void>;
    updateProfile(name?: string, intro?: string, profilePictureUrl?: string, profileAccessStrategy?: string | ProfileAccessStrategy): Promise<void>;
    queryUserGroupInvitations(lastUpdatedDate?: Date): Promise<Response.GroupInvitationsWithVersion>;
    queryUserProfile(userId: number, lastUpdatedDate?: Date): Promise<Response.UserInfoWithVersion>;
    queryUsersIdsNearby(latitude: number, longitude: number, distance?: number, maxNumber?: number): Promise<number[]>;
    queryUsersInfosNearby(latitude: number, longitude: number, distance?: number, maxNumber?: number): Promise<Response.UserInfo[]>;
    queryUsersOnlineStatusRequest(usersIds: number[]): Promise<Response.UserStatusDetail[]>;
    queryRelationships(relatedUsersIds?: number[], isRelatedUsers?: boolean, isBlocked?: boolean, groupIndex?: number, lastUpdatedDate?: Date): Promise<Response.UserRelationshipsWithVersion>;
    queryRelatedUsersIds(isBlocked?: boolean, groupIndex?: number, lastUpdatedDate?: Date): Promise<Response.IdsWithVersion>;
    queryFriends(groupIndex?: number): Promise<Response.UserRelationshipsWithVersion>;
    queryBlacklistedUsers(groupIndex?: number): Promise<Response.UserRelationshipsWithVersion>;
    createRelationship(userId: number, isBlocked: boolean, groupIndex?: number): Promise<void>;
    createFriendRelationship(userId: number, groupIndex?: number): Promise<void>;
    createBlacklistedUserRelationship(userId: number, groupIndex?: number): Promise<void>;
    deleteRelationship(relatedUserId: number, deleteGroupIndex?: number, targetGroupIndex?: number): Promise<void>;
    updateRelationship(relatedUserId: number, isBlocked?: boolean, groupIndex?: number): Promise<void>;
    sendFriendRequest(recipientId: number, content: string): Promise<void>;
    replyFriendRequest(requestId: number, responseAction: string | ResponseAction, reason?: string): Promise<void>;
    queryFriendRequests(lastUpdatedDate?: Date): Promise<Response.UserFriendRequestsWithVersion>;
    createRelationshipGroup(name: string): Promise<void>;
    deleteRelationshipGroups(groupIndex: number, targetGroupIndex?: number): Promise<void>;
    updateRelationshipGroup(groupIndex: number, newName: string): Promise<void>;
    queryRelationshipGroups(lastUpdatedDate?: Date): Promise<Response.UserRelationshipGroupsWithVersion>;
    moveRelatedUserToGroup(relatedUserId: number, groupIndex: number): Promise<void>;
    updateLocation(latitude: number, longitude: number, name?: string, address?: string): Promise<void>;
}