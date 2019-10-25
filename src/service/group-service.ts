import TurmsClient from "../turms-client";
import ConstantTransformer from "../util/constant-transformer";
import {im} from "../model/proto-bundle";
import RequestUtil from "../util/request-util";
import {Response} from "../model/response";
import ResponseUtil from "../util/response-util";
import GroupMemberRole = im.turms.proto.GroupMemberRole;

export default class GroupService {
    private _turmsClient: TurmsClient;

    constructor(turmsClient: TurmsClient) {
        this._turmsClient = turmsClient;
    }

    createGroup(
        name: string,
        intro?: string,
        announcement?: string,
        profilePictureUrl?: string,
        groupTypeId?: number): Promise<number> {
        RequestUtil.throwIfAnyFalsy(name);
        return this._turmsClient.driver.send({
            createGroupRequest: {
                name,
                intro: RequestUtil.getIfNotNull(intro),
                announcement: RequestUtil.getIfNotNull(announcement),
                profilePictureUrl: RequestUtil.getIfNotNull(profilePictureUrl),
                groupTypeId: RequestUtil.getIfNotNull(groupTypeId)
            }
        }).then(response => ResponseUtil.getFirstIdFromIds(response));
    }

    deleteGroup(groupId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId);
        return this._turmsClient.driver.send({
            deleteGroupRequest: {
                groupId
            }
        }).then();
    }

    updateGroup(
        groupId: number,
        groupName?: string,
        intro?: string,
        announcement?: string,
        profilePictureUrl?: string,
        groupTypeId?: number,
        muteEndDate?: Date,
        successorId?: number,
        quitAfterTransfer?: boolean): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId);
        RequestUtil.throwIfAllFalsy(groupName, intro, announcement, profilePictureUrl, groupTypeId,
            muteEndDate, successorId);
        return this._turmsClient.driver.send({
            updateGroupRequest: {
                groupId,
                groupName: RequestUtil.getIfNotNull(groupName),
                intro: RequestUtil.getIfNotNull(intro),
                announcement: RequestUtil.getIfNotNull(announcement),
                profilePictureUrl: RequestUtil.getIfNotNull(profilePictureUrl),
                muteEndDate: RequestUtil.getTimeIfNotNull(muteEndDate),
                groupTypeId: RequestUtil.getIfNotNull(groupTypeId),
                successorId: RequestUtil.getIfNotNull(successorId),
                quitAfterTransfer: RequestUtil.getIfNotNull(quitAfterTransfer)
            }
        }).then();
    }

    transferOwnership(groupId: number, successorId: number, quitAfterTransfer = false): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, successorId);
        return this.updateGroup(groupId, null, null, null, null, null, null, successorId, quitAfterTransfer);
    }

    muteGroup(groupId: number, muteEndDate: Date): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, muteEndDate);
        return this.updateGroup(groupId, null, null, null, null, null, muteEndDate, null);
    }

    unmuteGroup(groupId: number): Promise<void> {
        return this.muteGroup(groupId, new Date(0));
    }

    queryGroup(groupId: number, lastUpdatedDate?: Date): Promise<Response.GroupWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupRequest: {
                groupId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => {
            return {
                group: ResponseUtil.transform(response.data.groupsWithVersion.groups[0]),
                lastUpdatedDate: ResponseUtil.transformDate(response.data.groupsWithVersion.lastUpdatedDate)
            };
        });
    }

    queryJoinedGroupsIds(lastUpdatedDate?: Date): Promise<number[]> {
        return this._turmsClient.driver.send({
            queryJoinedGroupsIdsRequest: {
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.getIds(response));
    }

    queryJoinedGroupsInfos(lastUpdatedDate?: Date): Promise<Response.GroupWithVersion> {
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryJoinedGroupsInfosRequest: {
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => {
            return {
                group: ResponseUtil.transform(response.data.groupsWithVersion.groups[0]),
                lastUpdatedDate: ResponseUtil.transformDate(response.data.groupsWithVersion.lastUpdatedDate)
            };
        });
    }

    addGroupJoinQuestion(groupId: number, question: string, answers: string[], score: number): Promise<number> {
        RequestUtil.throwIfAnyFalsy(groupId, question, answers, score);
        return this._turmsClient.driver.send({
            createGroupJoinQuestionRequest: {
                groupId,
                question,
                answers,
                score
            }
        }).then(response => ResponseUtil.getFirstIdFromIds(response));
    }

    deleteGroupJoinQuestion(questionId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(questionId);
        return this._turmsClient.driver.send({
            deleteGroupJoinQuestionRequest: {
                questionId
            }
        }).then();
    }

    updateGroupJoinQuestion(questionId: number, question?: string, answers?: string[], score?: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(questionId);
        RequestUtil.throwIfAllFalsy(question, answers);
        return this._turmsClient.driver.send({
            updateGroupJoinQuestionRequest: {
                questionId: questionId,
                question: RequestUtil.getIfNotNull(question),
                answers: answers,
                score: RequestUtil.getIfNotNull(score)
            }
        }).then();
    }

    // Group Blacklist
    blacklistUser(groupId: number, userId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, userId);
        return this._turmsClient.driver.send({
            createGroupBlacklistedUserRequest: {
                blacklistedUserId: userId,
                groupId
            }
        }).then();
    }

    unblacklistUser(groupId: number, userId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, userId);
        return this._turmsClient.driver.send({
            deleteGroupBlacklistedUserRequest: {
                groupId,
                unblacklistedUserId: userId
            }
        }).then();
    }

    queryBlacklistedUsersIds(
        groupId: number,
        lastUpdatedDate?: Date): Promise<number[]> {
        RequestUtil.throwIfAnyFalsy(groupId);
        return this._turmsClient.driver.send({
            queryGroupBlacklistedUsersIdsRequest: {
                groupId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.getIds(response));
    }

    queryBlacklistedUsersInfos(
        groupId: number,
        lastUpdatedDate?: Date): Promise<Response.UsersInfosWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupBlacklistedUsersInfosRequest: {
                groupId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.usersInfosWithVersion));
    }

    // Group Enrollment
    createInvitation(groupId: number, inviteeId: number, content: string): Promise<number> {
        RequestUtil.throwIfAnyFalsy(groupId, inviteeId, content);
        return this._turmsClient.driver.send({
            createGroupInvitationRequest: {
                groupId,
                inviteeId,
                content
            }
        }).then(response => ResponseUtil.getFirstIdFromIds(response));
    }

    deleteInvitation(invitationId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(invitationId);
        return this._turmsClient.driver.send({
            deleteGroupInvitationRequest: {
                invitationId
            }
        }).then();
    }

    queryInvitations(groupId: number, lastUpdatedDate?: Date): Promise<Response.GroupInvitationsWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupInvitationsRequest: {
                groupId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.groupInvitationsWithVersion));
    }

    createJoinRequest(groupId: number, content: string): Promise<number> {
        RequestUtil.throwIfAnyFalsy(groupId, content);
        return this._turmsClient.driver.send({
            createGroupJoinRequestRequest: {
                groupId,
                content
            }
        }).then(response => ResponseUtil.getFirstIdFromIds(response));
    }

    deleteJoinRequest(requestId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(requestId);
        return this._turmsClient.driver.send({
            deleteGroupJoinRequestRequest: {
                requestId
            }
        }).then();
    }

    queryJoinRequests(groupId: number, lastUpdatedDate?: Date): Promise<Response.GroupJoinRequestsWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupJoinRequestsRequest: {
                groupId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.groupJoinRequestsWithVersion));
    }

    /**
     * Note: Only the owner and managers have the right to fetch questions with answers
     */
    queryGroupJoinQuestionsRequest(
        groupId: number,
        withAnswers = false,
        lastUpdatedDate?: Date): Promise<Response.GroupJoinQuestionsWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId, withAnswers);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupJoinQuestionsRequest: {
                groupId,
                withAnswers,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate)
            }
        }).then(response => ResponseUtil.transform(response.data.groupJoinQuestionsWithVersion));
    }

    answerGroupQuestions(questionIdsAndAnswers: { [k: number]: string }): Promise<boolean> {
        RequestUtil.throwIfEmpty(questionIdsAndAnswers);
        return this._turmsClient.driver.send({
            checkGroupJoinQuestionsAnswersRequest: {
                questionIdAndAnswer: questionIdsAndAnswers
            }
        }).then(response => response.data.success.value);
    }

    // Group Member
    addGroupMember(
        groupId: number,
        userId: number,
        name?: string,
        role?: string | GroupMemberRole,
        muteEndDate?: Date): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, userId);
        if (typeof role === 'string') {
            role = ConstantTransformer.string2GroupMemberRole(role);
        }
        return this._turmsClient.driver.send({
            createGroupMemberRequest: {
                groupId,
                userId,
                name: RequestUtil.getIfNotNull(name),
                role: role,
                muteEndDate: RequestUtil.getTimeIfNotNull(muteEndDate)
            }
        }).then();
    }

    quitGroup(groupId: number, successorId?: number, quitAfterTransfer?: boolean): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId);
        return this._turmsClient.driver.send({
            deleteGroupMemberRequest: {
                groupId,
                groupMemberId: this._turmsClient.userService.userId,
                successorId: RequestUtil.getIfNotNull(successorId),
                quitAfterTransfer: RequestUtil.getIfNotNull(quitAfterTransfer)
            }
        }).then();
    }

    removeGroupMember(groupId: number, memberId: number): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, memberId);
        return this._turmsClient.driver.send({
            deleteGroupMemberRequest: {
                groupId,
                groupMemberId: memberId
            }
        }).then();
    }

    updateGroupMemberInfo(
        groupId: number,
        memberId: number,
        name?: string,
        role?: string | GroupMemberRole,
        muteEndDate?: Date): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, memberId);
        RequestUtil.throwIfAllFalsy(name, role, muteEndDate);
        if (typeof role === 'string') {
            role = ConstantTransformer.string2GroupMemberRole(role);
        }
        return this._turmsClient.driver.send({
            updateGroupMemberRequest: {
                groupId,
                memberId,
                name: RequestUtil.getIfNotNull(name),
                role: role,
                muteEndDate: RequestUtil.getTimeIfNotNull(muteEndDate)
            }
        }).then();
    }

    muteGroupMember(groupId: number, memberId: number, muteEndDate: Date): Promise<void> {
        RequestUtil.throwIfAnyFalsy(groupId, memberId, muteEndDate);
        return this.updateGroupMemberInfo(groupId, memberId, undefined, undefined, muteEndDate);
    }

    unmuteGroupMember(groupId: number, memberId: number): Promise<void> {
        return this.muteGroupMember(groupId, memberId, new Date(0));
    }

    queryGroupMembers(groupId: number, withStatus = false, lastUpdatedDate?: Date): Promise<Response.GroupMembersWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupMembersRequest: {
                groupId,
                lastUpdatedDate: RequestUtil.getTimeIfNotNull(lastUpdatedDate),
                withStatus: RequestUtil.getIfNotNull(withStatus)
            }
        }).then(response => ResponseUtil.transform(response.data.groupMembersWithVersion));
    }

    queryGroupMembersByMembersIds(groupId: number, membersIds: number[], withStatus = false): Promise<Response.GroupMembersWithVersion> {
        RequestUtil.throwIfAnyFalsy(groupId, membersIds);
        // @ts-ignore
        return this._turmsClient.driver.send({
            queryGroupMembersRequest: {
                groupId,
                groupMembersIds: membersIds,
                withStatus: RequestUtil.getIfNotNull(withStatus)
            }
        }).then(response => ResponseUtil.transform(response.data.groupMembersWithVersion));
    }
}
