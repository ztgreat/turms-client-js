import TurmsClient from "../turms-client";
import { im } from "../model/proto-bundle";
import { Response } from "../model/response";
import GroupMemberRole = im.turms.proto.GroupMemberRole;
export default class GroupService {
    private _turmsClient;
    constructor(turmsClient: TurmsClient);
    createGroup(name: string, intro?: string, announcement?: string, profilePictureUrl?: string, groupTypeId?: number): Promise<number>;
    deleteGroup(groupId: number): Promise<void>;
    updateGroup(groupId: number, groupName?: string, intro?: string, announcement?: string, profilePictureUrl?: string, groupTypeId?: number, muteEndDate?: Date, successorId?: number, quitAfterTransfer?: boolean): Promise<void>;
    transferOwnership(groupId: number, successorId: number, quitAfterTransfer?: boolean): Promise<void>;
    muteGroup(groupId: number, muteEndDate: Date): Promise<void>;
    unmuteGroup(groupId: number): Promise<void>;
    queryGroup(groupId: number, lastUpdatedDate?: Date): Promise<Response.GroupWithVersion>;
    queryJoinedGroupsIds(lastUpdatedDate?: Date): Promise<number[]>;
    queryJoinedGroupsInfos(lastUpdatedDate?: Date): Promise<Response.GroupWithVersion>;
    addGroupJoinQuestion(groupId: number, question: string, answers: string[], score: number): Promise<number>;
    deleteGroupJoinQuestion(questionId: number): Promise<void>;
    updateGroupJoinQuestion(questionId: number, question?: string, answers?: string[], score?: number): Promise<void>;
    blacklistUser(groupId: number, userId: number): Promise<void>;
    unblacklistUser(groupId: number, userId: number): Promise<void>;
    queryBlacklistedUsersIds(groupId: number, lastUpdatedDate?: Date): Promise<number[]>;
    queryBlacklistedUsersInfos(groupId: number, lastUpdatedDate?: Date): Promise<Response.UsersInfosWithVersion>;
    createInvitation(groupId: number, inviteeId: number, content: string): Promise<number>;
    deleteInvitation(invitationId: number): Promise<void>;
    queryInvitations(groupId: number, lastUpdatedDate?: Date): Promise<Response.GroupInvitationsWithVersion>;
    createJoinRequest(groupId: number, content: string): Promise<number>;
    deleteJoinRequest(requestId: number): Promise<void>;
    queryJoinRequests(groupId: number, lastUpdatedDate?: Date): Promise<Response.GroupJoinRequestsWithVersion>;
    queryGroupJoinQuestionsRequest(groupId: number, withAnswers?: boolean, lastUpdatedDate?: Date): Promise<Response.GroupJoinQuestionsWithVersion>;
    answerGroupQuestions(questionIdsAndAnswers: {
        [k: number]: string;
    }): Promise<boolean>;
    addGroupMember(groupId: number, userId: number, name?: string, role?: string | GroupMemberRole, muteEndDate?: Date): Promise<void>;
    quitGroup(groupId: number, successorId?: number, quitAfterTransfer?: boolean): Promise<void>;
    removeGroupMember(groupId: number, memberId: number): Promise<void>;
    updateGroupMemberInfo(groupId: number, memberId: number, name?: string, role?: string | GroupMemberRole, muteEndDate?: Date): Promise<void>;
    muteGroupMember(groupId: number, memberId: number, muteEndDate: Date): Promise<void>;
    unmuteGroupMember(groupId: number, memberId: number): Promise<void>;
    queryGroupMembers(groupId: number, withStatus?: boolean, lastUpdatedDate?: Date): Promise<Response.GroupMembersWithVersion>;
    queryGroupMembersByMembersIds(groupId: number, membersIds: number[], withStatus?: boolean): Promise<Response.GroupMembersWithVersion>;
}
