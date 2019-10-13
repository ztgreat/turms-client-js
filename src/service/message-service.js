import { AudioFile, CreateMessageRequest, File, google, ImageFile, Location, QueryMessagesRequest, QueryOfflineMessagesRequest, UpdateMessageRequest, VideoFile } from "../model/dto-bundle";
var Int32Value = google.protobuf.Int32Value;
var StringValue = google.protobuf.StringValue;
var BytesValue = google.protobuf.BytesValue;
var BoolValue = google.protobuf.BoolValue;
import ConstantsUtil from "../util/constants-util";
var MessageService = /** @class */ (function () {
    function MessageService(turmsClient) {
        this._turmsClient = turmsClient;
    }
    MessageService.prototype.sendMessage = function (chatType, toId, deliveryDate, text, records, burnAfter, onAcknowledge) {
        var request = CreateMessageRequest.encode({
            chatType: chatType,
            toId: toId,
            deliveryDate: deliveryDate.getTime(),
            text: text,
            records: records,
            burnAfter: Int32Value.fromObject({ value: burnAfter })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    MessageService.prototype.updateSentMessage = function (messageId, text, records, onAcknowledge) {
        if (!text && (!records || records.length === 0)) {
            throw new Error('illegal params');
        }
        var request = UpdateMessageRequest.encode({
            messageId: messageId,
            text: StringValue.create({ value: text }),
            records: records
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    MessageService.prototype.queryOfflineMessages = function (onResponse, size) {
        if (size === void 0) { size = 1; }
        var request = QueryOfflineMessagesRequest.encode({
            size: Int32Value.fromObject({ value: size })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    MessageService.prototype.queryMessages = function (onResponse, chatType, fromId, deliveryDateStart, deliveryDateEnd, size) {
        if (size === void 0) { size = 50; }
        if (typeof chatType === 'string') {
            chatType = ConstantsUtil.string2ChatType(chatType);
        }
        var request = QueryMessagesRequest.encode({
            chatType: chatType,
            fromId: Int32Value.fromObject({ value: fromId }),
            deliveryDateStart: Int32Value.fromObject({ value: deliveryDateStart.getTime() }),
            deliveryDateEnd: Int32Value.fromObject({ value: deliveryDateEnd.getTime() }),
            size: Int32Value.fromObject({ value: size })
        }).finish();
        this._turmsClient.requestManager.send(request, onResponse);
    };
    MessageService.prototype.recallMessage = function (messageId, onAcknowledge, recallDate) {
        if (recallDate === void 0) { recallDate = new Date(); }
        var request = UpdateMessageRequest.encode({
            messageId: messageId,
            recallDate: Int32Value.fromObject({ value: recallDate })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    MessageService.prototype.readMessage = function (messageId, onAcknowledge, readDate) {
        if (readDate === void 0) { readDate = new Date(); }
        var request = UpdateMessageRequest.encode({
            messageId: messageId,
            readDate: Int32Value.fromObject({ value: readDate.getTime() })
        }).finish();
        this._turmsClient.requestManager.sendOrSendAndForget(request, onAcknowledge);
    };
    MessageService.prototype.generateLocationRecord = function (latitude, longitude, locationName, address) {
        return Location.encode({
            latitude: latitude,
            longitude: longitude,
            address: StringValue.fromObject({ value: address }),
            name: StringValue.fromObject({ value: locationName })
        }).finish();
    };
    MessageService.generateAudioRecordByDescription = function (url, duration, format, size) {
        return AudioFile.encode({
            description: {
                url: url,
                duration: Int32Value.fromObject({ value: duration }),
                format: StringValue.fromObject({ value: format }),
                size: Int32Value.fromObject({ value: size }),
            }
        }).finish();
    };
    MessageService.generateAudioRecordByData = function (data) {
        return AudioFile.encode({
            data: BytesValue.fromObject({ value: data })
        }).finish();
    };
    MessageService.generateVideoRecordByDescription = function (url, duration, format, size) {
        return VideoFile.encode({
            description: {
                url: url,
                duration: Int32Value.fromObject({ value: duration }),
                format: StringValue.fromObject({ value: format }),
                size: Int32Value.fromObject({ value: size }),
            }
        }).finish();
    };
    MessageService.generateVideoRecordByData = function (data) {
        return VideoFile.encode({
            data: BytesValue.fromObject({ value: data })
        }).finish();
    };
    MessageService.generateImageRecordByData = function (data) {
        return ImageFile.encode({
            data: BytesValue.fromObject({ value: data })
        }).finish();
    };
    MessageService.generateImageRecordByDescription = function (url, fileSize, imageSize, original) {
        return ImageFile.encode({
            description: {
                url: url,
                fileSize: Int32Value.fromObject({ value: fileSize }),
                imageSize: Int32Value.fromObject({ value: imageSize }),
                original: BoolValue.fromObject({ value: original })
            }
        }).finish();
    };
    MessageService.prototype.generateFileRecordByDate = function (data) {
        return File.encode({
            data: BytesValue.fromObject({ value: data })
        }).finish();
    };
    MessageService.prototype.generateFileRecordByDescription = function (url, format, size) {
        var description = File.Description.create({
            url: url,
            format: StringValue.fromObject({ value: format }),
            size: Int32Value.fromObject({ value: size })
        });
        return File.encode({
            description: description
        }).finish();
    };
    return MessageService;
}());
export default MessageService;
//# sourceMappingURL=message-service.js.map