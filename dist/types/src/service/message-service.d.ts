import TurmsClient from "../turms-client";
import { im } from "../model/proto-bundle";
import { Response } from "../model/response";
import ChatType = im.turms.proto.ChatType;
import MessageDeliveryStatus = im.turms.proto.MessageDeliveryStatus;
export default class MessageService {
    private _turmsClient;
    constructor(turmsClient: TurmsClient);
    sendMessage(chatType: string | ChatType, toId: number, deliveryDate: Date, text?: string, records?: Uint8Array[], burnAfter?: number): Promise<number>;
    forwardMessage(messageId: number, chatType: string | ChatType, toId: number): Promise<number>;
    updateSentMessage(messageId: number, text?: string, records?: Uint8Array[]): Promise<void>;
    queryMessages(chatType?: string | ChatType, fromId?: number, deliveryDateAfter?: Date, deliveryDateBefore?: Date, deliveryStatus?: string | MessageDeliveryStatus, size?: number): Promise<Response.Message[]>;
    queryPendingMessagesWithTotal(size?: number): Promise<Response.MessagesWithTotal[]>;
    queryMessageStatus(messageId: number): Promise<Response.MessageStatus[]>;
    recallMessage(messageId: number, recallDate?: Date): Promise<void>;
    readMessage(messageId: number, readDate?: Date): Promise<void>;
    updateTypingStatusRequest(chatType: string | ChatType, toId: number): Promise<void>;
    static generateLocationRecord(latitude: number, longitude: number, locationName?: string, address?: string): Uint8Array;
    static generateAudioRecordByDescription(url: string, duration?: number, format?: string, size?: number): Uint8Array;
    static generateAudioRecordByData(data: ArrayBuffer): Uint8Array;
    static generateVideoRecordByDescription(url: string, duration?: number, format?: string, size?: number): Uint8Array;
    static generateVideoRecordByData(data: ArrayBuffer): Uint8Array;
    static generateImageRecordByData(data: ArrayBuffer): Uint8Array;
    static generateImageRecordByDescription(url: string, fileSize?: number, imageSize?: number, original?: boolean): Uint8Array;
    static generateFileRecordByDate(data: ArrayBuffer): Uint8Array;
    static generateFileRecordByDescription(url: string, format?: string, size?: number): Uint8Array;
}
