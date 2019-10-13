import { CheckGroupQuestionAnswerRequest, CreateGroupBlacklistedUserRequest, CreateGroupInvitationRequest, CreateGroupJoinRequestRequest, CreateGroupMemberRequest, CreateGroupQuestionRequest, CreateGroupRequest, DeleteGroupBlacklistedUserRequest, DeleteGroupInvitationRequest, DeleteGroupJoinRequestRequest, DeleteGroupMemberRequest, DeleteGroupQuestionRequest, DeleteGroupRequest, google, QueryGroupBlacklistedUsersRequest, QueryGroupMembersRequest, QueryGroupRequest, QueryJoinedGroupsIdsRequest, QueryJoinedGroupsRequest, UpdateGroupMemberRequest, UpdateGroupQuestionRequest, UpdateGroupRequest } from "../model/dto-bundle";
import ConstantsUtil from "../util/constants-util";
var StringValue = google.protobuf.StringValue;
var Int32Value = google.protobuf.Int32Value;
var Int64Value = google.protobuf.Int64Value;
var GroupService = /** @class */ (function () {
    function GroupService(turmsClient) {
        this._turmsClient = turmsClient;
    }
    GroupService.prototype.createGroup = function (name, intro, announcement, profilePictureUrl, groupType, onAcknowledge) {
        var request = CreateGroupRequest.encode({
            name: name,
            intro: StringValue.fromObject({ value: intro }),
            announcement: StringValue.fromObject({ value: announcement }),
            profilePictureUrl: StringValue.fromObject({ value: profilePictureUrl }),
            groupType: StringValue.fromObject({ value: groupType })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.deleteGroup = function (groupId, onAcknowledge) {
        var request = DeleteGroupRequest.encode({
            groupId: groupId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.updateGroup = function (groupId, groupName, intro, announcement, profilePictureUrl, groupType, muteEndDate, successorId, onAcknowledge) {
        var request = UpdateGroupRequest.encode({
            groupId: groupId,
            groupName: StringValue.fromObject({ value: groupName }),
            intro: StringValue.fromObject({ value: intro }),
            announcement: StringValue.fromObject({ value: announcement }),
            profilePictureUrl: StringValue.fromObject({ value: profilePictureUrl }),
            muteEndDate: Int32Value.fromObject({ value: muteEndDate.getTime() }),
            groupType: StringValue.fromObject({ value: groupType }),
            successorId: Int32Value.fromObject({ value: successorId })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.transferOwnership = function (groupId, successorId, onAcknowledge) {
        this.updateGroup(groupId, null, null, null, null, null, null, successorId, onAcknowledge);
    };
    GroupService.prototype.muteGroup = function (groupId, muteEndDate, onAcknowledge) {
        this.updateGroup(groupId, null, null, null, null, null, muteEndDate, null, onAcknowledge);
    };
    GroupService.prototype.unmuteGroup = function (groupId, onAcknowledge) {
        this.updateGroup(groupId, null, null, null, null, null, new Date(0), null, onAcknowledge);
    };
    GroupService.prototype.queryGroup = function (onResponse, groupId) {
        var request = QueryGroupRequest.encode({
            groupId: groupId
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    GroupService.prototype.queryJoinedGroups = function (onResponse, lastUpdatedDate) {
        var request = QueryJoinedGroupsRequest.encode({
            lastUpdatedDate: Int32Value.fromObject({ value: lastUpdatedDate.getTime() })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    GroupService.prototype.queryJoinedGroupIds = function (onResponse, lastUpdatedDate) {
        var request = QueryJoinedGroupsIdsRequest.encode({
            lastUpdatedDate: Int32Value.fromObject({ value: lastUpdatedDate.getTime() })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    GroupService.prototype.addGroupQuestion = function (groupId, question, answers, onAcknowledge) {
        var request = CreateGroupQuestionRequest.encode({
            groupId: groupId,
            question: question,
            answers: answers
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.deleteGroupQuestion = function (questionId, onAcknowledge) {
        var request = DeleteGroupQuestionRequest.encode({
            questionId: questionId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.updateGroupQuestion = function (questionId, question, answers, onAcknowledge) {
        var request = UpdateGroupQuestionRequest.encode({
            questionId: questionId,
            question: StringValue.fromObject({ value: question }),
            answers: answers
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    // Group Blacklist
    GroupService.prototype.blacklistUser = function (groupId, userId, onAcknowledge) {
        var request = CreateGroupBlacklistedUserRequest.encode({
            groupId: groupId,
            userId: userId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.unblacklistUser = function (groupId, userId, onAcknowledge) {
        var request = DeleteGroupBlacklistedUserRequest.encode({
            groupId: groupId,
            userId: userId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.queryBlacklistedUsers = function (onResponse, groupId) {
        var request = QueryGroupBlacklistedUsersRequest.encode({
            groupId: groupId
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    // Group Enrollment
    GroupService.prototype.createInvitation = function (groupId, inviteeId, content, onAcknowledge) {
        var request = CreateGroupInvitationRequest.encode({
            groupId: groupId,
            inviteeId: inviteeId,
            content: content
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.deleteInvitation = function (invitationId, onAcknowledge) {
        var request = DeleteGroupInvitationRequest.encode({
            invitationId: invitationId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.createJoinRequest = function (groupId, content, onAcknowledge) {
        var request = CreateGroupJoinRequestRequest.encode({
            groupId: groupId,
            content: content
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.deleteJoinRequest = function (requestId, onAcknowledge) {
        var request = DeleteGroupJoinRequestRequest.encode({
            requestId: requestId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.answerGroupQuestion = function (questionId, answer, onAcknowledge) {
        var request = CheckGroupQuestionAnswerRequest.encode({
            questionId: questionId,
            answer: answer
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    // Group Member
    GroupService.prototype.addGroupMember = function (groupId, userId, muteEndDate, onAcknowledge) {
        var request = CreateGroupMemberRequest.encode({
            groupId: groupId,
            userId: userId,
            muteEndDate: Int32Value.fromObject({ value: muteEndDate.getTime() })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.quitGroup = function (groupId, successorId, onAcknowledge) {
        var request = DeleteGroupMemberRequest.encode({
            groupId: groupId,
            groupMemberId: this._turmsClient.userService.userId,
            successorId: Int64Value.fromObject({ value: successorId })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.removeGroupMember = function (groupId, memberId, onAcknowledge) {
        var request = DeleteGroupMemberRequest.encode({
            groupId: groupId,
            groupMemberId: memberId
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.updateGroupMemberInfo = function (groupId, memberId, name, role, muteEndDate, onAcknowledge) {
        if (typeof role === 'string') {
            role = ConstantsUtil.string2GroupMemberRole(role);
        }
        var request = UpdateGroupMemberRequest.encode({
            groupId: groupId,
            memberId: memberId,
            name: StringValue.fromObject({ value: name }),
            role: role,
            muteEndDate: Int32Value.fromObject({ value: muteEndDate.getTime() })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    GroupService.prototype.muteGroupMember = function (groupId, memberId, muteEndDate, onAcknowledge) {
        this.updateGroupMemberInfo(groupId, memberId, null, null, muteEndDate, onAcknowledge);
    };
    GroupService.prototype.unmuteGroupMember = function (groupId, memberId, onAcknowledge) {
        this.updateGroupMemberInfo(groupId, memberId, null, null, new Date(0), onAcknowledge);
    };
    GroupService.prototype.queryGroupMembers = function (onResponse, groupId, lastUpdatedDate) {
        var request = QueryGroupMembersRequest.encode({
            groupId: groupId,
            lastUpdatedDate: Int32Value.fromObject({ value: lastUpdatedDate.getTime() })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onResponse);
    };
    return GroupService;
}());
export default GroupService;
//# sourceMappingURL=group-service.js.map