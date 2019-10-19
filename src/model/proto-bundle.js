/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.im = (function() {

    /**
     * Namespace im.
     * @exports im
     * @namespace
     */
    var im = {};

    im.turms = (function() {

        /**
         * Namespace turms.
         * @memberof im
         * @namespace
         */
        var turms = {};

        turms.proto = (function() {

            /**
             * Namespace proto.
             * @memberof im.turms
             * @namespace
             */
            var proto = {};

            /**
             * ChatType enum.
             * @name im.turms.proto.ChatType
             * @enum {string}
             * @property {number} PRIVATE=0 PRIVATE value
             * @property {number} GROUP=1 GROUP value
             * @property {number} SYSTEM=2 SYSTEM value
             */
            proto.ChatType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PRIVATE"] = 0;
                values[valuesById[1] = "GROUP"] = 1;
                values[valuesById[2] = "SYSTEM"] = 2;
                return values;
            })();

            /**
             * DeviceType enum.
             * @name im.turms.proto.DeviceType
             * @enum {string}
             * @property {number} DESKTOP=0 DESKTOP value
             * @property {number} BROWSER=1 BROWSER value
             * @property {number} IOS=2 IOS value
             * @property {number} ANDROID=3 ANDROID value
             * @property {number} OTHERS=4 OTHERS value
             * @property {number} UNKNOWN=5 UNKNOWN value
             */
            proto.DeviceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DESKTOP"] = 0;
                values[valuesById[1] = "BROWSER"] = 1;
                values[valuesById[2] = "IOS"] = 2;
                values[valuesById[3] = "ANDROID"] = 3;
                values[valuesById[4] = "OTHERS"] = 4;
                values[valuesById[5] = "UNKNOWN"] = 5;
                return values;
            })();

            /**
             * GroupMemberRole enum.
             * @name im.turms.proto.GroupMemberRole
             * @enum {string}
             * @property {number} OWNER=0 OWNER value
             * @property {number} MANAGER=1 MANAGER value
             * @property {number} MEMBER=2 MEMBER value
             * @property {number} GUEST=3 GUEST value
             * @property {number} ANONYMOUS_GUEST=4 ANONYMOUS_GUEST value
             */
            proto.GroupMemberRole = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "OWNER"] = 0;
                values[valuesById[1] = "MANAGER"] = 1;
                values[valuesById[2] = "MEMBER"] = 2;
                values[valuesById[3] = "GUEST"] = 3;
                values[valuesById[4] = "ANONYMOUS_GUEST"] = 4;
                return values;
            })();

            /**
             * MessageDeliveryStatus enum.
             * @name im.turms.proto.MessageDeliveryStatus
             * @enum {string}
             * @property {number} READY=0 READY value
             * @property {number} SENDING=1 SENDING value
             * @property {number} RECEIVED=2 RECEIVED value
             * @property {number} RECALLING=3 RECALLING value
             * @property {number} RECALLED=4 RECALLED value
             */
            proto.MessageDeliveryStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "READY"] = 0;
                values[valuesById[1] = "SENDING"] = 1;
                values[valuesById[2] = "RECEIVED"] = 2;
                values[valuesById[3] = "RECALLING"] = 3;
                values[valuesById[4] = "RECALLED"] = 4;
                return values;
            })();

            /**
             * ProfileAccessStrategy enum.
             * @name im.turms.proto.ProfileAccessStrategy
             * @enum {string}
             * @property {number} ALL=0 ALL value
             * @property {number} ALL_EXCEPT_BLACKLISTED_USERS=1 ALL_EXCEPT_BLACKLISTED_USERS value
             * @property {number} FRIENDS=2 FRIENDS value
             */
            proto.ProfileAccessStrategy = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ALL"] = 0;
                values[valuesById[1] = "ALL_EXCEPT_BLACKLISTED_USERS"] = 1;
                values[valuesById[2] = "FRIENDS"] = 2;
                return values;
            })();

            /**
             * RequestStatus enum.
             * @name im.turms.proto.RequestStatus
             * @enum {string}
             * @property {number} PENDING=0 PENDING value
             * @property {number} ACCEPTED=1 ACCEPTED value
             * @property {number} ACCEPTED_WITHOUT_CONFIRM=2 ACCEPTED_WITHOUT_CONFIRM value
             * @property {number} DECLINED=3 DECLINED value
             * @property {number} IGNORED=4 IGNORED value
             * @property {number} EXPIRED=5 EXPIRED value
             * @property {number} CANCELED=6 CANCELED value
             */
            proto.RequestStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PENDING"] = 0;
                values[valuesById[1] = "ACCEPTED"] = 1;
                values[valuesById[2] = "ACCEPTED_WITHOUT_CONFIRM"] = 2;
                values[valuesById[3] = "DECLINED"] = 3;
                values[valuesById[4] = "IGNORED"] = 4;
                values[valuesById[5] = "EXPIRED"] = 5;
                values[valuesById[6] = "CANCELED"] = 6;
                return values;
            })();

            /**
             * ResponseAction enum.
             * @name im.turms.proto.ResponseAction
             * @enum {string}
             * @property {number} ACCEPT=0 ACCEPT value
             * @property {number} DECLINE=1 DECLINE value
             * @property {number} IGNORE=2 IGNORE value
             */
            proto.ResponseAction = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ACCEPT"] = 0;
                values[valuesById[1] = "DECLINE"] = 1;
                values[valuesById[2] = "IGNORE"] = 2;
                return values;
            })();

            /**
             * UserStatus enum.
             * @name im.turms.proto.UserStatus
             * @enum {string}
             * @property {number} AVAILABLE=0 AVAILABLE value
             * @property {number} OFFLINE=1 OFFLINE value
             * @property {number} INVISIBLE=2 INVISIBLE value
             * @property {number} BUSY=3 BUSY value
             * @property {number} DO_NOT_DISTURB=4 DO_NOT_DISTURB value
             * @property {number} AWAY=5 AWAY value
             * @property {number} BE_RIGHT_BACK=6 BE_RIGHT_BACK value
             */
            proto.UserStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "AVAILABLE"] = 0;
                values[valuesById[1] = "OFFLINE"] = 1;
                values[valuesById[2] = "INVISIBLE"] = 2;
                values[valuesById[3] = "BUSY"] = 3;
                values[valuesById[4] = "DO_NOT_DISTURB"] = 4;
                values[valuesById[5] = "AWAY"] = 5;
                values[valuesById[6] = "BE_RIGHT_BACK"] = 6;
                return values;
            })();

            proto.AudioFile = (function() {

                /**
                 * Properties of an AudioFile.
                 * @memberof im.turms.proto
                 * @interface IAudioFile
                 * @property {im.turms.proto.AudioFile.IDescription|null} [description] AudioFile description
                 * @property {google.protobuf.IBytesValue|null} [data] AudioFile data
                 */

                /**
                 * Constructs a new AudioFile.
                 * @memberof im.turms.proto
                 * @classdesc Represents an AudioFile.
                 * @implements IAudioFile
                 * @constructor
                 * @param {im.turms.proto.IAudioFile=} [properties] Properties to set
                 */
                function AudioFile(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AudioFile description.
                 * @member {im.turms.proto.AudioFile.IDescription|null|undefined} description
                 * @memberof im.turms.proto.AudioFile
                 * @instance
                 */
                AudioFile.prototype.description = null;

                /**
                 * AudioFile data.
                 * @member {google.protobuf.IBytesValue|null|undefined} data
                 * @memberof im.turms.proto.AudioFile
                 * @instance
                 */
                AudioFile.prototype.data = null;

                /**
                 * Encodes the specified AudioFile message. Does not implicitly {@link im.turms.proto.AudioFile.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.AudioFile
                 * @static
                 * @param {im.turms.proto.IAudioFile} message AudioFile message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AudioFile.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.description != null && message.hasOwnProperty("description"))
                        $root.im.turms.proto.AudioFile.Description.encode(message.description, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.google.protobuf.BytesValue.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an AudioFile message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.AudioFile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.AudioFile} AudioFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AudioFile.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.AudioFile();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.description = $root.im.turms.proto.AudioFile.Description.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.data = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                AudioFile.Description = (function() {

                    /**
                     * Properties of a Description.
                     * @memberof im.turms.proto.AudioFile
                     * @interface IDescription
                     * @property {string|null} [url] Description url
                     * @property {google.protobuf.IInt32Value|null} [duration] Description duration
                     * @property {google.protobuf.IInt32Value|null} [size] Description size
                     * @property {google.protobuf.IStringValue|null} [format] Description format
                     */

                    /**
                     * Constructs a new Description.
                     * @memberof im.turms.proto.AudioFile
                     * @classdesc Represents a Description.
                     * @implements IDescription
                     * @constructor
                     * @param {im.turms.proto.AudioFile.IDescription=} [properties] Properties to set
                     */
                    function Description(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Description url.
                     * @member {string} url
                     * @memberof im.turms.proto.AudioFile.Description
                     * @instance
                     */
                    Description.prototype.url = "";

                    /**
                     * Description duration.
                     * @member {google.protobuf.IInt32Value|null|undefined} duration
                     * @memberof im.turms.proto.AudioFile.Description
                     * @instance
                     */
                    Description.prototype.duration = null;

                    /**
                     * Description size.
                     * @member {google.protobuf.IInt32Value|null|undefined} size
                     * @memberof im.turms.proto.AudioFile.Description
                     * @instance
                     */
                    Description.prototype.size = null;

                    /**
                     * Description format.
                     * @member {google.protobuf.IStringValue|null|undefined} format
                     * @memberof im.turms.proto.AudioFile.Description
                     * @instance
                     */
                    Description.prototype.format = null;

                    /**
                     * Encodes the specified Description message. Does not implicitly {@link im.turms.proto.AudioFile.Description.verify|verify} messages.
                     * @function encode
                     * @memberof im.turms.proto.AudioFile.Description
                     * @static
                     * @param {im.turms.proto.AudioFile.IDescription} message Description message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Description.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.url != null && message.hasOwnProperty("url"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            $root.google.protobuf.Int32Value.encode(message.duration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.size != null && message.hasOwnProperty("size"))
                            $root.google.protobuf.Int32Value.encode(message.size, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.google.protobuf.StringValue.encode(message.format, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Description message from the specified reader or buffer.
                     * @function decode
                     * @memberof im.turms.proto.AudioFile.Description
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {im.turms.proto.AudioFile.Description} Description
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Description.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.AudioFile.Description();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.url = reader.string();
                                break;
                            case 2:
                                message.duration = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.size = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.format = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Description;
                })();

                return AudioFile;
            })();

            proto.File = (function() {

                /**
                 * Properties of a File.
                 * @memberof im.turms.proto
                 * @interface IFile
                 * @property {im.turms.proto.File.IDescription|null} [description] File description
                 * @property {google.protobuf.IBytesValue|null} [data] File data
                 */

                /**
                 * Constructs a new File.
                 * @memberof im.turms.proto
                 * @classdesc Represents a File.
                 * @implements IFile
                 * @constructor
                 * @param {im.turms.proto.IFile=} [properties] Properties to set
                 */
                function File(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * File description.
                 * @member {im.turms.proto.File.IDescription|null|undefined} description
                 * @memberof im.turms.proto.File
                 * @instance
                 */
                File.prototype.description = null;

                /**
                 * File data.
                 * @member {google.protobuf.IBytesValue|null|undefined} data
                 * @memberof im.turms.proto.File
                 * @instance
                 */
                File.prototype.data = null;

                /**
                 * Encodes the specified File message. Does not implicitly {@link im.turms.proto.File.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.File
                 * @static
                 * @param {im.turms.proto.IFile} message File message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                File.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.description != null && message.hasOwnProperty("description"))
                        $root.im.turms.proto.File.Description.encode(message.description, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.google.protobuf.BytesValue.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a File message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.File
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.File} File
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                File.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.File();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.description = $root.im.turms.proto.File.Description.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.data = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                File.Description = (function() {

                    /**
                     * Properties of a Description.
                     * @memberof im.turms.proto.File
                     * @interface IDescription
                     * @property {string|null} [url] Description url
                     * @property {google.protobuf.IInt32Value|null} [size] Description size
                     * @property {google.protobuf.IStringValue|null} [format] Description format
                     */

                    /**
                     * Constructs a new Description.
                     * @memberof im.turms.proto.File
                     * @classdesc Represents a Description.
                     * @implements IDescription
                     * @constructor
                     * @param {im.turms.proto.File.IDescription=} [properties] Properties to set
                     */
                    function Description(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Description url.
                     * @member {string} url
                     * @memberof im.turms.proto.File.Description
                     * @instance
                     */
                    Description.prototype.url = "";

                    /**
                     * Description size.
                     * @member {google.protobuf.IInt32Value|null|undefined} size
                     * @memberof im.turms.proto.File.Description
                     * @instance
                     */
                    Description.prototype.size = null;

                    /**
                     * Description format.
                     * @member {google.protobuf.IStringValue|null|undefined} format
                     * @memberof im.turms.proto.File.Description
                     * @instance
                     */
                    Description.prototype.format = null;

                    /**
                     * Encodes the specified Description message. Does not implicitly {@link im.turms.proto.File.Description.verify|verify} messages.
                     * @function encode
                     * @memberof im.turms.proto.File.Description
                     * @static
                     * @param {im.turms.proto.File.IDescription} message Description message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Description.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.url != null && message.hasOwnProperty("url"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                        if (message.size != null && message.hasOwnProperty("size"))
                            $root.google.protobuf.Int32Value.encode(message.size, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.google.protobuf.StringValue.encode(message.format, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Description message from the specified reader or buffer.
                     * @function decode
                     * @memberof im.turms.proto.File.Description
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {im.turms.proto.File.Description} Description
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Description.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.File.Description();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.url = reader.string();
                                break;
                            case 2:
                                message.size = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.format = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Description;
                })();

                return File;
            })();

            proto.ImageFile = (function() {

                /**
                 * Properties of an ImageFile.
                 * @memberof im.turms.proto
                 * @interface IImageFile
                 * @property {im.turms.proto.ImageFile.IDescription|null} [description] ImageFile description
                 * @property {google.protobuf.IBytesValue|null} [data] ImageFile data
                 */

                /**
                 * Constructs a new ImageFile.
                 * @memberof im.turms.proto
                 * @classdesc Represents an ImageFile.
                 * @implements IImageFile
                 * @constructor
                 * @param {im.turms.proto.IImageFile=} [properties] Properties to set
                 */
                function ImageFile(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ImageFile description.
                 * @member {im.turms.proto.ImageFile.IDescription|null|undefined} description
                 * @memberof im.turms.proto.ImageFile
                 * @instance
                 */
                ImageFile.prototype.description = null;

                /**
                 * ImageFile data.
                 * @member {google.protobuf.IBytesValue|null|undefined} data
                 * @memberof im.turms.proto.ImageFile
                 * @instance
                 */
                ImageFile.prototype.data = null;

                /**
                 * Encodes the specified ImageFile message. Does not implicitly {@link im.turms.proto.ImageFile.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.ImageFile
                 * @static
                 * @param {im.turms.proto.IImageFile} message ImageFile message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ImageFile.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.description != null && message.hasOwnProperty("description"))
                        $root.im.turms.proto.ImageFile.Description.encode(message.description, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.google.protobuf.BytesValue.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an ImageFile message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.ImageFile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.ImageFile} ImageFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ImageFile.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.ImageFile();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.description = $root.im.turms.proto.ImageFile.Description.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.data = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ImageFile.Description = (function() {

                    /**
                     * Properties of a Description.
                     * @memberof im.turms.proto.ImageFile
                     * @interface IDescription
                     * @property {string|null} [url] Description url
                     * @property {google.protobuf.IBoolValue|null} [original] Description original
                     * @property {google.protobuf.IInt32Value|null} [imageSize] Description imageSize
                     * @property {google.protobuf.IInt32Value|null} [fileSize] Description fileSize
                     */

                    /**
                     * Constructs a new Description.
                     * @memberof im.turms.proto.ImageFile
                     * @classdesc Represents a Description.
                     * @implements IDescription
                     * @constructor
                     * @param {im.turms.proto.ImageFile.IDescription=} [properties] Properties to set
                     */
                    function Description(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Description url.
                     * @member {string} url
                     * @memberof im.turms.proto.ImageFile.Description
                     * @instance
                     */
                    Description.prototype.url = "";

                    /**
                     * Description original.
                     * @member {google.protobuf.IBoolValue|null|undefined} original
                     * @memberof im.turms.proto.ImageFile.Description
                     * @instance
                     */
                    Description.prototype.original = null;

                    /**
                     * Description imageSize.
                     * @member {google.protobuf.IInt32Value|null|undefined} imageSize
                     * @memberof im.turms.proto.ImageFile.Description
                     * @instance
                     */
                    Description.prototype.imageSize = null;

                    /**
                     * Description fileSize.
                     * @member {google.protobuf.IInt32Value|null|undefined} fileSize
                     * @memberof im.turms.proto.ImageFile.Description
                     * @instance
                     */
                    Description.prototype.fileSize = null;

                    /**
                     * Encodes the specified Description message. Does not implicitly {@link im.turms.proto.ImageFile.Description.verify|verify} messages.
                     * @function encode
                     * @memberof im.turms.proto.ImageFile.Description
                     * @static
                     * @param {im.turms.proto.ImageFile.IDescription} message Description message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Description.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.url != null && message.hasOwnProperty("url"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                        if (message.original != null && message.hasOwnProperty("original"))
                            $root.google.protobuf.BoolValue.encode(message.original, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.imageSize != null && message.hasOwnProperty("imageSize"))
                            $root.google.protobuf.Int32Value.encode(message.imageSize, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                            $root.google.protobuf.Int32Value.encode(message.fileSize, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Description message from the specified reader or buffer.
                     * @function decode
                     * @memberof im.turms.proto.ImageFile.Description
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {im.turms.proto.ImageFile.Description} Description
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Description.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.ImageFile.Description();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.url = reader.string();
                                break;
                            case 2:
                                message.original = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.imageSize = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.fileSize = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Description;
                })();

                return ImageFile;
            })();

            proto.VideoFile = (function() {

                /**
                 * Properties of a VideoFile.
                 * @memberof im.turms.proto
                 * @interface IVideoFile
                 * @property {im.turms.proto.VideoFile.IDescription|null} [description] VideoFile description
                 * @property {google.protobuf.IBytesValue|null} [data] VideoFile data
                 */

                /**
                 * Constructs a new VideoFile.
                 * @memberof im.turms.proto
                 * @classdesc Represents a VideoFile.
                 * @implements IVideoFile
                 * @constructor
                 * @param {im.turms.proto.IVideoFile=} [properties] Properties to set
                 */
                function VideoFile(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * VideoFile description.
                 * @member {im.turms.proto.VideoFile.IDescription|null|undefined} description
                 * @memberof im.turms.proto.VideoFile
                 * @instance
                 */
                VideoFile.prototype.description = null;

                /**
                 * VideoFile data.
                 * @member {google.protobuf.IBytesValue|null|undefined} data
                 * @memberof im.turms.proto.VideoFile
                 * @instance
                 */
                VideoFile.prototype.data = null;

                /**
                 * Encodes the specified VideoFile message. Does not implicitly {@link im.turms.proto.VideoFile.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.VideoFile
                 * @static
                 * @param {im.turms.proto.IVideoFile} message VideoFile message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VideoFile.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.description != null && message.hasOwnProperty("description"))
                        $root.im.turms.proto.VideoFile.Description.encode(message.description, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.google.protobuf.BytesValue.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a VideoFile message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.VideoFile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.VideoFile} VideoFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VideoFile.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.VideoFile();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.description = $root.im.turms.proto.VideoFile.Description.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.data = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                VideoFile.Description = (function() {

                    /**
                     * Properties of a Description.
                     * @memberof im.turms.proto.VideoFile
                     * @interface IDescription
                     * @property {string|null} [url] Description url
                     * @property {google.protobuf.IInt32Value|null} [duration] Description duration
                     * @property {google.protobuf.IInt32Value|null} [size] Description size
                     * @property {google.protobuf.IStringValue|null} [format] Description format
                     */

                    /**
                     * Constructs a new Description.
                     * @memberof im.turms.proto.VideoFile
                     * @classdesc Represents a Description.
                     * @implements IDescription
                     * @constructor
                     * @param {im.turms.proto.VideoFile.IDescription=} [properties] Properties to set
                     */
                    function Description(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Description url.
                     * @member {string} url
                     * @memberof im.turms.proto.VideoFile.Description
                     * @instance
                     */
                    Description.prototype.url = "";

                    /**
                     * Description duration.
                     * @member {google.protobuf.IInt32Value|null|undefined} duration
                     * @memberof im.turms.proto.VideoFile.Description
                     * @instance
                     */
                    Description.prototype.duration = null;

                    /**
                     * Description size.
                     * @member {google.protobuf.IInt32Value|null|undefined} size
                     * @memberof im.turms.proto.VideoFile.Description
                     * @instance
                     */
                    Description.prototype.size = null;

                    /**
                     * Description format.
                     * @member {google.protobuf.IStringValue|null|undefined} format
                     * @memberof im.turms.proto.VideoFile.Description
                     * @instance
                     */
                    Description.prototype.format = null;

                    /**
                     * Encodes the specified Description message. Does not implicitly {@link im.turms.proto.VideoFile.Description.verify|verify} messages.
                     * @function encode
                     * @memberof im.turms.proto.VideoFile.Description
                     * @static
                     * @param {im.turms.proto.VideoFile.IDescription} message Description message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Description.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.url != null && message.hasOwnProperty("url"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            $root.google.protobuf.Int32Value.encode(message.duration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.size != null && message.hasOwnProperty("size"))
                            $root.google.protobuf.Int32Value.encode(message.size, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.google.protobuf.StringValue.encode(message.format, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Description message from the specified reader or buffer.
                     * @function decode
                     * @memberof im.turms.proto.VideoFile.Description
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {im.turms.proto.VideoFile.Description} Description
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Description.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.VideoFile.Description();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.url = reader.string();
                                break;
                            case 2:
                                message.duration = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.size = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.format = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Description;
                })();

                return VideoFile;
            })();

            proto.GroupInvitation = (function() {

                /**
                 * Properties of a GroupInvitation.
                 * @memberof im.turms.proto
                 * @interface IGroupInvitation
                 * @property {google.protobuf.IInt64Value|null} [id] GroupInvitation id
                 * @property {google.protobuf.IInt64Value|null} [creationDate] GroupInvitation creationDate
                 * @property {google.protobuf.IStringValue|null} [content] GroupInvitation content
                 * @property {im.turms.proto.RequestStatus|null} [status] GroupInvitation status
                 * @property {google.protobuf.IInt64Value|null} [expirationDate] GroupInvitation expirationDate
                 * @property {google.protobuf.IInt64Value|null} [groupId] GroupInvitation groupId
                 * @property {google.protobuf.IInt64Value|null} [inviterId] GroupInvitation inviterId
                 * @property {google.protobuf.IInt64Value|null} [inviteeId] GroupInvitation inviteeId
                 */

                /**
                 * Constructs a new GroupInvitation.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupInvitation.
                 * @implements IGroupInvitation
                 * @constructor
                 * @param {im.turms.proto.IGroupInvitation=} [properties] Properties to set
                 */
                function GroupInvitation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupInvitation id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.id = null;

                /**
                 * GroupInvitation creationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} creationDate
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.creationDate = null;

                /**
                 * GroupInvitation content.
                 * @member {google.protobuf.IStringValue|null|undefined} content
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.content = null;

                /**
                 * GroupInvitation status.
                 * @member {im.turms.proto.RequestStatus} status
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.status = 0;

                /**
                 * GroupInvitation expirationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} expirationDate
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.expirationDate = null;

                /**
                 * GroupInvitation groupId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupId
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.groupId = null;

                /**
                 * GroupInvitation inviterId.
                 * @member {google.protobuf.IInt64Value|null|undefined} inviterId
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.inviterId = null;

                /**
                 * GroupInvitation inviteeId.
                 * @member {google.protobuf.IInt64Value|null|undefined} inviteeId
                 * @memberof im.turms.proto.GroupInvitation
                 * @instance
                 */
                GroupInvitation.prototype.inviteeId = null;

                /**
                 * Encodes the specified GroupInvitation message. Does not implicitly {@link im.turms.proto.GroupInvitation.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupInvitation
                 * @static
                 * @param {im.turms.proto.IGroupInvitation} message GroupInvitation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupInvitation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.creationDate != null && message.hasOwnProperty("creationDate"))
                        $root.google.protobuf.Int64Value.encode(message.creationDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.content != null && message.hasOwnProperty("content"))
                        $root.google.protobuf.StringValue.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                    if (message.expirationDate != null && message.hasOwnProperty("expirationDate"))
                        $root.google.protobuf.Int64Value.encode(message.expirationDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        $root.google.protobuf.Int64Value.encode(message.groupId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.inviterId != null && message.hasOwnProperty("inviterId"))
                        $root.google.protobuf.Int64Value.encode(message.inviterId, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.inviteeId != null && message.hasOwnProperty("inviteeId"))
                        $root.google.protobuf.Int64Value.encode(message.inviteeId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupInvitation message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupInvitation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupInvitation} GroupInvitation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupInvitation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupInvitation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.creationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.content = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.status = reader.int32();
                            break;
                        case 5:
                            message.expirationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.groupId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.inviterId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.inviteeId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupInvitation;
            })();

            proto.GroupJoinQuestion = (function() {

                /**
                 * Properties of a GroupJoinQuestion.
                 * @memberof im.turms.proto
                 * @interface IGroupJoinQuestion
                 * @property {google.protobuf.IInt64Value|null} [id] GroupJoinQuestion id
                 * @property {google.protobuf.IInt64Value|null} [groupId] GroupJoinQuestion groupId
                 * @property {google.protobuf.IStringValue|null} [question] GroupJoinQuestion question
                 * @property {Array.<google.protobuf.IStringValue>|null} [answers] GroupJoinQuestion answers
                 */

                /**
                 * Constructs a new GroupJoinQuestion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupJoinQuestion.
                 * @implements IGroupJoinQuestion
                 * @constructor
                 * @param {im.turms.proto.IGroupJoinQuestion=} [properties] Properties to set
                 */
                function GroupJoinQuestion(properties) {
                    this.answers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupJoinQuestion id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.GroupJoinQuestion
                 * @instance
                 */
                GroupJoinQuestion.prototype.id = null;

                /**
                 * GroupJoinQuestion groupId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupId
                 * @memberof im.turms.proto.GroupJoinQuestion
                 * @instance
                 */
                GroupJoinQuestion.prototype.groupId = null;

                /**
                 * GroupJoinQuestion question.
                 * @member {google.protobuf.IStringValue|null|undefined} question
                 * @memberof im.turms.proto.GroupJoinQuestion
                 * @instance
                 */
                GroupJoinQuestion.prototype.question = null;

                /**
                 * GroupJoinQuestion answers.
                 * @member {Array.<google.protobuf.IStringValue>} answers
                 * @memberof im.turms.proto.GroupJoinQuestion
                 * @instance
                 */
                GroupJoinQuestion.prototype.answers = $util.emptyArray;

                /**
                 * Encodes the specified GroupJoinQuestion message. Does not implicitly {@link im.turms.proto.GroupJoinQuestion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupJoinQuestion
                 * @static
                 * @param {im.turms.proto.IGroupJoinQuestion} message GroupJoinQuestion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupJoinQuestion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        $root.google.protobuf.Int64Value.encode(message.groupId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.question != null && message.hasOwnProperty("question"))
                        $root.google.protobuf.StringValue.encode(message.question, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.answers != null && message.answers.length)
                        for (var i = 0; i < message.answers.length; ++i)
                            $root.google.protobuf.StringValue.encode(message.answers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupJoinQuestion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupJoinQuestion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupJoinQuestion} GroupJoinQuestion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupJoinQuestion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupJoinQuestion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.groupId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.question = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.answers && message.answers.length))
                                message.answers = [];
                            message.answers.push($root.google.protobuf.StringValue.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupJoinQuestion;
            })();

            proto.GroupJoinRequest = (function() {

                /**
                 * Properties of a GroupJoinRequest.
                 * @memberof im.turms.proto
                 * @interface IGroupJoinRequest
                 * @property {google.protobuf.IInt64Value|null} [id] GroupJoinRequest id
                 * @property {google.protobuf.IInt64Value|null} [creationDate] GroupJoinRequest creationDate
                 * @property {google.protobuf.IStringValue|null} [content] GroupJoinRequest content
                 * @property {im.turms.proto.RequestStatus|null} [status] GroupJoinRequest status
                 * @property {google.protobuf.IInt64Value|null} [expirationDate] GroupJoinRequest expirationDate
                 * @property {google.protobuf.IInt64Value|null} [groupId] GroupJoinRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [requesterId] GroupJoinRequest requesterId
                 * @property {google.protobuf.IInt64Value|null} [responderId] GroupJoinRequest responderId
                 */

                /**
                 * Constructs a new GroupJoinRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupJoinRequest.
                 * @implements IGroupJoinRequest
                 * @constructor
                 * @param {im.turms.proto.IGroupJoinRequest=} [properties] Properties to set
                 */
                function GroupJoinRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupJoinRequest id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.id = null;

                /**
                 * GroupJoinRequest creationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} creationDate
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.creationDate = null;

                /**
                 * GroupJoinRequest content.
                 * @member {google.protobuf.IStringValue|null|undefined} content
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.content = null;

                /**
                 * GroupJoinRequest status.
                 * @member {im.turms.proto.RequestStatus} status
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.status = 0;

                /**
                 * GroupJoinRequest expirationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} expirationDate
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.expirationDate = null;

                /**
                 * GroupJoinRequest groupId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupId
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.groupId = null;

                /**
                 * GroupJoinRequest requesterId.
                 * @member {google.protobuf.IInt64Value|null|undefined} requesterId
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.requesterId = null;

                /**
                 * GroupJoinRequest responderId.
                 * @member {google.protobuf.IInt64Value|null|undefined} responderId
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @instance
                 */
                GroupJoinRequest.prototype.responderId = null;

                /**
                 * Encodes the specified GroupJoinRequest message. Does not implicitly {@link im.turms.proto.GroupJoinRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @static
                 * @param {im.turms.proto.IGroupJoinRequest} message GroupJoinRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupJoinRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.creationDate != null && message.hasOwnProperty("creationDate"))
                        $root.google.protobuf.Int64Value.encode(message.creationDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.content != null && message.hasOwnProperty("content"))
                        $root.google.protobuf.StringValue.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                    if (message.expirationDate != null && message.hasOwnProperty("expirationDate"))
                        $root.google.protobuf.Int64Value.encode(message.expirationDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        $root.google.protobuf.Int64Value.encode(message.groupId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.requesterId != null && message.hasOwnProperty("requesterId"))
                        $root.google.protobuf.Int64Value.encode(message.requesterId, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.responderId != null && message.hasOwnProperty("responderId"))
                        $root.google.protobuf.Int64Value.encode(message.responderId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupJoinRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupJoinRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupJoinRequest} GroupJoinRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupJoinRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupJoinRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.creationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.content = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.status = reader.int32();
                            break;
                        case 5:
                            message.expirationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.groupId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.requesterId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.responderId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupJoinRequest;
            })();

            proto.GroupMember = (function() {

                /**
                 * Properties of a GroupMember.
                 * @memberof im.turms.proto
                 * @interface IGroupMember
                 * @property {google.protobuf.IInt64Value|null} [groupId] GroupMember groupId
                 * @property {google.protobuf.IInt64Value|null} [userId] GroupMember userId
                 * @property {google.protobuf.IStringValue|null} [name] GroupMember name
                 * @property {im.turms.proto.GroupMemberRole|null} [role] GroupMember role
                 * @property {google.protobuf.IInt64Value|null} [joinDate] GroupMember joinDate
                 * @property {google.protobuf.IInt64Value|null} [muteEndDate] GroupMember muteEndDate
                 * @property {im.turms.proto.UserStatus|null} [userStatus] GroupMember userStatus
                 * @property {Array.<im.turms.proto.DeviceType>|null} [usingDeviceTypes] GroupMember usingDeviceTypes
                 */

                /**
                 * Constructs a new GroupMember.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupMember.
                 * @implements IGroupMember
                 * @constructor
                 * @param {im.turms.proto.IGroupMember=} [properties] Properties to set
                 */
                function GroupMember(properties) {
                    this.usingDeviceTypes = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupMember groupId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupId
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.groupId = null;

                /**
                 * GroupMember userId.
                 * @member {google.protobuf.IInt64Value|null|undefined} userId
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.userId = null;

                /**
                 * GroupMember name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.name = null;

                /**
                 * GroupMember role.
                 * @member {im.turms.proto.GroupMemberRole} role
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.role = 0;

                /**
                 * GroupMember joinDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} joinDate
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.joinDate = null;

                /**
                 * GroupMember muteEndDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} muteEndDate
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.muteEndDate = null;

                /**
                 * GroupMember userStatus.
                 * @member {im.turms.proto.UserStatus} userStatus
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.userStatus = 0;

                /**
                 * GroupMember usingDeviceTypes.
                 * @member {Array.<im.turms.proto.DeviceType>} usingDeviceTypes
                 * @memberof im.turms.proto.GroupMember
                 * @instance
                 */
                GroupMember.prototype.usingDeviceTypes = $util.emptyArray;

                /**
                 * Encodes the specified GroupMember message. Does not implicitly {@link im.turms.proto.GroupMember.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupMember
                 * @static
                 * @param {im.turms.proto.IGroupMember} message GroupMember message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupMember.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        $root.google.protobuf.Int64Value.encode(message.groupId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        $root.google.protobuf.Int64Value.encode(message.userId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.role != null && message.hasOwnProperty("role"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.role);
                    if (message.joinDate != null && message.hasOwnProperty("joinDate"))
                        $root.google.protobuf.Int64Value.encode(message.joinDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.muteEndDate != null && message.hasOwnProperty("muteEndDate"))
                        $root.google.protobuf.Int64Value.encode(message.muteEndDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.userStatus);
                    if (message.usingDeviceTypes != null && message.usingDeviceTypes.length) {
                        writer.uint32(/* id 8, wireType 2 =*/66).fork();
                        for (var i = 0; i < message.usingDeviceTypes.length; ++i)
                            writer.int32(message.usingDeviceTypes[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Decodes a GroupMember message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupMember
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupMember} GroupMember
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupMember.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupMember();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.userId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.role = reader.int32();
                            break;
                        case 5:
                            message.joinDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.muteEndDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.userStatus = reader.int32();
                            break;
                        case 8:
                            if (!(message.usingDeviceTypes && message.usingDeviceTypes.length))
                                message.usingDeviceTypes = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.usingDeviceTypes.push(reader.int32());
                            } else
                                message.usingDeviceTypes.push(reader.int32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupMember;
            })();

            proto.Group = (function() {

                /**
                 * Properties of a Group.
                 * @memberof im.turms.proto
                 * @interface IGroup
                 * @property {google.protobuf.IInt64Value|null} [id] Group id
                 * @property {google.protobuf.IInt64Value|null} [typeId] Group typeId
                 * @property {google.protobuf.IInt64Value|null} [creatorId] Group creatorId
                 * @property {google.protobuf.IInt64Value|null} [ownerId] Group ownerId
                 * @property {google.protobuf.IStringValue|null} [name] Group name
                 * @property {google.protobuf.IStringValue|null} [intro] Group intro
                 * @property {google.protobuf.IStringValue|null} [announcement] Group announcement
                 * @property {google.protobuf.IStringValue|null} [profilePictureUrl] Group profilePictureUrl
                 * @property {google.protobuf.IInt64Value|null} [creationDate] Group creationDate
                 * @property {google.protobuf.IInt64Value|null} [deletionDate] Group deletionDate
                 * @property {google.protobuf.IInt64Value|null} [muteEndDate] Group muteEndDate
                 * @property {google.protobuf.IBoolValue|null} [active] Group active
                 */

                /**
                 * Constructs a new Group.
                 * @memberof im.turms.proto
                 * @classdesc Represents a Group.
                 * @implements IGroup
                 * @constructor
                 * @param {im.turms.proto.IGroup=} [properties] Properties to set
                 */
                function Group(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Group id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.id = null;

                /**
                 * Group typeId.
                 * @member {google.protobuf.IInt64Value|null|undefined} typeId
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.typeId = null;

                /**
                 * Group creatorId.
                 * @member {google.protobuf.IInt64Value|null|undefined} creatorId
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.creatorId = null;

                /**
                 * Group ownerId.
                 * @member {google.protobuf.IInt64Value|null|undefined} ownerId
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.ownerId = null;

                /**
                 * Group name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.name = null;

                /**
                 * Group intro.
                 * @member {google.protobuf.IStringValue|null|undefined} intro
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.intro = null;

                /**
                 * Group announcement.
                 * @member {google.protobuf.IStringValue|null|undefined} announcement
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.announcement = null;

                /**
                 * Group profilePictureUrl.
                 * @member {google.protobuf.IStringValue|null|undefined} profilePictureUrl
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.profilePictureUrl = null;

                /**
                 * Group creationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} creationDate
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.creationDate = null;

                /**
                 * Group deletionDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} deletionDate
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.deletionDate = null;

                /**
                 * Group muteEndDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} muteEndDate
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.muteEndDate = null;

                /**
                 * Group active.
                 * @member {google.protobuf.IBoolValue|null|undefined} active
                 * @memberof im.turms.proto.Group
                 * @instance
                 */
                Group.prototype.active = null;

                /**
                 * Encodes the specified Group message. Does not implicitly {@link im.turms.proto.Group.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.Group
                 * @static
                 * @param {im.turms.proto.IGroup} message Group message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Group.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.typeId != null && message.hasOwnProperty("typeId"))
                        $root.google.protobuf.Int64Value.encode(message.typeId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        $root.google.protobuf.Int64Value.encode(message.creatorId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.ownerId != null && message.hasOwnProperty("ownerId"))
                        $root.google.protobuf.Int64Value.encode(message.ownerId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.intro != null && message.hasOwnProperty("intro"))
                        $root.google.protobuf.StringValue.encode(message.intro, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.announcement != null && message.hasOwnProperty("announcement"))
                        $root.google.protobuf.StringValue.encode(message.announcement, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.profilePictureUrl != null && message.hasOwnProperty("profilePictureUrl"))
                        $root.google.protobuf.StringValue.encode(message.profilePictureUrl, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.creationDate != null && message.hasOwnProperty("creationDate"))
                        $root.google.protobuf.Int64Value.encode(message.creationDate, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.deletionDate != null && message.hasOwnProperty("deletionDate"))
                        $root.google.protobuf.Int64Value.encode(message.deletionDate, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.muteEndDate != null && message.hasOwnProperty("muteEndDate"))
                        $root.google.protobuf.Int64Value.encode(message.muteEndDate, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.active != null && message.hasOwnProperty("active"))
                        $root.google.protobuf.BoolValue.encode(message.active, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.Group
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.Group} Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Group.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.Group();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.typeId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.creatorId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.ownerId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.intro = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.announcement = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.profilePictureUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.creationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 10:
                            message.deletionDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 11:
                            message.muteEndDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.active = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Group;
            })();

            proto.MessageStatus = (function() {

                /**
                 * Properties of a MessageStatus.
                 * @memberof im.turms.proto
                 * @interface IMessageStatus
                 * @property {google.protobuf.IInt64Value|null} [messageId] MessageStatus messageId
                 * @property {google.protobuf.IInt64Value|null} [toUserId] MessageStatus toUserId
                 * @property {im.turms.proto.MessageDeliveryStatus|null} [deliveryStatus] MessageStatus deliveryStatus
                 * @property {google.protobuf.IInt64Value|null} [receptionDate] MessageStatus receptionDate
                 * @property {google.protobuf.IInt64Value|null} [readDate] MessageStatus readDate
                 * @property {google.protobuf.IInt64Value|null} [recallDate] MessageStatus recallDate
                 */

                /**
                 * Constructs a new MessageStatus.
                 * @memberof im.turms.proto
                 * @classdesc Represents a MessageStatus.
                 * @implements IMessageStatus
                 * @constructor
                 * @param {im.turms.proto.IMessageStatus=} [properties] Properties to set
                 */
                function MessageStatus(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageStatus messageId.
                 * @member {google.protobuf.IInt64Value|null|undefined} messageId
                 * @memberof im.turms.proto.MessageStatus
                 * @instance
                 */
                MessageStatus.prototype.messageId = null;

                /**
                 * MessageStatus toUserId.
                 * @member {google.protobuf.IInt64Value|null|undefined} toUserId
                 * @memberof im.turms.proto.MessageStatus
                 * @instance
                 */
                MessageStatus.prototype.toUserId = null;

                /**
                 * MessageStatus deliveryStatus.
                 * @member {im.turms.proto.MessageDeliveryStatus} deliveryStatus
                 * @memberof im.turms.proto.MessageStatus
                 * @instance
                 */
                MessageStatus.prototype.deliveryStatus = 0;

                /**
                 * MessageStatus receptionDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} receptionDate
                 * @memberof im.turms.proto.MessageStatus
                 * @instance
                 */
                MessageStatus.prototype.receptionDate = null;

                /**
                 * MessageStatus readDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} readDate
                 * @memberof im.turms.proto.MessageStatus
                 * @instance
                 */
                MessageStatus.prototype.readDate = null;

                /**
                 * MessageStatus recallDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} recallDate
                 * @memberof im.turms.proto.MessageStatus
                 * @instance
                 */
                MessageStatus.prototype.recallDate = null;

                /**
                 * Encodes the specified MessageStatus message. Does not implicitly {@link im.turms.proto.MessageStatus.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.MessageStatus
                 * @static
                 * @param {im.turms.proto.IMessageStatus} message MessageStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        $root.google.protobuf.Int64Value.encode(message.messageId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                        $root.google.protobuf.Int64Value.encode(message.toUserId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.deliveryStatus != null && message.hasOwnProperty("deliveryStatus"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deliveryStatus);
                    if (message.receptionDate != null && message.hasOwnProperty("receptionDate"))
                        $root.google.protobuf.Int64Value.encode(message.receptionDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.readDate != null && message.hasOwnProperty("readDate"))
                        $root.google.protobuf.Int64Value.encode(message.readDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.recallDate != null && message.hasOwnProperty("recallDate"))
                        $root.google.protobuf.Int64Value.encode(message.recallDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a MessageStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.MessageStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.MessageStatus} MessageStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.MessageStatus();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.toUserId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.deliveryStatus = reader.int32();
                            break;
                        case 4:
                            message.receptionDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.readDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.recallDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return MessageStatus;
            })();

            proto.Message = (function() {

                /**
                 * Properties of a Message.
                 * @memberof im.turms.proto
                 * @interface IMessage
                 * @property {google.protobuf.IInt64Value|null} [id] Message id
                 * @property {google.protobuf.IInt64Value|null} [deliveryDate] Message deliveryDate
                 * @property {google.protobuf.IInt64Value|null} [deletionDate] Message deletionDate
                 * @property {google.protobuf.IStringValue|null} [text] Message text
                 * @property {google.protobuf.IInt64Value|null} [senderId] Message senderId
                 * @property {google.protobuf.IInt64Value|null} [groupId] Message groupId
                 * @property {google.protobuf.IInt64Value|null} [recipientId] Message recipientId
                 * @property {Array.<google.protobuf.IBytesValue>|null} [records] Message records
                 */

                /**
                 * Constructs a new Message.
                 * @memberof im.turms.proto
                 * @classdesc Represents a Message.
                 * @implements IMessage
                 * @constructor
                 * @param {im.turms.proto.IMessage=} [properties] Properties to set
                 */
                function Message(properties) {
                    this.records = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Message id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.id = null;

                /**
                 * Message deliveryDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} deliveryDate
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.deliveryDate = null;

                /**
                 * Message deletionDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} deletionDate
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.deletionDate = null;

                /**
                 * Message text.
                 * @member {google.protobuf.IStringValue|null|undefined} text
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.text = null;

                /**
                 * Message senderId.
                 * @member {google.protobuf.IInt64Value|null|undefined} senderId
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.senderId = null;

                /**
                 * Message groupId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupId
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.groupId = null;

                /**
                 * Message recipientId.
                 * @member {google.protobuf.IInt64Value|null|undefined} recipientId
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.recipientId = null;

                /**
                 * Message records.
                 * @member {Array.<google.protobuf.IBytesValue>} records
                 * @memberof im.turms.proto.Message
                 * @instance
                 */
                Message.prototype.records = $util.emptyArray;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link im.turms.proto.Message.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.Message
                 * @static
                 * @param {im.turms.proto.IMessage} message Message message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Message.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.deliveryDate != null && message.hasOwnProperty("deliveryDate"))
                        $root.google.protobuf.Int64Value.encode(message.deliveryDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.deletionDate != null && message.hasOwnProperty("deletionDate"))
                        $root.google.protobuf.Int64Value.encode(message.deletionDate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.text != null && message.hasOwnProperty("text"))
                        $root.google.protobuf.StringValue.encode(message.text, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.senderId != null && message.hasOwnProperty("senderId"))
                        $root.google.protobuf.Int64Value.encode(message.senderId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        $root.google.protobuf.Int64Value.encode(message.groupId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.recipientId != null && message.hasOwnProperty("recipientId"))
                        $root.google.protobuf.Int64Value.encode(message.recipientId, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.records != null && message.records.length)
                        for (var i = 0; i < message.records.length; ++i)
                            $root.google.protobuf.BytesValue.encode(message.records[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.Message
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.Message} Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Message.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.Message();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.deliveryDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.deletionDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.text = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.senderId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.groupId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.recipientId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 8:
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push($root.google.protobuf.BytesValue.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Message;
            })();

            proto.MessagesWithTotal = (function() {

                /**
                 * Properties of a MessagesWithTotal.
                 * @memberof im.turms.proto
                 * @interface IMessagesWithTotal
                 * @property {number|null} [total] MessagesWithTotal total
                 * @property {im.turms.proto.ChatType|null} [chatType] MessagesWithTotal chatType
                 * @property {number|null} [fromId] MessagesWithTotal fromId
                 * @property {Array.<im.turms.proto.IMessage>|null} [messages] MessagesWithTotal messages
                 */

                /**
                 * Constructs a new MessagesWithTotal.
                 * @memberof im.turms.proto
                 * @classdesc Represents a MessagesWithTotal.
                 * @implements IMessagesWithTotal
                 * @constructor
                 * @param {im.turms.proto.IMessagesWithTotal=} [properties] Properties to set
                 */
                function MessagesWithTotal(properties) {
                    this.messages = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessagesWithTotal total.
                 * @member {number} total
                 * @memberof im.turms.proto.MessagesWithTotal
                 * @instance
                 */
                MessagesWithTotal.prototype.total = 0;

                /**
                 * MessagesWithTotal chatType.
                 * @member {im.turms.proto.ChatType} chatType
                 * @memberof im.turms.proto.MessagesWithTotal
                 * @instance
                 */
                MessagesWithTotal.prototype.chatType = 0;

                /**
                 * MessagesWithTotal fromId.
                 * @member {number} fromId
                 * @memberof im.turms.proto.MessagesWithTotal
                 * @instance
                 */
                MessagesWithTotal.prototype.fromId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * MessagesWithTotal messages.
                 * @member {Array.<im.turms.proto.IMessage>} messages
                 * @memberof im.turms.proto.MessagesWithTotal
                 * @instance
                 */
                MessagesWithTotal.prototype.messages = $util.emptyArray;

                /**
                 * Encodes the specified MessagesWithTotal message. Does not implicitly {@link im.turms.proto.MessagesWithTotal.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.MessagesWithTotal
                 * @static
                 * @param {im.turms.proto.IMessagesWithTotal} message MessagesWithTotal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessagesWithTotal.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.total != null && message.hasOwnProperty("total"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.total);
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chatType);
                    if (message.fromId != null && message.hasOwnProperty("fromId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fromId);
                    if (message.messages != null && message.messages.length)
                        for (var i = 0; i < message.messages.length; ++i)
                            $root.im.turms.proto.Message.encode(message.messages[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a MessagesWithTotal message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.MessagesWithTotal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.MessagesWithTotal} MessagesWithTotal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessagesWithTotal.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.MessagesWithTotal();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.total = reader.int32();
                            break;
                        case 2:
                            message.chatType = reader.int32();
                            break;
                        case 3:
                            message.fromId = reader.int64();
                            break;
                        case 4:
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.im.turms.proto.Message.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return MessagesWithTotal;
            })();

            proto.Acknowledge = (function() {

                /**
                 * Properties of an Acknowledge.
                 * @memberof im.turms.proto
                 * @interface IAcknowledge
                 * @property {number|null} [deliveryDate] Acknowledge deliveryDate
                 * @property {google.protobuf.IInt64Value|null} [messageId] Acknowledge messageId
                 */

                /**
                 * Constructs a new Acknowledge.
                 * @memberof im.turms.proto
                 * @classdesc Represents an Acknowledge.
                 * @implements IAcknowledge
                 * @constructor
                 * @param {im.turms.proto.IAcknowledge=} [properties] Properties to set
                 */
                function Acknowledge(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Acknowledge deliveryDate.
                 * @member {number} deliveryDate
                 * @memberof im.turms.proto.Acknowledge
                 * @instance
                 */
                Acknowledge.prototype.deliveryDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Acknowledge messageId.
                 * @member {google.protobuf.IInt64Value|null|undefined} messageId
                 * @memberof im.turms.proto.Acknowledge
                 * @instance
                 */
                Acknowledge.prototype.messageId = null;

                /**
                 * Encodes the specified Acknowledge message. Does not implicitly {@link im.turms.proto.Acknowledge.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.Acknowledge
                 * @static
                 * @param {im.turms.proto.IAcknowledge} message Acknowledge message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Acknowledge.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deliveryDate != null && message.hasOwnProperty("deliveryDate"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deliveryDate);
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        $root.google.protobuf.Int64Value.encode(message.messageId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an Acknowledge message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.Acknowledge
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.Acknowledge} Acknowledge
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Acknowledge.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.Acknowledge();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deliveryDate = reader.int64();
                            break;
                        case 2:
                            message.messageId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Acknowledge;
            })();

            proto.UserFriendRequest = (function() {

                /**
                 * Properties of a UserFriendRequest.
                 * @memberof im.turms.proto
                 * @interface IUserFriendRequest
                 * @property {google.protobuf.IInt64Value|null} [id] UserFriendRequest id
                 * @property {google.protobuf.IInt64Value|null} [creationDate] UserFriendRequest creationDate
                 * @property {google.protobuf.IStringValue|null} [content] UserFriendRequest content
                 * @property {im.turms.proto.RequestStatus|null} [requestStatus] UserFriendRequest requestStatus
                 * @property {google.protobuf.IStringValue|null} [reason] UserFriendRequest reason
                 * @property {google.protobuf.IInt64Value|null} [expirationDate] UserFriendRequest expirationDate
                 * @property {google.protobuf.IInt64Value|null} [requesterId] UserFriendRequest requesterId
                 * @property {google.protobuf.IInt64Value|null} [recipientId] UserFriendRequest recipientId
                 */

                /**
                 * Constructs a new UserFriendRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserFriendRequest.
                 * @implements IUserFriendRequest
                 * @constructor
                 * @param {im.turms.proto.IUserFriendRequest=} [properties] Properties to set
                 */
                function UserFriendRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserFriendRequest id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.id = null;

                /**
                 * UserFriendRequest creationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} creationDate
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.creationDate = null;

                /**
                 * UserFriendRequest content.
                 * @member {google.protobuf.IStringValue|null|undefined} content
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.content = null;

                /**
                 * UserFriendRequest requestStatus.
                 * @member {im.turms.proto.RequestStatus} requestStatus
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.requestStatus = 0;

                /**
                 * UserFriendRequest reason.
                 * @member {google.protobuf.IStringValue|null|undefined} reason
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.reason = null;

                /**
                 * UserFriendRequest expirationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} expirationDate
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.expirationDate = null;

                /**
                 * UserFriendRequest requesterId.
                 * @member {google.protobuf.IInt64Value|null|undefined} requesterId
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.requesterId = null;

                /**
                 * UserFriendRequest recipientId.
                 * @member {google.protobuf.IInt64Value|null|undefined} recipientId
                 * @memberof im.turms.proto.UserFriendRequest
                 * @instance
                 */
                UserFriendRequest.prototype.recipientId = null;

                /**
                 * Encodes the specified UserFriendRequest message. Does not implicitly {@link im.turms.proto.UserFriendRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserFriendRequest
                 * @static
                 * @param {im.turms.proto.IUserFriendRequest} message UserFriendRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserFriendRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.creationDate != null && message.hasOwnProperty("creationDate"))
                        $root.google.protobuf.Int64Value.encode(message.creationDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.content != null && message.hasOwnProperty("content"))
                        $root.google.protobuf.StringValue.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.requestStatus != null && message.hasOwnProperty("requestStatus"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.requestStatus);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        $root.google.protobuf.StringValue.encode(message.reason, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.expirationDate != null && message.hasOwnProperty("expirationDate"))
                        $root.google.protobuf.Int64Value.encode(message.expirationDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.requesterId != null && message.hasOwnProperty("requesterId"))
                        $root.google.protobuf.Int64Value.encode(message.requesterId, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.recipientId != null && message.hasOwnProperty("recipientId"))
                        $root.google.protobuf.Int64Value.encode(message.recipientId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserFriendRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserFriendRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserFriendRequest} UserFriendRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserFriendRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserFriendRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.creationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.content = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.requestStatus = reader.int32();
                            break;
                        case 5:
                            message.reason = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.expirationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.requesterId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.recipientId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserFriendRequest;
            })();

            proto.UserInfo = (function() {

                /**
                 * Properties of a UserInfo.
                 * @memberof im.turms.proto
                 * @interface IUserInfo
                 * @property {google.protobuf.IInt64Value|null} [id] UserInfo id
                 * @property {google.protobuf.IStringValue|null} [name] UserInfo name
                 * @property {google.protobuf.IStringValue|null} [intro] UserInfo intro
                 * @property {google.protobuf.IStringValue|null} [profilePictureUrl] UserInfo profilePictureUrl
                 * @property {google.protobuf.IInt64Value|null} [registrationDate] UserInfo registrationDate
                 * @property {google.protobuf.IInt64Value|null} [deletionDate] UserInfo deletionDate
                 * @property {google.protobuf.IBoolValue|null} [active] UserInfo active
                 * @property {im.turms.proto.ProfileAccessStrategy|null} [profileAccessStrategy] UserInfo profileAccessStrategy
                 */

                /**
                 * Constructs a new UserInfo.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserInfo.
                 * @implements IUserInfo
                 * @constructor
                 * @param {im.turms.proto.IUserInfo=} [properties] Properties to set
                 */
                function UserInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserInfo id.
                 * @member {google.protobuf.IInt64Value|null|undefined} id
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.id = null;

                /**
                 * UserInfo name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.name = null;

                /**
                 * UserInfo intro.
                 * @member {google.protobuf.IStringValue|null|undefined} intro
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.intro = null;

                /**
                 * UserInfo profilePictureUrl.
                 * @member {google.protobuf.IStringValue|null|undefined} profilePictureUrl
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.profilePictureUrl = null;

                /**
                 * UserInfo registrationDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} registrationDate
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.registrationDate = null;

                /**
                 * UserInfo deletionDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} deletionDate
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.deletionDate = null;

                /**
                 * UserInfo active.
                 * @member {google.protobuf.IBoolValue|null|undefined} active
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.active = null;

                /**
                 * UserInfo profileAccessStrategy.
                 * @member {im.turms.proto.ProfileAccessStrategy} profileAccessStrategy
                 * @memberof im.turms.proto.UserInfo
                 * @instance
                 */
                UserInfo.prototype.profileAccessStrategy = 0;

                /**
                 * Encodes the specified UserInfo message. Does not implicitly {@link im.turms.proto.UserInfo.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserInfo
                 * @static
                 * @param {im.turms.proto.IUserInfo} message UserInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.intro != null && message.hasOwnProperty("intro"))
                        $root.google.protobuf.StringValue.encode(message.intro, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.profilePictureUrl != null && message.hasOwnProperty("profilePictureUrl"))
                        $root.google.protobuf.StringValue.encode(message.profilePictureUrl, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.registrationDate != null && message.hasOwnProperty("registrationDate"))
                        $root.google.protobuf.Int64Value.encode(message.registrationDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.deletionDate != null && message.hasOwnProperty("deletionDate"))
                        $root.google.protobuf.Int64Value.encode(message.deletionDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.active != null && message.hasOwnProperty("active"))
                        $root.google.protobuf.BoolValue.encode(message.active, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.profileAccessStrategy != null && message.hasOwnProperty("profileAccessStrategy"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.profileAccessStrategy);
                    return writer;
                };

                /**
                 * Decodes a UserInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserInfo} UserInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.intro = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.profilePictureUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.registrationDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.deletionDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.active = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.profileAccessStrategy = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserInfo;
            })();

            proto.UserLocation = (function() {

                /**
                 * Properties of a UserLocation.
                 * @memberof im.turms.proto
                 * @interface IUserLocation
                 * @property {number|null} [latitude] UserLocation latitude
                 * @property {number|null} [longitude] UserLocation longitude
                 * @property {google.protobuf.IStringValue|null} [name] UserLocation name
                 * @property {google.protobuf.IStringValue|null} [address] UserLocation address
                 * @property {google.protobuf.IInt64Value|null} [timestamp] UserLocation timestamp
                 */

                /**
                 * Constructs a new UserLocation.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserLocation.
                 * @implements IUserLocation
                 * @constructor
                 * @param {im.turms.proto.IUserLocation=} [properties] Properties to set
                 */
                function UserLocation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserLocation latitude.
                 * @member {number} latitude
                 * @memberof im.turms.proto.UserLocation
                 * @instance
                 */
                UserLocation.prototype.latitude = 0;

                /**
                 * UserLocation longitude.
                 * @member {number} longitude
                 * @memberof im.turms.proto.UserLocation
                 * @instance
                 */
                UserLocation.prototype.longitude = 0;

                /**
                 * UserLocation name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.UserLocation
                 * @instance
                 */
                UserLocation.prototype.name = null;

                /**
                 * UserLocation address.
                 * @member {google.protobuf.IStringValue|null|undefined} address
                 * @memberof im.turms.proto.UserLocation
                 * @instance
                 */
                UserLocation.prototype.address = null;

                /**
                 * UserLocation timestamp.
                 * @member {google.protobuf.IInt64Value|null|undefined} timestamp
                 * @memberof im.turms.proto.UserLocation
                 * @instance
                 */
                UserLocation.prototype.timestamp = null;

                /**
                 * Encodes the specified UserLocation message. Does not implicitly {@link im.turms.proto.UserLocation.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserLocation
                 * @static
                 * @param {im.turms.proto.IUserLocation} message UserLocation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserLocation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.address != null && message.hasOwnProperty("address"))
                        $root.google.protobuf.StringValue.encode(message.address, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        $root.google.protobuf.Int64Value.encode(message.timestamp, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserLocation message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserLocation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserLocation} UserLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserLocation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserLocation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.latitude = reader.float();
                            break;
                        case 2:
                            message.longitude = reader.float();
                            break;
                        case 3:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.address = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.timestamp = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserLocation;
            })();

            proto.UserRelationshipGroup = (function() {

                /**
                 * Properties of a UserRelationshipGroup.
                 * @memberof im.turms.proto
                 * @interface IUserRelationshipGroup
                 * @property {number|null} [index] UserRelationshipGroup index
                 * @property {string|null} [name] UserRelationshipGroup name
                 */

                /**
                 * Constructs a new UserRelationshipGroup.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserRelationshipGroup.
                 * @implements IUserRelationshipGroup
                 * @constructor
                 * @param {im.turms.proto.IUserRelationshipGroup=} [properties] Properties to set
                 */
                function UserRelationshipGroup(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserRelationshipGroup index.
                 * @member {number} index
                 * @memberof im.turms.proto.UserRelationshipGroup
                 * @instance
                 */
                UserRelationshipGroup.prototype.index = 0;

                /**
                 * UserRelationshipGroup name.
                 * @member {string} name
                 * @memberof im.turms.proto.UserRelationshipGroup
                 * @instance
                 */
                UserRelationshipGroup.prototype.name = "";

                /**
                 * Encodes the specified UserRelationshipGroup message. Does not implicitly {@link im.turms.proto.UserRelationshipGroup.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserRelationshipGroup
                 * @static
                 * @param {im.turms.proto.IUserRelationshipGroup} message UserRelationshipGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserRelationshipGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && message.hasOwnProperty("index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    return writer;
                };

                /**
                 * Decodes a UserRelationshipGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserRelationshipGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserRelationshipGroup} UserRelationshipGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserRelationshipGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserRelationshipGroup();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.int32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserRelationshipGroup;
            })();

            proto.UserRelationship = (function() {

                /**
                 * Properties of a UserRelationship.
                 * @memberof im.turms.proto
                 * @interface IUserRelationship
                 * @property {google.protobuf.IInt64Value|null} [ownerId] UserRelationship ownerId
                 * @property {google.protobuf.IInt64Value|null} [relatedUserId] UserRelationship relatedUserId
                 * @property {google.protobuf.IBoolValue|null} [isBlocked] UserRelationship isBlocked
                 * @property {google.protobuf.IInt64Value|null} [groupIndex] UserRelationship groupIndex
                 * @property {google.protobuf.IInt64Value|null} [establishmentDate] UserRelationship establishmentDate
                 */

                /**
                 * Constructs a new UserRelationship.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserRelationship.
                 * @implements IUserRelationship
                 * @constructor
                 * @param {im.turms.proto.IUserRelationship=} [properties] Properties to set
                 */
                function UserRelationship(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserRelationship ownerId.
                 * @member {google.protobuf.IInt64Value|null|undefined} ownerId
                 * @memberof im.turms.proto.UserRelationship
                 * @instance
                 */
                UserRelationship.prototype.ownerId = null;

                /**
                 * UserRelationship relatedUserId.
                 * @member {google.protobuf.IInt64Value|null|undefined} relatedUserId
                 * @memberof im.turms.proto.UserRelationship
                 * @instance
                 */
                UserRelationship.prototype.relatedUserId = null;

                /**
                 * UserRelationship isBlocked.
                 * @member {google.protobuf.IBoolValue|null|undefined} isBlocked
                 * @memberof im.turms.proto.UserRelationship
                 * @instance
                 */
                UserRelationship.prototype.isBlocked = null;

                /**
                 * UserRelationship groupIndex.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupIndex
                 * @memberof im.turms.proto.UserRelationship
                 * @instance
                 */
                UserRelationship.prototype.groupIndex = null;

                /**
                 * UserRelationship establishmentDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} establishmentDate
                 * @memberof im.turms.proto.UserRelationship
                 * @instance
                 */
                UserRelationship.prototype.establishmentDate = null;

                /**
                 * Encodes the specified UserRelationship message. Does not implicitly {@link im.turms.proto.UserRelationship.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserRelationship
                 * @static
                 * @param {im.turms.proto.IUserRelationship} message UserRelationship message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserRelationship.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ownerId != null && message.hasOwnProperty("ownerId"))
                        $root.google.protobuf.Int64Value.encode(message.ownerId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.relatedUserId != null && message.hasOwnProperty("relatedUserId"))
                        $root.google.protobuf.Int64Value.encode(message.relatedUserId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.isBlocked != null && message.hasOwnProperty("isBlocked"))
                        $root.google.protobuf.BoolValue.encode(message.isBlocked, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        $root.google.protobuf.Int64Value.encode(message.groupIndex, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.establishmentDate != null && message.hasOwnProperty("establishmentDate"))
                        $root.google.protobuf.Int64Value.encode(message.establishmentDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserRelationship message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserRelationship
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserRelationship} UserRelationship
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserRelationship.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserRelationship();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ownerId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.relatedUserId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.isBlocked = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.groupIndex = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.establishmentDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserRelationship;
            })();

            proto.UserStatusDetail = (function() {

                /**
                 * Properties of a UserStatusDetail.
                 * @memberof im.turms.proto
                 * @interface IUserStatusDetail
                 * @property {number|null} [userId] UserStatusDetail userId
                 * @property {im.turms.proto.UserStatus|null} [userStatus] UserStatusDetail userStatus
                 * @property {Array.<im.turms.proto.DeviceType>|null} [usingDeviceTypes] UserStatusDetail usingDeviceTypes
                 */

                /**
                 * Constructs a new UserStatusDetail.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserStatusDetail.
                 * @implements IUserStatusDetail
                 * @constructor
                 * @param {im.turms.proto.IUserStatusDetail=} [properties] Properties to set
                 */
                function UserStatusDetail(properties) {
                    this.usingDeviceTypes = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserStatusDetail userId.
                 * @member {number} userId
                 * @memberof im.turms.proto.UserStatusDetail
                 * @instance
                 */
                UserStatusDetail.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UserStatusDetail userStatus.
                 * @member {im.turms.proto.UserStatus} userStatus
                 * @memberof im.turms.proto.UserStatusDetail
                 * @instance
                 */
                UserStatusDetail.prototype.userStatus = 0;

                /**
                 * UserStatusDetail usingDeviceTypes.
                 * @member {Array.<im.turms.proto.DeviceType>} usingDeviceTypes
                 * @memberof im.turms.proto.UserStatusDetail
                 * @instance
                 */
                UserStatusDetail.prototype.usingDeviceTypes = $util.emptyArray;

                /**
                 * Encodes the specified UserStatusDetail message. Does not implicitly {@link im.turms.proto.UserStatusDetail.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserStatusDetail
                 * @static
                 * @param {im.turms.proto.IUserStatusDetail} message UserStatusDetail message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserStatusDetail.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userStatus);
                    if (message.usingDeviceTypes != null && message.usingDeviceTypes.length) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork();
                        for (var i = 0; i < message.usingDeviceTypes.length; ++i)
                            writer.int32(message.usingDeviceTypes[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Decodes a UserStatusDetail message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserStatusDetail
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserStatusDetail} UserStatusDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserStatusDetail.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserStatusDetail();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.userStatus = reader.int32();
                            break;
                        case 3:
                            if (!(message.usingDeviceTypes && message.usingDeviceTypes.length))
                                message.usingDeviceTypes = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.usingDeviceTypes.push(reader.int32());
                            } else
                                message.usingDeviceTypes.push(reader.int32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserStatusDetail;
            })();

            proto.CreateGroupBlacklistedUserRequest = (function() {

                /**
                 * Properties of a CreateGroupBlacklistedUserRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateGroupBlacklistedUserRequest
                 * @property {number|null} [groupId] CreateGroupBlacklistedUserRequest groupId
                 * @property {number|null} [blacklistedUserId] CreateGroupBlacklistedUserRequest blacklistedUserId
                 */

                /**
                 * Constructs a new CreateGroupBlacklistedUserRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateGroupBlacklistedUserRequest.
                 * @implements ICreateGroupBlacklistedUserRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateGroupBlacklistedUserRequest=} [properties] Properties to set
                 */
                function CreateGroupBlacklistedUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupBlacklistedUserRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.CreateGroupBlacklistedUserRequest
                 * @instance
                 */
                CreateGroupBlacklistedUserRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupBlacklistedUserRequest blacklistedUserId.
                 * @member {number} blacklistedUserId
                 * @memberof im.turms.proto.CreateGroupBlacklistedUserRequest
                 * @instance
                 */
                CreateGroupBlacklistedUserRequest.prototype.blacklistedUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified CreateGroupBlacklistedUserRequest message. Does not implicitly {@link im.turms.proto.CreateGroupBlacklistedUserRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateGroupBlacklistedUserRequest
                 * @static
                 * @param {im.turms.proto.ICreateGroupBlacklistedUserRequest} message CreateGroupBlacklistedUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupBlacklistedUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.blacklistedUserId != null && message.hasOwnProperty("blacklistedUserId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blacklistedUserId);
                    return writer;
                };

                /**
                 * Decodes a CreateGroupBlacklistedUserRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateGroupBlacklistedUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateGroupBlacklistedUserRequest} CreateGroupBlacklistedUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupBlacklistedUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateGroupBlacklistedUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.blacklistedUserId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateGroupBlacklistedUserRequest;
            })();

            proto.DeleteGroupBlacklistedUserRequest = (function() {

                /**
                 * Properties of a DeleteGroupBlacklistedUserRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteGroupBlacklistedUserRequest
                 * @property {number|null} [groupId] DeleteGroupBlacklistedUserRequest groupId
                 * @property {number|null} [unblacklistedUserId] DeleteGroupBlacklistedUserRequest unblacklistedUserId
                 */

                /**
                 * Constructs a new DeleteGroupBlacklistedUserRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteGroupBlacklistedUserRequest.
                 * @implements IDeleteGroupBlacklistedUserRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteGroupBlacklistedUserRequest=} [properties] Properties to set
                 */
                function DeleteGroupBlacklistedUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteGroupBlacklistedUserRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.DeleteGroupBlacklistedUserRequest
                 * @instance
                 */
                DeleteGroupBlacklistedUserRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DeleteGroupBlacklistedUserRequest unblacklistedUserId.
                 * @member {number} unblacklistedUserId
                 * @memberof im.turms.proto.DeleteGroupBlacklistedUserRequest
                 * @instance
                 */
                DeleteGroupBlacklistedUserRequest.prototype.unblacklistedUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified DeleteGroupBlacklistedUserRequest message. Does not implicitly {@link im.turms.proto.DeleteGroupBlacklistedUserRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteGroupBlacklistedUserRequest
                 * @static
                 * @param {im.turms.proto.IDeleteGroupBlacklistedUserRequest} message DeleteGroupBlacklistedUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteGroupBlacklistedUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.unblacklistedUserId != null && message.hasOwnProperty("unblacklistedUserId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.unblacklistedUserId);
                    return writer;
                };

                /**
                 * Decodes a DeleteGroupBlacklistedUserRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteGroupBlacklistedUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteGroupBlacklistedUserRequest} DeleteGroupBlacklistedUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteGroupBlacklistedUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteGroupBlacklistedUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.unblacklistedUserId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteGroupBlacklistedUserRequest;
            })();

            proto.QueryGroupBlacklistedUsersIdsRequest = (function() {

                /**
                 * Properties of a QueryGroupBlacklistedUsersIdsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupBlacklistedUsersIdsRequest
                 * @property {number|null} [groupId] QueryGroupBlacklistedUsersIdsRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupBlacklistedUsersIdsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryGroupBlacklistedUsersIdsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupBlacklistedUsersIdsRequest.
                 * @implements IQueryGroupBlacklistedUsersIdsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupBlacklistedUsersIdsRequest=} [properties] Properties to set
                 */
                function QueryGroupBlacklistedUsersIdsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupBlacklistedUsersIdsRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersIdsRequest
                 * @instance
                 */
                QueryGroupBlacklistedUsersIdsRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupBlacklistedUsersIdsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersIdsRequest
                 * @instance
                 */
                QueryGroupBlacklistedUsersIdsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryGroupBlacklistedUsersIdsRequest message. Does not implicitly {@link im.turms.proto.QueryGroupBlacklistedUsersIdsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersIdsRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupBlacklistedUsersIdsRequest} message QueryGroupBlacklistedUsersIdsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupBlacklistedUsersIdsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupBlacklistedUsersIdsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersIdsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupBlacklistedUsersIdsRequest} QueryGroupBlacklistedUsersIdsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupBlacklistedUsersIdsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupBlacklistedUsersIdsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupBlacklistedUsersIdsRequest;
            })();

            proto.QueryGroupBlacklistedUsersInfosRequest = (function() {

                /**
                 * Properties of a QueryGroupBlacklistedUsersInfosRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupBlacklistedUsersInfosRequest
                 * @property {number|null} [groupId] QueryGroupBlacklistedUsersInfosRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupBlacklistedUsersInfosRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryGroupBlacklistedUsersInfosRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupBlacklistedUsersInfosRequest.
                 * @implements IQueryGroupBlacklistedUsersInfosRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupBlacklistedUsersInfosRequest=} [properties] Properties to set
                 */
                function QueryGroupBlacklistedUsersInfosRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupBlacklistedUsersInfosRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersInfosRequest
                 * @instance
                 */
                QueryGroupBlacklistedUsersInfosRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupBlacklistedUsersInfosRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersInfosRequest
                 * @instance
                 */
                QueryGroupBlacklistedUsersInfosRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryGroupBlacklistedUsersInfosRequest message. Does not implicitly {@link im.turms.proto.QueryGroupBlacklistedUsersInfosRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersInfosRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupBlacklistedUsersInfosRequest} message QueryGroupBlacklistedUsersInfosRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupBlacklistedUsersInfosRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupBlacklistedUsersInfosRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupBlacklistedUsersInfosRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupBlacklistedUsersInfosRequest} QueryGroupBlacklistedUsersInfosRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupBlacklistedUsersInfosRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupBlacklistedUsersInfosRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupBlacklistedUsersInfosRequest;
            })();

            proto.CreateGroupRequest = (function() {

                /**
                 * Properties of a CreateGroupRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateGroupRequest
                 * @property {string|null} [name] CreateGroupRequest name
                 * @property {google.protobuf.IStringValue|null} [intro] CreateGroupRequest intro
                 * @property {google.protobuf.IStringValue|null} [announcement] CreateGroupRequest announcement
                 * @property {google.protobuf.IStringValue|null} [profilePictureUrl] CreateGroupRequest profilePictureUrl
                 * @property {google.protobuf.IInt64Value|null} [groupTypeId] CreateGroupRequest groupTypeId
                 */

                /**
                 * Constructs a new CreateGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateGroupRequest.
                 * @implements ICreateGroupRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateGroupRequest=} [properties] Properties to set
                 */
                function CreateGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupRequest name.
                 * @member {string} name
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @instance
                 */
                CreateGroupRequest.prototype.name = "";

                /**
                 * CreateGroupRequest intro.
                 * @member {google.protobuf.IStringValue|null|undefined} intro
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @instance
                 */
                CreateGroupRequest.prototype.intro = null;

                /**
                 * CreateGroupRequest announcement.
                 * @member {google.protobuf.IStringValue|null|undefined} announcement
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @instance
                 */
                CreateGroupRequest.prototype.announcement = null;

                /**
                 * CreateGroupRequest profilePictureUrl.
                 * @member {google.protobuf.IStringValue|null|undefined} profilePictureUrl
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @instance
                 */
                CreateGroupRequest.prototype.profilePictureUrl = null;

                /**
                 * CreateGroupRequest groupTypeId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupTypeId
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @instance
                 */
                CreateGroupRequest.prototype.groupTypeId = null;

                /**
                 * Encodes the specified CreateGroupRequest message. Does not implicitly {@link im.turms.proto.CreateGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @static
                 * @param {im.turms.proto.ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.intro != null && message.hasOwnProperty("intro"))
                        $root.google.protobuf.StringValue.encode(message.intro, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.announcement != null && message.hasOwnProperty("announcement"))
                        $root.google.protobuf.StringValue.encode(message.announcement, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.profilePictureUrl != null && message.hasOwnProperty("profilePictureUrl"))
                        $root.google.protobuf.StringValue.encode(message.profilePictureUrl, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.groupTypeId != null && message.hasOwnProperty("groupTypeId"))
                        $root.google.protobuf.Int64Value.encode(message.groupTypeId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a CreateGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateGroupRequest} CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.intro = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.announcement = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.profilePictureUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.groupTypeId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateGroupRequest;
            })();

            proto.DeleteGroupRequest = (function() {

                /**
                 * Properties of a DeleteGroupRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteGroupRequest
                 * @property {number|null} [groupId] DeleteGroupRequest groupId
                 */

                /**
                 * Constructs a new DeleteGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteGroupRequest.
                 * @implements IDeleteGroupRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteGroupRequest=} [properties] Properties to set
                 */
                function DeleteGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteGroupRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.DeleteGroupRequest
                 * @instance
                 */
                DeleteGroupRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified DeleteGroupRequest message. Does not implicitly {@link im.turms.proto.DeleteGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteGroupRequest
                 * @static
                 * @param {im.turms.proto.IDeleteGroupRequest} message DeleteGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    return writer;
                };

                /**
                 * Decodes a DeleteGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteGroupRequest} DeleteGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteGroupRequest;
            })();

            proto.CheckGroupJoinQuestionAnswerRequest = (function() {

                /**
                 * Properties of a CheckGroupJoinQuestionAnswerRequest.
                 * @memberof im.turms.proto
                 * @interface ICheckGroupJoinQuestionAnswerRequest
                 * @property {number|null} [questionId] CheckGroupJoinQuestionAnswerRequest questionId
                 * @property {string|null} [answer] CheckGroupJoinQuestionAnswerRequest answer
                 */

                /**
                 * Constructs a new CheckGroupJoinQuestionAnswerRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CheckGroupJoinQuestionAnswerRequest.
                 * @implements ICheckGroupJoinQuestionAnswerRequest
                 * @constructor
                 * @param {im.turms.proto.ICheckGroupJoinQuestionAnswerRequest=} [properties] Properties to set
                 */
                function CheckGroupJoinQuestionAnswerRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CheckGroupJoinQuestionAnswerRequest questionId.
                 * @member {number} questionId
                 * @memberof im.turms.proto.CheckGroupJoinQuestionAnswerRequest
                 * @instance
                 */
                CheckGroupJoinQuestionAnswerRequest.prototype.questionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CheckGroupJoinQuestionAnswerRequest answer.
                 * @member {string} answer
                 * @memberof im.turms.proto.CheckGroupJoinQuestionAnswerRequest
                 * @instance
                 */
                CheckGroupJoinQuestionAnswerRequest.prototype.answer = "";

                /**
                 * Encodes the specified CheckGroupJoinQuestionAnswerRequest message. Does not implicitly {@link im.turms.proto.CheckGroupJoinQuestionAnswerRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CheckGroupJoinQuestionAnswerRequest
                 * @static
                 * @param {im.turms.proto.ICheckGroupJoinQuestionAnswerRequest} message CheckGroupJoinQuestionAnswerRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CheckGroupJoinQuestionAnswerRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.questionId != null && message.hasOwnProperty("questionId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.questionId);
                    if (message.answer != null && message.hasOwnProperty("answer"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.answer);
                    return writer;
                };

                /**
                 * Decodes a CheckGroupJoinQuestionAnswerRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CheckGroupJoinQuestionAnswerRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CheckGroupJoinQuestionAnswerRequest} CheckGroupJoinQuestionAnswerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CheckGroupJoinQuestionAnswerRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CheckGroupJoinQuestionAnswerRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.questionId = reader.int64();
                            break;
                        case 2:
                            message.answer = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CheckGroupJoinQuestionAnswerRequest;
            })();

            proto.CreateGroupInvitationRequest = (function() {

                /**
                 * Properties of a CreateGroupInvitationRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateGroupInvitationRequest
                 * @property {number|null} [groupId] CreateGroupInvitationRequest groupId
                 * @property {number|null} [inviteeId] CreateGroupInvitationRequest inviteeId
                 * @property {string|null} [content] CreateGroupInvitationRequest content
                 */

                /**
                 * Constructs a new CreateGroupInvitationRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateGroupInvitationRequest.
                 * @implements ICreateGroupInvitationRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateGroupInvitationRequest=} [properties] Properties to set
                 */
                function CreateGroupInvitationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupInvitationRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.CreateGroupInvitationRequest
                 * @instance
                 */
                CreateGroupInvitationRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupInvitationRequest inviteeId.
                 * @member {number} inviteeId
                 * @memberof im.turms.proto.CreateGroupInvitationRequest
                 * @instance
                 */
                CreateGroupInvitationRequest.prototype.inviteeId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupInvitationRequest content.
                 * @member {string} content
                 * @memberof im.turms.proto.CreateGroupInvitationRequest
                 * @instance
                 */
                CreateGroupInvitationRequest.prototype.content = "";

                /**
                 * Encodes the specified CreateGroupInvitationRequest message. Does not implicitly {@link im.turms.proto.CreateGroupInvitationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateGroupInvitationRequest
                 * @static
                 * @param {im.turms.proto.ICreateGroupInvitationRequest} message CreateGroupInvitationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupInvitationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.inviteeId != null && message.hasOwnProperty("inviteeId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.inviteeId);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                    return writer;
                };

                /**
                 * Decodes a CreateGroupInvitationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateGroupInvitationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateGroupInvitationRequest} CreateGroupInvitationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupInvitationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateGroupInvitationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.inviteeId = reader.int64();
                            break;
                        case 3:
                            message.content = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateGroupInvitationRequest;
            })();

            proto.CreateGroupJoinQuestionRequest = (function() {

                /**
                 * Properties of a CreateGroupJoinQuestionRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateGroupJoinQuestionRequest
                 * @property {number|null} [groupId] CreateGroupJoinQuestionRequest groupId
                 * @property {string|null} [question] CreateGroupJoinQuestionRequest question
                 * @property {Array.<string>|null} [answers] CreateGroupJoinQuestionRequest answers
                 */

                /**
                 * Constructs a new CreateGroupJoinQuestionRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateGroupJoinQuestionRequest.
                 * @implements ICreateGroupJoinQuestionRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateGroupJoinQuestionRequest=} [properties] Properties to set
                 */
                function CreateGroupJoinQuestionRequest(properties) {
                    this.answers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupJoinQuestionRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.CreateGroupJoinQuestionRequest
                 * @instance
                 */
                CreateGroupJoinQuestionRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupJoinQuestionRequest question.
                 * @member {string} question
                 * @memberof im.turms.proto.CreateGroupJoinQuestionRequest
                 * @instance
                 */
                CreateGroupJoinQuestionRequest.prototype.question = "";

                /**
                 * CreateGroupJoinQuestionRequest answers.
                 * @member {Array.<string>} answers
                 * @memberof im.turms.proto.CreateGroupJoinQuestionRequest
                 * @instance
                 */
                CreateGroupJoinQuestionRequest.prototype.answers = $util.emptyArray;

                /**
                 * Encodes the specified CreateGroupJoinQuestionRequest message. Does not implicitly {@link im.turms.proto.CreateGroupJoinQuestionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateGroupJoinQuestionRequest
                 * @static
                 * @param {im.turms.proto.ICreateGroupJoinQuestionRequest} message CreateGroupJoinQuestionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupJoinQuestionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.question != null && message.hasOwnProperty("question"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.question);
                    if (message.answers != null && message.answers.length)
                        for (var i = 0; i < message.answers.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.answers[i]);
                    return writer;
                };

                /**
                 * Decodes a CreateGroupJoinQuestionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateGroupJoinQuestionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateGroupJoinQuestionRequest} CreateGroupJoinQuestionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupJoinQuestionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateGroupJoinQuestionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.question = reader.string();
                            break;
                        case 3:
                            if (!(message.answers && message.answers.length))
                                message.answers = [];
                            message.answers.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateGroupJoinQuestionRequest;
            })();

            proto.CreateGroupJoinRequestRequest = (function() {

                /**
                 * Properties of a CreateGroupJoinRequestRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateGroupJoinRequestRequest
                 * @property {number|null} [groupId] CreateGroupJoinRequestRequest groupId
                 * @property {string|null} [content] CreateGroupJoinRequestRequest content
                 */

                /**
                 * Constructs a new CreateGroupJoinRequestRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateGroupJoinRequestRequest.
                 * @implements ICreateGroupJoinRequestRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateGroupJoinRequestRequest=} [properties] Properties to set
                 */
                function CreateGroupJoinRequestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupJoinRequestRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.CreateGroupJoinRequestRequest
                 * @instance
                 */
                CreateGroupJoinRequestRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupJoinRequestRequest content.
                 * @member {string} content
                 * @memberof im.turms.proto.CreateGroupJoinRequestRequest
                 * @instance
                 */
                CreateGroupJoinRequestRequest.prototype.content = "";

                /**
                 * Encodes the specified CreateGroupJoinRequestRequest message. Does not implicitly {@link im.turms.proto.CreateGroupJoinRequestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateGroupJoinRequestRequest
                 * @static
                 * @param {im.turms.proto.ICreateGroupJoinRequestRequest} message CreateGroupJoinRequestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupJoinRequestRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                    return writer;
                };

                /**
                 * Decodes a CreateGroupJoinRequestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateGroupJoinRequestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateGroupJoinRequestRequest} CreateGroupJoinRequestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupJoinRequestRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateGroupJoinRequestRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.content = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateGroupJoinRequestRequest;
            })();

            proto.DeleteGroupInvitationRequest = (function() {

                /**
                 * Properties of a DeleteGroupInvitationRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteGroupInvitationRequest
                 * @property {number|null} [invitationId] DeleteGroupInvitationRequest invitationId
                 */

                /**
                 * Constructs a new DeleteGroupInvitationRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteGroupInvitationRequest.
                 * @implements IDeleteGroupInvitationRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteGroupInvitationRequest=} [properties] Properties to set
                 */
                function DeleteGroupInvitationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteGroupInvitationRequest invitationId.
                 * @member {number} invitationId
                 * @memberof im.turms.proto.DeleteGroupInvitationRequest
                 * @instance
                 */
                DeleteGroupInvitationRequest.prototype.invitationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified DeleteGroupInvitationRequest message. Does not implicitly {@link im.turms.proto.DeleteGroupInvitationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteGroupInvitationRequest
                 * @static
                 * @param {im.turms.proto.IDeleteGroupInvitationRequest} message DeleteGroupInvitationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteGroupInvitationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.invitationId != null && message.hasOwnProperty("invitationId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.invitationId);
                    return writer;
                };

                /**
                 * Decodes a DeleteGroupInvitationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteGroupInvitationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteGroupInvitationRequest} DeleteGroupInvitationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteGroupInvitationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteGroupInvitationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.invitationId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteGroupInvitationRequest;
            })();

            proto.DeleteGroupJoinQuestionRequest = (function() {

                /**
                 * Properties of a DeleteGroupJoinQuestionRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteGroupJoinQuestionRequest
                 * @property {number|null} [questionId] DeleteGroupJoinQuestionRequest questionId
                 */

                /**
                 * Constructs a new DeleteGroupJoinQuestionRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteGroupJoinQuestionRequest.
                 * @implements IDeleteGroupJoinQuestionRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteGroupJoinQuestionRequest=} [properties] Properties to set
                 */
                function DeleteGroupJoinQuestionRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteGroupJoinQuestionRequest questionId.
                 * @member {number} questionId
                 * @memberof im.turms.proto.DeleteGroupJoinQuestionRequest
                 * @instance
                 */
                DeleteGroupJoinQuestionRequest.prototype.questionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified DeleteGroupJoinQuestionRequest message. Does not implicitly {@link im.turms.proto.DeleteGroupJoinQuestionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteGroupJoinQuestionRequest
                 * @static
                 * @param {im.turms.proto.IDeleteGroupJoinQuestionRequest} message DeleteGroupJoinQuestionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteGroupJoinQuestionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.questionId != null && message.hasOwnProperty("questionId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.questionId);
                    return writer;
                };

                /**
                 * Decodes a DeleteGroupJoinQuestionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteGroupJoinQuestionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteGroupJoinQuestionRequest} DeleteGroupJoinQuestionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteGroupJoinQuestionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteGroupJoinQuestionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.questionId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteGroupJoinQuestionRequest;
            })();

            proto.DeleteGroupJoinRequestRequest = (function() {

                /**
                 * Properties of a DeleteGroupJoinRequestRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteGroupJoinRequestRequest
                 * @property {number|null} [requestId] DeleteGroupJoinRequestRequest requestId
                 */

                /**
                 * Constructs a new DeleteGroupJoinRequestRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteGroupJoinRequestRequest.
                 * @implements IDeleteGroupJoinRequestRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteGroupJoinRequestRequest=} [properties] Properties to set
                 */
                function DeleteGroupJoinRequestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteGroupJoinRequestRequest requestId.
                 * @member {number} requestId
                 * @memberof im.turms.proto.DeleteGroupJoinRequestRequest
                 * @instance
                 */
                DeleteGroupJoinRequestRequest.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified DeleteGroupJoinRequestRequest message. Does not implicitly {@link im.turms.proto.DeleteGroupJoinRequestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteGroupJoinRequestRequest
                 * @static
                 * @param {im.turms.proto.IDeleteGroupJoinRequestRequest} message DeleteGroupJoinRequestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteGroupJoinRequestRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.requestId != null && message.hasOwnProperty("requestId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestId);
                    return writer;
                };

                /**
                 * Decodes a DeleteGroupJoinRequestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteGroupJoinRequestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteGroupJoinRequestRequest} DeleteGroupJoinRequestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteGroupJoinRequestRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteGroupJoinRequestRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.requestId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteGroupJoinRequestRequest;
            })();

            proto.QueryGroupInvitationsRequest = (function() {

                /**
                 * Properties of a QueryGroupInvitationsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupInvitationsRequest
                 * @property {number|null} [groupId] QueryGroupInvitationsRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupInvitationsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryGroupInvitationsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupInvitationsRequest.
                 * @implements IQueryGroupInvitationsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupInvitationsRequest=} [properties] Properties to set
                 */
                function QueryGroupInvitationsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupInvitationsRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupInvitationsRequest
                 * @instance
                 */
                QueryGroupInvitationsRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupInvitationsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupInvitationsRequest
                 * @instance
                 */
                QueryGroupInvitationsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryGroupInvitationsRequest message. Does not implicitly {@link im.turms.proto.QueryGroupInvitationsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupInvitationsRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupInvitationsRequest} message QueryGroupInvitationsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupInvitationsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupInvitationsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupInvitationsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupInvitationsRequest} QueryGroupInvitationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupInvitationsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupInvitationsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupInvitationsRequest;
            })();

            proto.QueryGroupJoinQuestionsRequest = (function() {

                /**
                 * Properties of a QueryGroupJoinQuestionsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupJoinQuestionsRequest
                 * @property {number|null} [groupId] QueryGroupJoinQuestionsRequest groupId
                 * @property {boolean|null} [withAnswers] QueryGroupJoinQuestionsRequest withAnswers
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupJoinQuestionsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryGroupJoinQuestionsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupJoinQuestionsRequest.
                 * @implements IQueryGroupJoinQuestionsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupJoinQuestionsRequest=} [properties] Properties to set
                 */
                function QueryGroupJoinQuestionsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupJoinQuestionsRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupJoinQuestionsRequest
                 * @instance
                 */
                QueryGroupJoinQuestionsRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupJoinQuestionsRequest withAnswers.
                 * @member {boolean} withAnswers
                 * @memberof im.turms.proto.QueryGroupJoinQuestionsRequest
                 * @instance
                 */
                QueryGroupJoinQuestionsRequest.prototype.withAnswers = false;

                /**
                 * QueryGroupJoinQuestionsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupJoinQuestionsRequest
                 * @instance
                 */
                QueryGroupJoinQuestionsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryGroupJoinQuestionsRequest message. Does not implicitly {@link im.turms.proto.QueryGroupJoinQuestionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupJoinQuestionsRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupJoinQuestionsRequest} message QueryGroupJoinQuestionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupJoinQuestionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.withAnswers != null && message.hasOwnProperty("withAnswers"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.withAnswers);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupJoinQuestionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupJoinQuestionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupJoinQuestionsRequest} QueryGroupJoinQuestionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupJoinQuestionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupJoinQuestionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.withAnswers = reader.bool();
                            break;
                        case 3:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupJoinQuestionsRequest;
            })();

            proto.QueryGroupJoinRequestsRequest = (function() {

                /**
                 * Properties of a QueryGroupJoinRequestsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupJoinRequestsRequest
                 * @property {number|null} [groupId] QueryGroupJoinRequestsRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupJoinRequestsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryGroupJoinRequestsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupJoinRequestsRequest.
                 * @implements IQueryGroupJoinRequestsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupJoinRequestsRequest=} [properties] Properties to set
                 */
                function QueryGroupJoinRequestsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupJoinRequestsRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupJoinRequestsRequest
                 * @instance
                 */
                QueryGroupJoinRequestsRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupJoinRequestsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupJoinRequestsRequest
                 * @instance
                 */
                QueryGroupJoinRequestsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryGroupJoinRequestsRequest message. Does not implicitly {@link im.turms.proto.QueryGroupJoinRequestsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupJoinRequestsRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupJoinRequestsRequest} message QueryGroupJoinRequestsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupJoinRequestsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupJoinRequestsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupJoinRequestsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupJoinRequestsRequest} QueryGroupJoinRequestsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupJoinRequestsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupJoinRequestsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupJoinRequestsRequest;
            })();

            proto.UpdateGroupJoinQuestionRequest = (function() {

                /**
                 * Properties of an UpdateGroupJoinQuestionRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateGroupJoinQuestionRequest
                 * @property {number|null} [questionId] UpdateGroupJoinQuestionRequest questionId
                 * @property {google.protobuf.IStringValue|null} [question] UpdateGroupJoinQuestionRequest question
                 * @property {Array.<string>|null} [answers] UpdateGroupJoinQuestionRequest answers
                 */

                /**
                 * Constructs a new UpdateGroupJoinQuestionRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateGroupJoinQuestionRequest.
                 * @implements IUpdateGroupJoinQuestionRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateGroupJoinQuestionRequest=} [properties] Properties to set
                 */
                function UpdateGroupJoinQuestionRequest(properties) {
                    this.answers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateGroupJoinQuestionRequest questionId.
                 * @member {number} questionId
                 * @memberof im.turms.proto.UpdateGroupJoinQuestionRequest
                 * @instance
                 */
                UpdateGroupJoinQuestionRequest.prototype.questionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateGroupJoinQuestionRequest question.
                 * @member {google.protobuf.IStringValue|null|undefined} question
                 * @memberof im.turms.proto.UpdateGroupJoinQuestionRequest
                 * @instance
                 */
                UpdateGroupJoinQuestionRequest.prototype.question = null;

                /**
                 * UpdateGroupJoinQuestionRequest answers.
                 * @member {Array.<string>} answers
                 * @memberof im.turms.proto.UpdateGroupJoinQuestionRequest
                 * @instance
                 */
                UpdateGroupJoinQuestionRequest.prototype.answers = $util.emptyArray;

                /**
                 * Encodes the specified UpdateGroupJoinQuestionRequest message. Does not implicitly {@link im.turms.proto.UpdateGroupJoinQuestionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateGroupJoinQuestionRequest
                 * @static
                 * @param {im.turms.proto.IUpdateGroupJoinQuestionRequest} message UpdateGroupJoinQuestionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateGroupJoinQuestionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.questionId != null && message.hasOwnProperty("questionId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.questionId);
                    if (message.question != null && message.hasOwnProperty("question"))
                        $root.google.protobuf.StringValue.encode(message.question, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.answers != null && message.answers.length)
                        for (var i = 0; i < message.answers.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.answers[i]);
                    return writer;
                };

                /**
                 * Decodes an UpdateGroupJoinQuestionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateGroupJoinQuestionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateGroupJoinQuestionRequest} UpdateGroupJoinQuestionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateGroupJoinQuestionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateGroupJoinQuestionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.questionId = reader.int64();
                            break;
                        case 2:
                            message.question = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.answers && message.answers.length))
                                message.answers = [];
                            message.answers.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateGroupJoinQuestionRequest;
            })();

            proto.CreateGroupMemberRequest = (function() {

                /**
                 * Properties of a CreateGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateGroupMemberRequest
                 * @property {number|null} [groupId] CreateGroupMemberRequest groupId
                 * @property {number|null} [userId] CreateGroupMemberRequest userId
                 * @property {google.protobuf.IStringValue|null} [name] CreateGroupMemberRequest name
                 * @property {im.turms.proto.GroupMemberRole|null} [role] CreateGroupMemberRequest role
                 * @property {google.protobuf.IInt64Value|null} [muteEndDate] CreateGroupMemberRequest muteEndDate
                 */

                /**
                 * Constructs a new CreateGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateGroupMemberRequest.
                 * @implements ICreateGroupMemberRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateGroupMemberRequest=} [properties] Properties to set
                 */
                function CreateGroupMemberRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateGroupMemberRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @instance
                 */
                CreateGroupMemberRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupMemberRequest userId.
                 * @member {number} userId
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @instance
                 */
                CreateGroupMemberRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateGroupMemberRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @instance
                 */
                CreateGroupMemberRequest.prototype.name = null;

                /**
                 * CreateGroupMemberRequest role.
                 * @member {im.turms.proto.GroupMemberRole} role
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @instance
                 */
                CreateGroupMemberRequest.prototype.role = 0;

                /**
                 * CreateGroupMemberRequest muteEndDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} muteEndDate
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @instance
                 */
                CreateGroupMemberRequest.prototype.muteEndDate = null;

                /**
                 * Encodes the specified CreateGroupMemberRequest message. Does not implicitly {@link im.turms.proto.CreateGroupMemberRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @static
                 * @param {im.turms.proto.ICreateGroupMemberRequest} message CreateGroupMemberRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateGroupMemberRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.role != null && message.hasOwnProperty("role"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.role);
                    if (message.muteEndDate != null && message.hasOwnProperty("muteEndDate"))
                        $root.google.protobuf.Int64Value.encode(message.muteEndDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a CreateGroupMemberRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateGroupMemberRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateGroupMemberRequest} CreateGroupMemberRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateGroupMemberRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateGroupMemberRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.userId = reader.int64();
                            break;
                        case 3:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.role = reader.int32();
                            break;
                        case 5:
                            message.muteEndDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateGroupMemberRequest;
            })();

            proto.DeleteGroupMemberRequest = (function() {

                /**
                 * Properties of a DeleteGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteGroupMemberRequest
                 * @property {number|null} [groupId] DeleteGroupMemberRequest groupId
                 * @property {number|null} [groupMemberId] DeleteGroupMemberRequest groupMemberId
                 * @property {google.protobuf.IInt64Value|null} [successorId] DeleteGroupMemberRequest successorId
                 * @property {google.protobuf.IBoolValue|null} [quitAfterTransfer] DeleteGroupMemberRequest quitAfterTransfer
                 */

                /**
                 * Constructs a new DeleteGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteGroupMemberRequest.
                 * @implements IDeleteGroupMemberRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteGroupMemberRequest=} [properties] Properties to set
                 */
                function DeleteGroupMemberRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteGroupMemberRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.DeleteGroupMemberRequest
                 * @instance
                 */
                DeleteGroupMemberRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DeleteGroupMemberRequest groupMemberId.
                 * @member {number} groupMemberId
                 * @memberof im.turms.proto.DeleteGroupMemberRequest
                 * @instance
                 */
                DeleteGroupMemberRequest.prototype.groupMemberId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DeleteGroupMemberRequest successorId.
                 * @member {google.protobuf.IInt64Value|null|undefined} successorId
                 * @memberof im.turms.proto.DeleteGroupMemberRequest
                 * @instance
                 */
                DeleteGroupMemberRequest.prototype.successorId = null;

                /**
                 * DeleteGroupMemberRequest quitAfterTransfer.
                 * @member {google.protobuf.IBoolValue|null|undefined} quitAfterTransfer
                 * @memberof im.turms.proto.DeleteGroupMemberRequest
                 * @instance
                 */
                DeleteGroupMemberRequest.prototype.quitAfterTransfer = null;

                /**
                 * Encodes the specified DeleteGroupMemberRequest message. Does not implicitly {@link im.turms.proto.DeleteGroupMemberRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteGroupMemberRequest
                 * @static
                 * @param {im.turms.proto.IDeleteGroupMemberRequest} message DeleteGroupMemberRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteGroupMemberRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.groupMemberId != null && message.hasOwnProperty("groupMemberId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.groupMemberId);
                    if (message.successorId != null && message.hasOwnProperty("successorId"))
                        $root.google.protobuf.Int64Value.encode(message.successorId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.quitAfterTransfer != null && message.hasOwnProperty("quitAfterTransfer"))
                        $root.google.protobuf.BoolValue.encode(message.quitAfterTransfer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a DeleteGroupMemberRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteGroupMemberRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteGroupMemberRequest} DeleteGroupMemberRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteGroupMemberRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteGroupMemberRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.groupMemberId = reader.int64();
                            break;
                        case 3:
                            message.successorId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.quitAfterTransfer = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteGroupMemberRequest;
            })();

            proto.QueryGroupMembersRequest = (function() {

                /**
                 * Properties of a QueryGroupMembersRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupMembersRequest
                 * @property {number|null} [groupId] QueryGroupMembersRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupMembersRequest lastUpdatedDate
                 * @property {Array.<number>|null} [groupMembersIds] QueryGroupMembersRequest groupMembersIds
                 * @property {google.protobuf.IBoolValue|null} [withStatus] QueryGroupMembersRequest withStatus
                 */

                /**
                 * Constructs a new QueryGroupMembersRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupMembersRequest.
                 * @implements IQueryGroupMembersRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupMembersRequest=} [properties] Properties to set
                 */
                function QueryGroupMembersRequest(properties) {
                    this.groupMembersIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupMembersRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupMembersRequest
                 * @instance
                 */
                QueryGroupMembersRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupMembersRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupMembersRequest
                 * @instance
                 */
                QueryGroupMembersRequest.prototype.lastUpdatedDate = null;

                /**
                 * QueryGroupMembersRequest groupMembersIds.
                 * @member {Array.<number>} groupMembersIds
                 * @memberof im.turms.proto.QueryGroupMembersRequest
                 * @instance
                 */
                QueryGroupMembersRequest.prototype.groupMembersIds = $util.emptyArray;

                /**
                 * QueryGroupMembersRequest withStatus.
                 * @member {google.protobuf.IBoolValue|null|undefined} withStatus
                 * @memberof im.turms.proto.QueryGroupMembersRequest
                 * @instance
                 */
                QueryGroupMembersRequest.prototype.withStatus = null;

                /**
                 * Encodes the specified QueryGroupMembersRequest message. Does not implicitly {@link im.turms.proto.QueryGroupMembersRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupMembersRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupMembersRequest} message QueryGroupMembersRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupMembersRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.groupMembersIds != null && message.groupMembersIds.length) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork();
                        for (var i = 0; i < message.groupMembersIds.length; ++i)
                            writer.int64(message.groupMembersIds[i]);
                        writer.ldelim();
                    }
                    if (message.withStatus != null && message.hasOwnProperty("withStatus"))
                        $root.google.protobuf.BoolValue.encode(message.withStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupMembersRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupMembersRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupMembersRequest} QueryGroupMembersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupMembersRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupMembersRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.groupMembersIds && message.groupMembersIds.length))
                                message.groupMembersIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.groupMembersIds.push(reader.int64());
                            } else
                                message.groupMembersIds.push(reader.int64());
                            break;
                        case 4:
                            message.withStatus = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupMembersRequest;
            })();

            proto.UpdateGroupMemberRequest = (function() {

                /**
                 * Properties of an UpdateGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateGroupMemberRequest
                 * @property {number|null} [groupId] UpdateGroupMemberRequest groupId
                 * @property {number|null} [memberId] UpdateGroupMemberRequest memberId
                 * @property {google.protobuf.IStringValue|null} [name] UpdateGroupMemberRequest name
                 * @property {im.turms.proto.GroupMemberRole|null} [role] UpdateGroupMemberRequest role
                 * @property {google.protobuf.IInt64Value|null} [muteEndDate] UpdateGroupMemberRequest muteEndDate
                 */

                /**
                 * Constructs a new UpdateGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateGroupMemberRequest.
                 * @implements IUpdateGroupMemberRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateGroupMemberRequest=} [properties] Properties to set
                 */
                function UpdateGroupMemberRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateGroupMemberRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @instance
                 */
                UpdateGroupMemberRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateGroupMemberRequest memberId.
                 * @member {number} memberId
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @instance
                 */
                UpdateGroupMemberRequest.prototype.memberId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateGroupMemberRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @instance
                 */
                UpdateGroupMemberRequest.prototype.name = null;

                /**
                 * UpdateGroupMemberRequest role.
                 * @member {im.turms.proto.GroupMemberRole} role
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @instance
                 */
                UpdateGroupMemberRequest.prototype.role = 0;

                /**
                 * UpdateGroupMemberRequest muteEndDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} muteEndDate
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @instance
                 */
                UpdateGroupMemberRequest.prototype.muteEndDate = null;

                /**
                 * Encodes the specified UpdateGroupMemberRequest message. Does not implicitly {@link im.turms.proto.UpdateGroupMemberRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @static
                 * @param {im.turms.proto.IUpdateGroupMemberRequest} message UpdateGroupMemberRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateGroupMemberRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.memberId != null && message.hasOwnProperty("memberId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.memberId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.role != null && message.hasOwnProperty("role"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.role);
                    if (message.muteEndDate != null && message.hasOwnProperty("muteEndDate"))
                        $root.google.protobuf.Int64Value.encode(message.muteEndDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UpdateGroupMemberRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateGroupMemberRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateGroupMemberRequest} UpdateGroupMemberRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateGroupMemberRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateGroupMemberRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.memberId = reader.int64();
                            break;
                        case 3:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.role = reader.int32();
                            break;
                        case 5:
                            message.muteEndDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateGroupMemberRequest;
            })();

            proto.QueryGroupRequest = (function() {

                /**
                 * Properties of a QueryGroupRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryGroupRequest
                 * @property {number|null} [groupId] QueryGroupRequest groupId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryGroupRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryGroupRequest.
                 * @implements IQueryGroupRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryGroupRequest=} [properties] Properties to set
                 */
                function QueryGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGroupRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.QueryGroupRequest
                 * @instance
                 */
                QueryGroupRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryGroupRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryGroupRequest
                 * @instance
                 */
                QueryGroupRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryGroupRequest message. Does not implicitly {@link im.turms.proto.QueryGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryGroupRequest
                 * @static
                 * @param {im.turms.proto.IQueryGroupRequest} message QueryGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryGroupRequest} QueryGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryGroupRequest;
            })();

            proto.QueryJoinedGroupsIdsRequest = (function() {

                /**
                 * Properties of a QueryJoinedGroupsIdsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryJoinedGroupsIdsRequest
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryJoinedGroupsIdsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryJoinedGroupsIdsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryJoinedGroupsIdsRequest.
                 * @implements IQueryJoinedGroupsIdsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryJoinedGroupsIdsRequest=} [properties] Properties to set
                 */
                function QueryJoinedGroupsIdsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryJoinedGroupsIdsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryJoinedGroupsIdsRequest
                 * @instance
                 */
                QueryJoinedGroupsIdsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryJoinedGroupsIdsRequest message. Does not implicitly {@link im.turms.proto.QueryJoinedGroupsIdsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryJoinedGroupsIdsRequest
                 * @static
                 * @param {im.turms.proto.IQueryJoinedGroupsIdsRequest} message QueryJoinedGroupsIdsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryJoinedGroupsIdsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryJoinedGroupsIdsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryJoinedGroupsIdsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryJoinedGroupsIdsRequest} QueryJoinedGroupsIdsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryJoinedGroupsIdsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryJoinedGroupsIdsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryJoinedGroupsIdsRequest;
            })();

            proto.QueryJoinedGroupsInfosRequest = (function() {

                /**
                 * Properties of a QueryJoinedGroupsInfosRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryJoinedGroupsInfosRequest
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryJoinedGroupsInfosRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryJoinedGroupsInfosRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryJoinedGroupsInfosRequest.
                 * @implements IQueryJoinedGroupsInfosRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryJoinedGroupsInfosRequest=} [properties] Properties to set
                 */
                function QueryJoinedGroupsInfosRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryJoinedGroupsInfosRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryJoinedGroupsInfosRequest
                 * @instance
                 */
                QueryJoinedGroupsInfosRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryJoinedGroupsInfosRequest message. Does not implicitly {@link im.turms.proto.QueryJoinedGroupsInfosRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryJoinedGroupsInfosRequest
                 * @static
                 * @param {im.turms.proto.IQueryJoinedGroupsInfosRequest} message QueryJoinedGroupsInfosRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryJoinedGroupsInfosRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryJoinedGroupsInfosRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryJoinedGroupsInfosRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryJoinedGroupsInfosRequest} QueryJoinedGroupsInfosRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryJoinedGroupsInfosRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryJoinedGroupsInfosRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryJoinedGroupsInfosRequest;
            })();

            proto.UpdateGroupRequest = (function() {

                /**
                 * Properties of an UpdateGroupRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateGroupRequest
                 * @property {number|null} [groupId] UpdateGroupRequest groupId
                 * @property {google.protobuf.IStringValue|null} [groupName] UpdateGroupRequest groupName
                 * @property {google.protobuf.IStringValue|null} [intro] UpdateGroupRequest intro
                 * @property {google.protobuf.IStringValue|null} [announcement] UpdateGroupRequest announcement
                 * @property {google.protobuf.IStringValue|null} [profilePictureUrl] UpdateGroupRequest profilePictureUrl
                 * @property {google.protobuf.IInt64Value|null} [groupTypeId] UpdateGroupRequest groupTypeId
                 * @property {google.protobuf.IInt64Value|null} [muteEndDate] UpdateGroupRequest muteEndDate
                 * @property {google.protobuf.IInt64Value|null} [successorId] UpdateGroupRequest successorId
                 * @property {google.protobuf.IBoolValue|null} [quitAfterTransfer] UpdateGroupRequest quitAfterTransfer
                 */

                /**
                 * Constructs a new UpdateGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateGroupRequest.
                 * @implements IUpdateGroupRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateGroupRequest=} [properties] Properties to set
                 */
                function UpdateGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateGroupRequest groupId.
                 * @member {number} groupId
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateGroupRequest groupName.
                 * @member {google.protobuf.IStringValue|null|undefined} groupName
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.groupName = null;

                /**
                 * UpdateGroupRequest intro.
                 * @member {google.protobuf.IStringValue|null|undefined} intro
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.intro = null;

                /**
                 * UpdateGroupRequest announcement.
                 * @member {google.protobuf.IStringValue|null|undefined} announcement
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.announcement = null;

                /**
                 * UpdateGroupRequest profilePictureUrl.
                 * @member {google.protobuf.IStringValue|null|undefined} profilePictureUrl
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.profilePictureUrl = null;

                /**
                 * UpdateGroupRequest groupTypeId.
                 * @member {google.protobuf.IInt64Value|null|undefined} groupTypeId
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.groupTypeId = null;

                /**
                 * UpdateGroupRequest muteEndDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} muteEndDate
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.muteEndDate = null;

                /**
                 * UpdateGroupRequest successorId.
                 * @member {google.protobuf.IInt64Value|null|undefined} successorId
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.successorId = null;

                /**
                 * UpdateGroupRequest quitAfterTransfer.
                 * @member {google.protobuf.IBoolValue|null|undefined} quitAfterTransfer
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @instance
                 */
                UpdateGroupRequest.prototype.quitAfterTransfer = null;

                /**
                 * Encodes the specified UpdateGroupRequest message. Does not implicitly {@link im.turms.proto.UpdateGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @static
                 * @param {im.turms.proto.IUpdateGroupRequest} message UpdateGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
                    if (message.groupName != null && message.hasOwnProperty("groupName"))
                        $root.google.protobuf.StringValue.encode(message.groupName, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.intro != null && message.hasOwnProperty("intro"))
                        $root.google.protobuf.StringValue.encode(message.intro, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.announcement != null && message.hasOwnProperty("announcement"))
                        $root.google.protobuf.StringValue.encode(message.announcement, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.profilePictureUrl != null && message.hasOwnProperty("profilePictureUrl"))
                        $root.google.protobuf.StringValue.encode(message.profilePictureUrl, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.groupTypeId != null && message.hasOwnProperty("groupTypeId"))
                        $root.google.protobuf.Int64Value.encode(message.groupTypeId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.muteEndDate != null && message.hasOwnProperty("muteEndDate"))
                        $root.google.protobuf.Int64Value.encode(message.muteEndDate, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.successorId != null && message.hasOwnProperty("successorId"))
                        $root.google.protobuf.Int64Value.encode(message.successorId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.quitAfterTransfer != null && message.hasOwnProperty("quitAfterTransfer"))
                        $root.google.protobuf.BoolValue.encode(message.quitAfterTransfer, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UpdateGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateGroupRequest} UpdateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupId = reader.int64();
                            break;
                        case 2:
                            message.groupName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.intro = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.announcement = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.profilePictureUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.groupTypeId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.muteEndDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.successorId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.quitAfterTransfer = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateGroupRequest;
            })();

            proto.CreateMessageRequest = (function() {

                /**
                 * Properties of a CreateMessageRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateMessageRequest
                 * @property {im.turms.proto.ChatType|null} [chatType] CreateMessageRequest chatType
                 * @property {number|null} [toId] CreateMessageRequest toId
                 * @property {number|null} [deliveryDate] CreateMessageRequest deliveryDate
                 * @property {string|null} [text] CreateMessageRequest text
                 * @property {Array.<Uint8Array>|null} [records] CreateMessageRequest records
                 * @property {google.protobuf.IInt32Value|null} [burnAfter] CreateMessageRequest burnAfter
                 */

                /**
                 * Constructs a new CreateMessageRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateMessageRequest.
                 * @implements ICreateMessageRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateMessageRequest=} [properties] Properties to set
                 */
                function CreateMessageRequest(properties) {
                    this.records = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateMessageRequest chatType.
                 * @member {im.turms.proto.ChatType} chatType
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @instance
                 */
                CreateMessageRequest.prototype.chatType = 0;

                /**
                 * CreateMessageRequest toId.
                 * @member {number} toId
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @instance
                 */
                CreateMessageRequest.prototype.toId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateMessageRequest deliveryDate.
                 * @member {number} deliveryDate
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @instance
                 */
                CreateMessageRequest.prototype.deliveryDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateMessageRequest text.
                 * @member {string} text
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @instance
                 */
                CreateMessageRequest.prototype.text = "";

                /**
                 * CreateMessageRequest records.
                 * @member {Array.<Uint8Array>} records
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @instance
                 */
                CreateMessageRequest.prototype.records = $util.emptyArray;

                /**
                 * CreateMessageRequest burnAfter.
                 * @member {google.protobuf.IInt32Value|null|undefined} burnAfter
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @instance
                 */
                CreateMessageRequest.prototype.burnAfter = null;

                /**
                 * Encodes the specified CreateMessageRequest message. Does not implicitly {@link im.turms.proto.CreateMessageRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @static
                 * @param {im.turms.proto.ICreateMessageRequest} message CreateMessageRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateMessageRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
                    if (message.toId != null && message.hasOwnProperty("toId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.toId);
                    if (message.deliveryDate != null && message.hasOwnProperty("deliveryDate"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.deliveryDate);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.text);
                    if (message.records != null && message.records.length)
                        for (var i = 0; i < message.records.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.records[i]);
                    if (message.burnAfter != null && message.hasOwnProperty("burnAfter"))
                        $root.google.protobuf.Int32Value.encode(message.burnAfter, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a CreateMessageRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateMessageRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateMessageRequest} CreateMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateMessageRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chatType = reader.int32();
                            break;
                        case 2:
                            message.toId = reader.int64();
                            break;
                        case 3:
                            message.deliveryDate = reader.int64();
                            break;
                        case 4:
                            message.text = reader.string();
                            break;
                        case 5:
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push(reader.bytes());
                            break;
                        case 6:
                            message.burnAfter = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateMessageRequest;
            })();

            proto.QueryMessageStatusesRequest = (function() {

                /**
                 * Properties of a QueryMessageStatusesRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryMessageStatusesRequest
                 * @property {number|null} [messageId] QueryMessageStatusesRequest messageId
                 */

                /**
                 * Constructs a new QueryMessageStatusesRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryMessageStatusesRequest.
                 * @implements IQueryMessageStatusesRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryMessageStatusesRequest=} [properties] Properties to set
                 */
                function QueryMessageStatusesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryMessageStatusesRequest messageId.
                 * @member {number} messageId
                 * @memberof im.turms.proto.QueryMessageStatusesRequest
                 * @instance
                 */
                QueryMessageStatusesRequest.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified QueryMessageStatusesRequest message. Does not implicitly {@link im.turms.proto.QueryMessageStatusesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryMessageStatusesRequest
                 * @static
                 * @param {im.turms.proto.IQueryMessageStatusesRequest} message QueryMessageStatusesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryMessageStatusesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.messageId);
                    return writer;
                };

                /**
                 * Decodes a QueryMessageStatusesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryMessageStatusesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryMessageStatusesRequest} QueryMessageStatusesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryMessageStatusesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryMessageStatusesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryMessageStatusesRequest;
            })();

            proto.QueryMessagesRequest = (function() {

                /**
                 * Properties of a QueryMessagesRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryMessagesRequest
                 * @property {google.protobuf.IInt32Value|null} [size] QueryMessagesRequest size
                 * @property {im.turms.proto.ChatType|null} [chatType] QueryMessagesRequest chatType
                 * @property {google.protobuf.IInt64Value|null} [fromId] QueryMessagesRequest fromId
                 * @property {google.protobuf.IInt64Value|null} [deliveryDateAfter] QueryMessagesRequest deliveryDateAfter
                 * @property {google.protobuf.IInt64Value|null} [deliveryDateBefore] QueryMessagesRequest deliveryDateBefore
                 * @property {im.turms.proto.MessageDeliveryStatus|null} [deliveryStatus] QueryMessagesRequest deliveryStatus
                 */

                /**
                 * Constructs a new QueryMessagesRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryMessagesRequest.
                 * @implements IQueryMessagesRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryMessagesRequest=} [properties] Properties to set
                 */
                function QueryMessagesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryMessagesRequest size.
                 * @member {google.protobuf.IInt32Value|null|undefined} size
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @instance
                 */
                QueryMessagesRequest.prototype.size = null;

                /**
                 * QueryMessagesRequest chatType.
                 * @member {im.turms.proto.ChatType} chatType
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @instance
                 */
                QueryMessagesRequest.prototype.chatType = 0;

                /**
                 * QueryMessagesRequest fromId.
                 * @member {google.protobuf.IInt64Value|null|undefined} fromId
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @instance
                 */
                QueryMessagesRequest.prototype.fromId = null;

                /**
                 * QueryMessagesRequest deliveryDateAfter.
                 * @member {google.protobuf.IInt64Value|null|undefined} deliveryDateAfter
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @instance
                 */
                QueryMessagesRequest.prototype.deliveryDateAfter = null;

                /**
                 * QueryMessagesRequest deliveryDateBefore.
                 * @member {google.protobuf.IInt64Value|null|undefined} deliveryDateBefore
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @instance
                 */
                QueryMessagesRequest.prototype.deliveryDateBefore = null;

                /**
                 * QueryMessagesRequest deliveryStatus.
                 * @member {im.turms.proto.MessageDeliveryStatus} deliveryStatus
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @instance
                 */
                QueryMessagesRequest.prototype.deliveryStatus = 0;

                /**
                 * Encodes the specified QueryMessagesRequest message. Does not implicitly {@link im.turms.proto.QueryMessagesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @static
                 * @param {im.turms.proto.IQueryMessagesRequest} message QueryMessagesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryMessagesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.size != null && message.hasOwnProperty("size"))
                        $root.google.protobuf.Int32Value.encode(message.size, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chatType);
                    if (message.fromId != null && message.hasOwnProperty("fromId"))
                        $root.google.protobuf.Int64Value.encode(message.fromId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.deliveryDateAfter != null && message.hasOwnProperty("deliveryDateAfter"))
                        $root.google.protobuf.Int64Value.encode(message.deliveryDateAfter, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.deliveryDateBefore != null && message.hasOwnProperty("deliveryDateBefore"))
                        $root.google.protobuf.Int64Value.encode(message.deliveryDateBefore, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.deliveryStatus != null && message.hasOwnProperty("deliveryStatus"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.deliveryStatus);
                    return writer;
                };

                /**
                 * Decodes a QueryMessagesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryMessagesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryMessagesRequest} QueryMessagesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryMessagesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryMessagesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.size = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.chatType = reader.int32();
                            break;
                        case 3:
                            message.fromId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.deliveryDateAfter = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.deliveryDateBefore = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.deliveryStatus = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryMessagesRequest;
            })();

            proto.QueryPendingMessagesWithTotalRequest = (function() {

                /**
                 * Properties of a QueryPendingMessagesWithTotalRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryPendingMessagesWithTotalRequest
                 * @property {google.protobuf.IInt32Value|null} [size] QueryPendingMessagesWithTotalRequest size
                 */

                /**
                 * Constructs a new QueryPendingMessagesWithTotalRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryPendingMessagesWithTotalRequest.
                 * @implements IQueryPendingMessagesWithTotalRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryPendingMessagesWithTotalRequest=} [properties] Properties to set
                 */
                function QueryPendingMessagesWithTotalRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryPendingMessagesWithTotalRequest size.
                 * @member {google.protobuf.IInt32Value|null|undefined} size
                 * @memberof im.turms.proto.QueryPendingMessagesWithTotalRequest
                 * @instance
                 */
                QueryPendingMessagesWithTotalRequest.prototype.size = null;

                /**
                 * Encodes the specified QueryPendingMessagesWithTotalRequest message. Does not implicitly {@link im.turms.proto.QueryPendingMessagesWithTotalRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryPendingMessagesWithTotalRequest
                 * @static
                 * @param {im.turms.proto.IQueryPendingMessagesWithTotalRequest} message QueryPendingMessagesWithTotalRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryPendingMessagesWithTotalRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.size != null && message.hasOwnProperty("size"))
                        $root.google.protobuf.Int32Value.encode(message.size, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryPendingMessagesWithTotalRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryPendingMessagesWithTotalRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryPendingMessagesWithTotalRequest} QueryPendingMessagesWithTotalRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryPendingMessagesWithTotalRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryPendingMessagesWithTotalRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.size = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryPendingMessagesWithTotalRequest;
            })();

            proto.UpdateMessageRequest = (function() {

                /**
                 * Properties of an UpdateMessageRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateMessageRequest
                 * @property {number|null} [messageId] UpdateMessageRequest messageId
                 * @property {google.protobuf.IStringValue|null} [text] UpdateMessageRequest text
                 * @property {Array.<Uint8Array>|null} [records] UpdateMessageRequest records
                 * @property {google.protobuf.IInt64Value|null} [recallDate] UpdateMessageRequest recallDate
                 * @property {google.protobuf.IInt64Value|null} [readDate] UpdateMessageRequest readDate
                 */

                /**
                 * Constructs a new UpdateMessageRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateMessageRequest.
                 * @implements IUpdateMessageRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateMessageRequest=} [properties] Properties to set
                 */
                function UpdateMessageRequest(properties) {
                    this.records = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateMessageRequest messageId.
                 * @member {number} messageId
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @instance
                 */
                UpdateMessageRequest.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateMessageRequest text.
                 * @member {google.protobuf.IStringValue|null|undefined} text
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @instance
                 */
                UpdateMessageRequest.prototype.text = null;

                /**
                 * UpdateMessageRequest records.
                 * @member {Array.<Uint8Array>} records
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @instance
                 */
                UpdateMessageRequest.prototype.records = $util.emptyArray;

                /**
                 * UpdateMessageRequest recallDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} recallDate
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @instance
                 */
                UpdateMessageRequest.prototype.recallDate = null;

                /**
                 * UpdateMessageRequest readDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} readDate
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @instance
                 */
                UpdateMessageRequest.prototype.readDate = null;

                /**
                 * Encodes the specified UpdateMessageRequest message. Does not implicitly {@link im.turms.proto.UpdateMessageRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @static
                 * @param {im.turms.proto.IUpdateMessageRequest} message UpdateMessageRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateMessageRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.messageId);
                    if (message.text != null && message.hasOwnProperty("text"))
                        $root.google.protobuf.StringValue.encode(message.text, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.records != null && message.records.length)
                        for (var i = 0; i < message.records.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.records[i]);
                    if (message.recallDate != null && message.hasOwnProperty("recallDate"))
                        $root.google.protobuf.Int64Value.encode(message.recallDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.readDate != null && message.hasOwnProperty("readDate"))
                        $root.google.protobuf.Int64Value.encode(message.readDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UpdateMessageRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateMessageRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateMessageRequest} UpdateMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateMessageRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageId = reader.int64();
                            break;
                        case 2:
                            message.text = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push(reader.bytes());
                            break;
                        case 4:
                            message.recallDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.readDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateMessageRequest;
            })();

            proto.UpdateTypingStatusRequest = (function() {

                /**
                 * Properties of an UpdateTypingStatusRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateTypingStatusRequest
                 * @property {im.turms.proto.ChatType|null} [chatType] UpdateTypingStatusRequest chatType
                 * @property {number|null} [toId] UpdateTypingStatusRequest toId
                 */

                /**
                 * Constructs a new UpdateTypingStatusRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateTypingStatusRequest.
                 * @implements IUpdateTypingStatusRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateTypingStatusRequest=} [properties] Properties to set
                 */
                function UpdateTypingStatusRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateTypingStatusRequest chatType.
                 * @member {im.turms.proto.ChatType} chatType
                 * @memberof im.turms.proto.UpdateTypingStatusRequest
                 * @instance
                 */
                UpdateTypingStatusRequest.prototype.chatType = 0;

                /**
                 * UpdateTypingStatusRequest toId.
                 * @member {number} toId
                 * @memberof im.turms.proto.UpdateTypingStatusRequest
                 * @instance
                 */
                UpdateTypingStatusRequest.prototype.toId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified UpdateTypingStatusRequest message. Does not implicitly {@link im.turms.proto.UpdateTypingStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateTypingStatusRequest
                 * @static
                 * @param {im.turms.proto.IUpdateTypingStatusRequest} message UpdateTypingStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateTypingStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
                    if (message.toId != null && message.hasOwnProperty("toId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.toId);
                    return writer;
                };

                /**
                 * Decodes an UpdateTypingStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateTypingStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateTypingStatusRequest} UpdateTypingStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateTypingStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateTypingStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chatType = reader.int32();
                            break;
                        case 2:
                            message.toId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateTypingStatusRequest;
            })();

            proto.AckRequest = (function() {

                /**
                 * Properties of an AckRequest.
                 * @memberof im.turms.proto
                 * @interface IAckRequest
                 * @property {Array.<number>|null} [messagesIds] AckRequest messagesIds
                 */

                /**
                 * Constructs a new AckRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an AckRequest.
                 * @implements IAckRequest
                 * @constructor
                 * @param {im.turms.proto.IAckRequest=} [properties] Properties to set
                 */
                function AckRequest(properties) {
                    this.messagesIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AckRequest messagesIds.
                 * @member {Array.<number>} messagesIds
                 * @memberof im.turms.proto.AckRequest
                 * @instance
                 */
                AckRequest.prototype.messagesIds = $util.emptyArray;

                /**
                 * Encodes the specified AckRequest message. Does not implicitly {@link im.turms.proto.AckRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.AckRequest
                 * @static
                 * @param {im.turms.proto.IAckRequest} message AckRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AckRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messagesIds != null && message.messagesIds.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.messagesIds.length; ++i)
                            writer.int64(message.messagesIds[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Decodes an AckRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.AckRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.AckRequest} AckRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AckRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.AckRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messagesIds && message.messagesIds.length))
                                message.messagesIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.messagesIds.push(reader.int64());
                            } else
                                message.messagesIds.push(reader.int64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return AckRequest;
            })();

            proto.TurmsRequest = (function() {

                /**
                 * Properties of a TurmsRequest.
                 * @memberof im.turms.proto
                 * @interface ITurmsRequest
                 * @property {google.protobuf.IInt64Value|null} [requestId] TurmsRequest requestId
                 * @property {google.protobuf.IInt64Value|null} [requesterId] TurmsRequest requesterId
                 * @property {im.turms.proto.IAckRequest|null} [ackRequest] TurmsRequest ackRequest
                 * @property {im.turms.proto.ICreateMessageRequest|null} [createMessageRequest] TurmsRequest createMessageRequest
                 * @property {im.turms.proto.IQueryMessageStatusesRequest|null} [queryMessageStatusesRequest] TurmsRequest queryMessageStatusesRequest
                 * @property {im.turms.proto.IQueryMessagesRequest|null} [queryMessagesRequest] TurmsRequest queryMessagesRequest
                 * @property {im.turms.proto.IQueryPendingMessagesWithTotalRequest|null} [queryPendingMessagesWithTotalRequest] TurmsRequest queryPendingMessagesWithTotalRequest
                 * @property {im.turms.proto.IUpdateMessageRequest|null} [updateMessageRequest] TurmsRequest updateMessageRequest
                 * @property {im.turms.proto.IUpdateTypingStatusRequest|null} [updateTypingStatusRequest] TurmsRequest updateTypingStatusRequest
                 * @property {im.turms.proto.IQueryUserGroupInvitationsRequest|null} [queryUserGroupInvitationsRequest] TurmsRequest queryUserGroupInvitationsRequest
                 * @property {im.turms.proto.IQueryUserProfileRequest|null} [queryUserProfileRequest] TurmsRequest queryUserProfileRequest
                 * @property {im.turms.proto.IQueryUsersIdsNearbyRequest|null} [queryUsersIdsNearbyRequest] TurmsRequest queryUsersIdsNearbyRequest
                 * @property {im.turms.proto.IQueryUsersInfosNearbyRequest|null} [queryUsersInfosNearbyRequest] TurmsRequest queryUsersInfosNearbyRequest
                 * @property {im.turms.proto.IQueryUsersOnlineStatusRequest|null} [queryUsersOnlineStatusRequest] TurmsRequest queryUsersOnlineStatusRequest
                 * @property {im.turms.proto.IUpdateUserLocationRequest|null} [updateUserLocationRequest] TurmsRequest updateUserLocationRequest
                 * @property {im.turms.proto.IUpdateUserOnlineStatusRequest|null} [updateUserOnlineStatusRequest] TurmsRequest updateUserOnlineStatusRequest
                 * @property {im.turms.proto.IUpdateUserRequest|null} [updateUserRequest] TurmsRequest updateUserRequest
                 * @property {im.turms.proto.ICreateFriendRequestRequest|null} [createFriendRequestRequest] TurmsRequest createFriendRequestRequest
                 * @property {im.turms.proto.ICreateRelationshipGroupRequest|null} [createRelationshipGroupRequest] TurmsRequest createRelationshipGroupRequest
                 * @property {im.turms.proto.ICreateRelationshipRequest|null} [createRelationshipRequest] TurmsRequest createRelationshipRequest
                 * @property {im.turms.proto.IDeleteRelationshipGroupRequest|null} [deleteRelationshipGroupRequest] TurmsRequest deleteRelationshipGroupRequest
                 * @property {im.turms.proto.IDeleteRelationshipRequest|null} [deleteRelationshipRequest] TurmsRequest deleteRelationshipRequest
                 * @property {im.turms.proto.IQueryFriendRequestsRequest|null} [queryFriendRequestsRequest] TurmsRequest queryFriendRequestsRequest
                 * @property {im.turms.proto.IQueryRelatedUsersIdsRequest|null} [queryRelatedUsersIdsRequest] TurmsRequest queryRelatedUsersIdsRequest
                 * @property {im.turms.proto.IQueryRelationshipGroupsRequest|null} [queryRelationshipGroupsRequest] TurmsRequest queryRelationshipGroupsRequest
                 * @property {im.turms.proto.IQueryRelationshipsRequest|null} [queryRelationshipsRequest] TurmsRequest queryRelationshipsRequest
                 * @property {im.turms.proto.IUpdateFriendRequestRequest|null} [updateFriendRequestRequest] TurmsRequest updateFriendRequestRequest
                 * @property {im.turms.proto.IUpdateRelationshipGroupRequest|null} [updateRelationshipGroupRequest] TurmsRequest updateRelationshipGroupRequest
                 * @property {im.turms.proto.IUpdateRelationshipRequest|null} [updateRelationshipRequest] TurmsRequest updateRelationshipRequest
                 * @property {im.turms.proto.ICreateGroupRequest|null} [createGroupRequest] TurmsRequest createGroupRequest
                 * @property {im.turms.proto.IDeleteGroupRequest|null} [deleteGroupRequest] TurmsRequest deleteGroupRequest
                 * @property {im.turms.proto.IQueryGroupRequest|null} [queryGroupRequest] TurmsRequest queryGroupRequest
                 * @property {im.turms.proto.IQueryJoinedGroupsIdsRequest|null} [queryJoinedGroupsIdsRequest] TurmsRequest queryJoinedGroupsIdsRequest
                 * @property {im.turms.proto.IQueryJoinedGroupsInfosRequest|null} [queryJoinedGroupsInfosRequest] TurmsRequest queryJoinedGroupsInfosRequest
                 * @property {im.turms.proto.IUpdateGroupRequest|null} [updateGroupRequest] TurmsRequest updateGroupRequest
                 * @property {im.turms.proto.ICreateGroupBlacklistedUserRequest|null} [createGroupBlacklistedUserRequest] TurmsRequest createGroupBlacklistedUserRequest
                 * @property {im.turms.proto.IDeleteGroupBlacklistedUserRequest|null} [deleteGroupBlacklistedUserRequest] TurmsRequest deleteGroupBlacklistedUserRequest
                 * @property {im.turms.proto.IQueryGroupBlacklistedUsersIdsRequest|null} [queryGroupBlacklistedUsersIdsRequest] TurmsRequest queryGroupBlacklistedUsersIdsRequest
                 * @property {im.turms.proto.IQueryGroupBlacklistedUsersInfosRequest|null} [queryGroupBlacklistedUsersInfosRequest] TurmsRequest queryGroupBlacklistedUsersInfosRequest
                 * @property {im.turms.proto.ICheckGroupJoinQuestionAnswerRequest|null} [checkGroupJoinQuestionAnswerRequest] TurmsRequest checkGroupJoinQuestionAnswerRequest
                 * @property {im.turms.proto.ICreateGroupInvitationRequest|null} [createGroupInvitationRequest] TurmsRequest createGroupInvitationRequest
                 * @property {im.turms.proto.ICreateGroupJoinRequestRequest|null} [createGroupJoinRequestRequest] TurmsRequest createGroupJoinRequestRequest
                 * @property {im.turms.proto.ICreateGroupJoinQuestionRequest|null} [createGroupJoinQuestionRequest] TurmsRequest createGroupJoinQuestionRequest
                 * @property {im.turms.proto.IDeleteGroupInvitationRequest|null} [deleteGroupInvitationRequest] TurmsRequest deleteGroupInvitationRequest
                 * @property {im.turms.proto.IDeleteGroupJoinRequestRequest|null} [deleteGroupJoinRequestRequest] TurmsRequest deleteGroupJoinRequestRequest
                 * @property {im.turms.proto.IDeleteGroupJoinQuestionRequest|null} [deleteGroupJoinQuestionRequest] TurmsRequest deleteGroupJoinQuestionRequest
                 * @property {im.turms.proto.IQueryGroupInvitationsRequest|null} [queryGroupInvitationsRequest] TurmsRequest queryGroupInvitationsRequest
                 * @property {im.turms.proto.IQueryGroupJoinRequestsRequest|null} [queryGroupJoinRequestsRequest] TurmsRequest queryGroupJoinRequestsRequest
                 * @property {im.turms.proto.IQueryGroupJoinQuestionsRequest|null} [queryGroupJoinQuestionsRequest] TurmsRequest queryGroupJoinQuestionsRequest
                 * @property {im.turms.proto.IUpdateGroupJoinQuestionRequest|null} [updateGroupJoinQuestionRequest] TurmsRequest updateGroupJoinQuestionRequest
                 * @property {im.turms.proto.ICreateGroupMemberRequest|null} [createGroupMemberRequest] TurmsRequest createGroupMemberRequest
                 * @property {im.turms.proto.IDeleteGroupMemberRequest|null} [deleteGroupMemberRequest] TurmsRequest deleteGroupMemberRequest
                 * @property {im.turms.proto.IQueryGroupMembersRequest|null} [queryGroupMembersRequest] TurmsRequest queryGroupMembersRequest
                 * @property {im.turms.proto.IUpdateGroupMemberRequest|null} [updateGroupMemberRequest] TurmsRequest updateGroupMemberRequest
                 */

                /**
                 * Constructs a new TurmsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a TurmsRequest.
                 * @implements ITurmsRequest
                 * @constructor
                 * @param {im.turms.proto.ITurmsRequest=} [properties] Properties to set
                 */
                function TurmsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TurmsRequest requestId.
                 * @member {google.protobuf.IInt64Value|null|undefined} requestId
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.requestId = null;

                /**
                 * TurmsRequest requesterId.
                 * @member {google.protobuf.IInt64Value|null|undefined} requesterId
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.requesterId = null;

                /**
                 * TurmsRequest ackRequest.
                 * @member {im.turms.proto.IAckRequest|null|undefined} ackRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.ackRequest = null;

                /**
                 * TurmsRequest createMessageRequest.
                 * @member {im.turms.proto.ICreateMessageRequest|null|undefined} createMessageRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createMessageRequest = null;

                /**
                 * TurmsRequest queryMessageStatusesRequest.
                 * @member {im.turms.proto.IQueryMessageStatusesRequest|null|undefined} queryMessageStatusesRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryMessageStatusesRequest = null;

                /**
                 * TurmsRequest queryMessagesRequest.
                 * @member {im.turms.proto.IQueryMessagesRequest|null|undefined} queryMessagesRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryMessagesRequest = null;

                /**
                 * TurmsRequest queryPendingMessagesWithTotalRequest.
                 * @member {im.turms.proto.IQueryPendingMessagesWithTotalRequest|null|undefined} queryPendingMessagesWithTotalRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryPendingMessagesWithTotalRequest = null;

                /**
                 * TurmsRequest updateMessageRequest.
                 * @member {im.turms.proto.IUpdateMessageRequest|null|undefined} updateMessageRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateMessageRequest = null;

                /**
                 * TurmsRequest updateTypingStatusRequest.
                 * @member {im.turms.proto.IUpdateTypingStatusRequest|null|undefined} updateTypingStatusRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateTypingStatusRequest = null;

                /**
                 * TurmsRequest queryUserGroupInvitationsRequest.
                 * @member {im.turms.proto.IQueryUserGroupInvitationsRequest|null|undefined} queryUserGroupInvitationsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryUserGroupInvitationsRequest = null;

                /**
                 * TurmsRequest queryUserProfileRequest.
                 * @member {im.turms.proto.IQueryUserProfileRequest|null|undefined} queryUserProfileRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryUserProfileRequest = null;

                /**
                 * TurmsRequest queryUsersIdsNearbyRequest.
                 * @member {im.turms.proto.IQueryUsersIdsNearbyRequest|null|undefined} queryUsersIdsNearbyRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryUsersIdsNearbyRequest = null;

                /**
                 * TurmsRequest queryUsersInfosNearbyRequest.
                 * @member {im.turms.proto.IQueryUsersInfosNearbyRequest|null|undefined} queryUsersInfosNearbyRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryUsersInfosNearbyRequest = null;

                /**
                 * TurmsRequest queryUsersOnlineStatusRequest.
                 * @member {im.turms.proto.IQueryUsersOnlineStatusRequest|null|undefined} queryUsersOnlineStatusRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryUsersOnlineStatusRequest = null;

                /**
                 * TurmsRequest updateUserLocationRequest.
                 * @member {im.turms.proto.IUpdateUserLocationRequest|null|undefined} updateUserLocationRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateUserLocationRequest = null;

                /**
                 * TurmsRequest updateUserOnlineStatusRequest.
                 * @member {im.turms.proto.IUpdateUserOnlineStatusRequest|null|undefined} updateUserOnlineStatusRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateUserOnlineStatusRequest = null;

                /**
                 * TurmsRequest updateUserRequest.
                 * @member {im.turms.proto.IUpdateUserRequest|null|undefined} updateUserRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateUserRequest = null;

                /**
                 * TurmsRequest createFriendRequestRequest.
                 * @member {im.turms.proto.ICreateFriendRequestRequest|null|undefined} createFriendRequestRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createFriendRequestRequest = null;

                /**
                 * TurmsRequest createRelationshipGroupRequest.
                 * @member {im.turms.proto.ICreateRelationshipGroupRequest|null|undefined} createRelationshipGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createRelationshipGroupRequest = null;

                /**
                 * TurmsRequest createRelationshipRequest.
                 * @member {im.turms.proto.ICreateRelationshipRequest|null|undefined} createRelationshipRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createRelationshipRequest = null;

                /**
                 * TurmsRequest deleteRelationshipGroupRequest.
                 * @member {im.turms.proto.IDeleteRelationshipGroupRequest|null|undefined} deleteRelationshipGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteRelationshipGroupRequest = null;

                /**
                 * TurmsRequest deleteRelationshipRequest.
                 * @member {im.turms.proto.IDeleteRelationshipRequest|null|undefined} deleteRelationshipRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteRelationshipRequest = null;

                /**
                 * TurmsRequest queryFriendRequestsRequest.
                 * @member {im.turms.proto.IQueryFriendRequestsRequest|null|undefined} queryFriendRequestsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryFriendRequestsRequest = null;

                /**
                 * TurmsRequest queryRelatedUsersIdsRequest.
                 * @member {im.turms.proto.IQueryRelatedUsersIdsRequest|null|undefined} queryRelatedUsersIdsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryRelatedUsersIdsRequest = null;

                /**
                 * TurmsRequest queryRelationshipGroupsRequest.
                 * @member {im.turms.proto.IQueryRelationshipGroupsRequest|null|undefined} queryRelationshipGroupsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryRelationshipGroupsRequest = null;

                /**
                 * TurmsRequest queryRelationshipsRequest.
                 * @member {im.turms.proto.IQueryRelationshipsRequest|null|undefined} queryRelationshipsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryRelationshipsRequest = null;

                /**
                 * TurmsRequest updateFriendRequestRequest.
                 * @member {im.turms.proto.IUpdateFriendRequestRequest|null|undefined} updateFriendRequestRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateFriendRequestRequest = null;

                /**
                 * TurmsRequest updateRelationshipGroupRequest.
                 * @member {im.turms.proto.IUpdateRelationshipGroupRequest|null|undefined} updateRelationshipGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateRelationshipGroupRequest = null;

                /**
                 * TurmsRequest updateRelationshipRequest.
                 * @member {im.turms.proto.IUpdateRelationshipRequest|null|undefined} updateRelationshipRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateRelationshipRequest = null;

                /**
                 * TurmsRequest createGroupRequest.
                 * @member {im.turms.proto.ICreateGroupRequest|null|undefined} createGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createGroupRequest = null;

                /**
                 * TurmsRequest deleteGroupRequest.
                 * @member {im.turms.proto.IDeleteGroupRequest|null|undefined} deleteGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteGroupRequest = null;

                /**
                 * TurmsRequest queryGroupRequest.
                 * @member {im.turms.proto.IQueryGroupRequest|null|undefined} queryGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupRequest = null;

                /**
                 * TurmsRequest queryJoinedGroupsIdsRequest.
                 * @member {im.turms.proto.IQueryJoinedGroupsIdsRequest|null|undefined} queryJoinedGroupsIdsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryJoinedGroupsIdsRequest = null;

                /**
                 * TurmsRequest queryJoinedGroupsInfosRequest.
                 * @member {im.turms.proto.IQueryJoinedGroupsInfosRequest|null|undefined} queryJoinedGroupsInfosRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryJoinedGroupsInfosRequest = null;

                /**
                 * TurmsRequest updateGroupRequest.
                 * @member {im.turms.proto.IUpdateGroupRequest|null|undefined} updateGroupRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateGroupRequest = null;

                /**
                 * TurmsRequest createGroupBlacklistedUserRequest.
                 * @member {im.turms.proto.ICreateGroupBlacklistedUserRequest|null|undefined} createGroupBlacklistedUserRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createGroupBlacklistedUserRequest = null;

                /**
                 * TurmsRequest deleteGroupBlacklistedUserRequest.
                 * @member {im.turms.proto.IDeleteGroupBlacklistedUserRequest|null|undefined} deleteGroupBlacklistedUserRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteGroupBlacklistedUserRequest = null;

                /**
                 * TurmsRequest queryGroupBlacklistedUsersIdsRequest.
                 * @member {im.turms.proto.IQueryGroupBlacklistedUsersIdsRequest|null|undefined} queryGroupBlacklistedUsersIdsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupBlacklistedUsersIdsRequest = null;

                /**
                 * TurmsRequest queryGroupBlacklistedUsersInfosRequest.
                 * @member {im.turms.proto.IQueryGroupBlacklistedUsersInfosRequest|null|undefined} queryGroupBlacklistedUsersInfosRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupBlacklistedUsersInfosRequest = null;

                /**
                 * TurmsRequest checkGroupJoinQuestionAnswerRequest.
                 * @member {im.turms.proto.ICheckGroupJoinQuestionAnswerRequest|null|undefined} checkGroupJoinQuestionAnswerRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.checkGroupJoinQuestionAnswerRequest = null;

                /**
                 * TurmsRequest createGroupInvitationRequest.
                 * @member {im.turms.proto.ICreateGroupInvitationRequest|null|undefined} createGroupInvitationRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createGroupInvitationRequest = null;

                /**
                 * TurmsRequest createGroupJoinRequestRequest.
                 * @member {im.turms.proto.ICreateGroupJoinRequestRequest|null|undefined} createGroupJoinRequestRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createGroupJoinRequestRequest = null;

                /**
                 * TurmsRequest createGroupJoinQuestionRequest.
                 * @member {im.turms.proto.ICreateGroupJoinQuestionRequest|null|undefined} createGroupJoinQuestionRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createGroupJoinQuestionRequest = null;

                /**
                 * TurmsRequest deleteGroupInvitationRequest.
                 * @member {im.turms.proto.IDeleteGroupInvitationRequest|null|undefined} deleteGroupInvitationRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteGroupInvitationRequest = null;

                /**
                 * TurmsRequest deleteGroupJoinRequestRequest.
                 * @member {im.turms.proto.IDeleteGroupJoinRequestRequest|null|undefined} deleteGroupJoinRequestRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteGroupJoinRequestRequest = null;

                /**
                 * TurmsRequest deleteGroupJoinQuestionRequest.
                 * @member {im.turms.proto.IDeleteGroupJoinQuestionRequest|null|undefined} deleteGroupJoinQuestionRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteGroupJoinQuestionRequest = null;

                /**
                 * TurmsRequest queryGroupInvitationsRequest.
                 * @member {im.turms.proto.IQueryGroupInvitationsRequest|null|undefined} queryGroupInvitationsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupInvitationsRequest = null;

                /**
                 * TurmsRequest queryGroupJoinRequestsRequest.
                 * @member {im.turms.proto.IQueryGroupJoinRequestsRequest|null|undefined} queryGroupJoinRequestsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupJoinRequestsRequest = null;

                /**
                 * TurmsRequest queryGroupJoinQuestionsRequest.
                 * @member {im.turms.proto.IQueryGroupJoinQuestionsRequest|null|undefined} queryGroupJoinQuestionsRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupJoinQuestionsRequest = null;

                /**
                 * TurmsRequest updateGroupJoinQuestionRequest.
                 * @member {im.turms.proto.IUpdateGroupJoinQuestionRequest|null|undefined} updateGroupJoinQuestionRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateGroupJoinQuestionRequest = null;

                /**
                 * TurmsRequest createGroupMemberRequest.
                 * @member {im.turms.proto.ICreateGroupMemberRequest|null|undefined} createGroupMemberRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.createGroupMemberRequest = null;

                /**
                 * TurmsRequest deleteGroupMemberRequest.
                 * @member {im.turms.proto.IDeleteGroupMemberRequest|null|undefined} deleteGroupMemberRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.deleteGroupMemberRequest = null;

                /**
                 * TurmsRequest queryGroupMembersRequest.
                 * @member {im.turms.proto.IQueryGroupMembersRequest|null|undefined} queryGroupMembersRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.queryGroupMembersRequest = null;

                /**
                 * TurmsRequest updateGroupMemberRequest.
                 * @member {im.turms.proto.IUpdateGroupMemberRequest|null|undefined} updateGroupMemberRequest
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                TurmsRequest.prototype.updateGroupMemberRequest = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * TurmsRequest kind.
                 * @member {"ackRequest"|"createMessageRequest"|"queryMessageStatusesRequest"|"queryMessagesRequest"|"queryPendingMessagesWithTotalRequest"|"updateMessageRequest"|"updateTypingStatusRequest"|"queryUserGroupInvitationsRequest"|"queryUserProfileRequest"|"queryUsersIdsNearbyRequest"|"queryUsersInfosNearbyRequest"|"queryUsersOnlineStatusRequest"|"updateUserLocationRequest"|"updateUserOnlineStatusRequest"|"updateUserRequest"|"createFriendRequestRequest"|"createRelationshipGroupRequest"|"createRelationshipRequest"|"deleteRelationshipGroupRequest"|"deleteRelationshipRequest"|"queryFriendRequestsRequest"|"queryRelatedUsersIdsRequest"|"queryRelationshipGroupsRequest"|"queryRelationshipsRequest"|"updateFriendRequestRequest"|"updateRelationshipGroupRequest"|"updateRelationshipRequest"|"createGroupRequest"|"deleteGroupRequest"|"queryGroupRequest"|"queryJoinedGroupsIdsRequest"|"queryJoinedGroupsInfosRequest"|"updateGroupRequest"|"createGroupBlacklistedUserRequest"|"deleteGroupBlacklistedUserRequest"|"queryGroupBlacklistedUsersIdsRequest"|"queryGroupBlacklistedUsersInfosRequest"|"checkGroupJoinQuestionAnswerRequest"|"createGroupInvitationRequest"|"createGroupJoinRequestRequest"|"createGroupJoinQuestionRequest"|"deleteGroupInvitationRequest"|"deleteGroupJoinRequestRequest"|"deleteGroupJoinQuestionRequest"|"queryGroupInvitationsRequest"|"queryGroupJoinRequestsRequest"|"queryGroupJoinQuestionsRequest"|"updateGroupJoinQuestionRequest"|"createGroupMemberRequest"|"deleteGroupMemberRequest"|"queryGroupMembersRequest"|"updateGroupMemberRequest"|undefined} kind
                 * @memberof im.turms.proto.TurmsRequest
                 * @instance
                 */
                Object.defineProperty(TurmsRequest.prototype, "kind", {
                    get: $util.oneOfGetter($oneOfFields = ["ackRequest", "createMessageRequest", "queryMessageStatusesRequest", "queryMessagesRequest", "queryPendingMessagesWithTotalRequest", "updateMessageRequest", "updateTypingStatusRequest", "queryUserGroupInvitationsRequest", "queryUserProfileRequest", "queryUsersIdsNearbyRequest", "queryUsersInfosNearbyRequest", "queryUsersOnlineStatusRequest", "updateUserLocationRequest", "updateUserOnlineStatusRequest", "updateUserRequest", "createFriendRequestRequest", "createRelationshipGroupRequest", "createRelationshipRequest", "deleteRelationshipGroupRequest", "deleteRelationshipRequest", "queryFriendRequestsRequest", "queryRelatedUsersIdsRequest", "queryRelationshipGroupsRequest", "queryRelationshipsRequest", "updateFriendRequestRequest", "updateRelationshipGroupRequest", "updateRelationshipRequest", "createGroupRequest", "deleteGroupRequest", "queryGroupRequest", "queryJoinedGroupsIdsRequest", "queryJoinedGroupsInfosRequest", "updateGroupRequest", "createGroupBlacklistedUserRequest", "deleteGroupBlacklistedUserRequest", "queryGroupBlacklistedUsersIdsRequest", "queryGroupBlacklistedUsersInfosRequest", "checkGroupJoinQuestionAnswerRequest", "createGroupInvitationRequest", "createGroupJoinRequestRequest", "createGroupJoinQuestionRequest", "deleteGroupInvitationRequest", "deleteGroupJoinRequestRequest", "deleteGroupJoinQuestionRequest", "queryGroupInvitationsRequest", "queryGroupJoinRequestsRequest", "queryGroupJoinQuestionsRequest", "updateGroupJoinQuestionRequest", "createGroupMemberRequest", "deleteGroupMemberRequest", "queryGroupMembersRequest", "updateGroupMemberRequest"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified TurmsRequest message. Does not implicitly {@link im.turms.proto.TurmsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.TurmsRequest
                 * @static
                 * @param {im.turms.proto.ITurmsRequest} message TurmsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TurmsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.requestId != null && message.hasOwnProperty("requestId"))
                        $root.google.protobuf.Int64Value.encode(message.requestId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.requesterId != null && message.hasOwnProperty("requesterId"))
                        $root.google.protobuf.Int64Value.encode(message.requesterId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.ackRequest != null && message.hasOwnProperty("ackRequest"))
                        $root.im.turms.proto.AckRequest.encode(message.ackRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.createMessageRequest != null && message.hasOwnProperty("createMessageRequest"))
                        $root.im.turms.proto.CreateMessageRequest.encode(message.createMessageRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.queryMessageStatusesRequest != null && message.hasOwnProperty("queryMessageStatusesRequest"))
                        $root.im.turms.proto.QueryMessageStatusesRequest.encode(message.queryMessageStatusesRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.queryMessagesRequest != null && message.hasOwnProperty("queryMessagesRequest"))
                        $root.im.turms.proto.QueryMessagesRequest.encode(message.queryMessagesRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.queryPendingMessagesWithTotalRequest != null && message.hasOwnProperty("queryPendingMessagesWithTotalRequest"))
                        $root.im.turms.proto.QueryPendingMessagesWithTotalRequest.encode(message.queryPendingMessagesWithTotalRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.updateMessageRequest != null && message.hasOwnProperty("updateMessageRequest"))
                        $root.im.turms.proto.UpdateMessageRequest.encode(message.updateMessageRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.updateTypingStatusRequest != null && message.hasOwnProperty("updateTypingStatusRequest"))
                        $root.im.turms.proto.UpdateTypingStatusRequest.encode(message.updateTypingStatusRequest, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.queryUserGroupInvitationsRequest != null && message.hasOwnProperty("queryUserGroupInvitationsRequest"))
                        $root.im.turms.proto.QueryUserGroupInvitationsRequest.encode(message.queryUserGroupInvitationsRequest, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                    if (message.queryUserProfileRequest != null && message.hasOwnProperty("queryUserProfileRequest"))
                        $root.im.turms.proto.QueryUserProfileRequest.encode(message.queryUserProfileRequest, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
                    if (message.queryUsersIdsNearbyRequest != null && message.hasOwnProperty("queryUsersIdsNearbyRequest"))
                        $root.im.turms.proto.QueryUsersIdsNearbyRequest.encode(message.queryUsersIdsNearbyRequest, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
                    if (message.queryUsersInfosNearbyRequest != null && message.hasOwnProperty("queryUsersInfosNearbyRequest"))
                        $root.im.turms.proto.QueryUsersInfosNearbyRequest.encode(message.queryUsersInfosNearbyRequest, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
                    if (message.queryUsersOnlineStatusRequest != null && message.hasOwnProperty("queryUsersOnlineStatusRequest"))
                        $root.im.turms.proto.QueryUsersOnlineStatusRequest.encode(message.queryUsersOnlineStatusRequest, writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
                    if (message.updateUserLocationRequest != null && message.hasOwnProperty("updateUserLocationRequest"))
                        $root.im.turms.proto.UpdateUserLocationRequest.encode(message.updateUserLocationRequest, writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
                    if (message.updateUserOnlineStatusRequest != null && message.hasOwnProperty("updateUserOnlineStatusRequest"))
                        $root.im.turms.proto.UpdateUserOnlineStatusRequest.encode(message.updateUserOnlineStatusRequest, writer.uint32(/* id 106, wireType 2 =*/850).fork()).ldelim();
                    if (message.updateUserRequest != null && message.hasOwnProperty("updateUserRequest"))
                        $root.im.turms.proto.UpdateUserRequest.encode(message.updateUserRequest, writer.uint32(/* id 107, wireType 2 =*/858).fork()).ldelim();
                    if (message.createFriendRequestRequest != null && message.hasOwnProperty("createFriendRequestRequest"))
                        $root.im.turms.proto.CreateFriendRequestRequest.encode(message.createFriendRequestRequest, writer.uint32(/* id 200, wireType 2 =*/1602).fork()).ldelim();
                    if (message.createRelationshipGroupRequest != null && message.hasOwnProperty("createRelationshipGroupRequest"))
                        $root.im.turms.proto.CreateRelationshipGroupRequest.encode(message.createRelationshipGroupRequest, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
                    if (message.createRelationshipRequest != null && message.hasOwnProperty("createRelationshipRequest"))
                        $root.im.turms.proto.CreateRelationshipRequest.encode(message.createRelationshipRequest, writer.uint32(/* id 202, wireType 2 =*/1618).fork()).ldelim();
                    if (message.deleteRelationshipGroupRequest != null && message.hasOwnProperty("deleteRelationshipGroupRequest"))
                        $root.im.turms.proto.DeleteRelationshipGroupRequest.encode(message.deleteRelationshipGroupRequest, writer.uint32(/* id 203, wireType 2 =*/1626).fork()).ldelim();
                    if (message.deleteRelationshipRequest != null && message.hasOwnProperty("deleteRelationshipRequest"))
                        $root.im.turms.proto.DeleteRelationshipRequest.encode(message.deleteRelationshipRequest, writer.uint32(/* id 204, wireType 2 =*/1634).fork()).ldelim();
                    if (message.queryFriendRequestsRequest != null && message.hasOwnProperty("queryFriendRequestsRequest"))
                        $root.im.turms.proto.QueryFriendRequestsRequest.encode(message.queryFriendRequestsRequest, writer.uint32(/* id 205, wireType 2 =*/1642).fork()).ldelim();
                    if (message.queryRelatedUsersIdsRequest != null && message.hasOwnProperty("queryRelatedUsersIdsRequest"))
                        $root.im.turms.proto.QueryRelatedUsersIdsRequest.encode(message.queryRelatedUsersIdsRequest, writer.uint32(/* id 206, wireType 2 =*/1650).fork()).ldelim();
                    if (message.queryRelationshipGroupsRequest != null && message.hasOwnProperty("queryRelationshipGroupsRequest"))
                        $root.im.turms.proto.QueryRelationshipGroupsRequest.encode(message.queryRelationshipGroupsRequest, writer.uint32(/* id 207, wireType 2 =*/1658).fork()).ldelim();
                    if (message.queryRelationshipsRequest != null && message.hasOwnProperty("queryRelationshipsRequest"))
                        $root.im.turms.proto.QueryRelationshipsRequest.encode(message.queryRelationshipsRequest, writer.uint32(/* id 208, wireType 2 =*/1666).fork()).ldelim();
                    if (message.updateFriendRequestRequest != null && message.hasOwnProperty("updateFriendRequestRequest"))
                        $root.im.turms.proto.UpdateFriendRequestRequest.encode(message.updateFriendRequestRequest, writer.uint32(/* id 209, wireType 2 =*/1674).fork()).ldelim();
                    if (message.updateRelationshipGroupRequest != null && message.hasOwnProperty("updateRelationshipGroupRequest"))
                        $root.im.turms.proto.UpdateRelationshipGroupRequest.encode(message.updateRelationshipGroupRequest, writer.uint32(/* id 210, wireType 2 =*/1682).fork()).ldelim();
                    if (message.updateRelationshipRequest != null && message.hasOwnProperty("updateRelationshipRequest"))
                        $root.im.turms.proto.UpdateRelationshipRequest.encode(message.updateRelationshipRequest, writer.uint32(/* id 211, wireType 2 =*/1690).fork()).ldelim();
                    if (message.createGroupRequest != null && message.hasOwnProperty("createGroupRequest"))
                        $root.im.turms.proto.CreateGroupRequest.encode(message.createGroupRequest, writer.uint32(/* id 300, wireType 2 =*/2402).fork()).ldelim();
                    if (message.deleteGroupRequest != null && message.hasOwnProperty("deleteGroupRequest"))
                        $root.im.turms.proto.DeleteGroupRequest.encode(message.deleteGroupRequest, writer.uint32(/* id 301, wireType 2 =*/2410).fork()).ldelim();
                    if (message.queryGroupRequest != null && message.hasOwnProperty("queryGroupRequest"))
                        $root.im.turms.proto.QueryGroupRequest.encode(message.queryGroupRequest, writer.uint32(/* id 302, wireType 2 =*/2418).fork()).ldelim();
                    if (message.queryJoinedGroupsIdsRequest != null && message.hasOwnProperty("queryJoinedGroupsIdsRequest"))
                        $root.im.turms.proto.QueryJoinedGroupsIdsRequest.encode(message.queryJoinedGroupsIdsRequest, writer.uint32(/* id 303, wireType 2 =*/2426).fork()).ldelim();
                    if (message.queryJoinedGroupsInfosRequest != null && message.hasOwnProperty("queryJoinedGroupsInfosRequest"))
                        $root.im.turms.proto.QueryJoinedGroupsInfosRequest.encode(message.queryJoinedGroupsInfosRequest, writer.uint32(/* id 304, wireType 2 =*/2434).fork()).ldelim();
                    if (message.updateGroupRequest != null && message.hasOwnProperty("updateGroupRequest"))
                        $root.im.turms.proto.UpdateGroupRequest.encode(message.updateGroupRequest, writer.uint32(/* id 305, wireType 2 =*/2442).fork()).ldelim();
                    if (message.createGroupBlacklistedUserRequest != null && message.hasOwnProperty("createGroupBlacklistedUserRequest"))
                        $root.im.turms.proto.CreateGroupBlacklistedUserRequest.encode(message.createGroupBlacklistedUserRequest, writer.uint32(/* id 400, wireType 2 =*/3202).fork()).ldelim();
                    if (message.deleteGroupBlacklistedUserRequest != null && message.hasOwnProperty("deleteGroupBlacklistedUserRequest"))
                        $root.im.turms.proto.DeleteGroupBlacklistedUserRequest.encode(message.deleteGroupBlacklistedUserRequest, writer.uint32(/* id 401, wireType 2 =*/3210).fork()).ldelim();
                    if (message.queryGroupBlacklistedUsersIdsRequest != null && message.hasOwnProperty("queryGroupBlacklistedUsersIdsRequest"))
                        $root.im.turms.proto.QueryGroupBlacklistedUsersIdsRequest.encode(message.queryGroupBlacklistedUsersIdsRequest, writer.uint32(/* id 402, wireType 2 =*/3218).fork()).ldelim();
                    if (message.queryGroupBlacklistedUsersInfosRequest != null && message.hasOwnProperty("queryGroupBlacklistedUsersInfosRequest"))
                        $root.im.turms.proto.QueryGroupBlacklistedUsersInfosRequest.encode(message.queryGroupBlacklistedUsersInfosRequest, writer.uint32(/* id 403, wireType 2 =*/3226).fork()).ldelim();
                    if (message.checkGroupJoinQuestionAnswerRequest != null && message.hasOwnProperty("checkGroupJoinQuestionAnswerRequest"))
                        $root.im.turms.proto.CheckGroupJoinQuestionAnswerRequest.encode(message.checkGroupJoinQuestionAnswerRequest, writer.uint32(/* id 500, wireType 2 =*/4002).fork()).ldelim();
                    if (message.createGroupInvitationRequest != null && message.hasOwnProperty("createGroupInvitationRequest"))
                        $root.im.turms.proto.CreateGroupInvitationRequest.encode(message.createGroupInvitationRequest, writer.uint32(/* id 501, wireType 2 =*/4010).fork()).ldelim();
                    if (message.createGroupJoinRequestRequest != null && message.hasOwnProperty("createGroupJoinRequestRequest"))
                        $root.im.turms.proto.CreateGroupJoinRequestRequest.encode(message.createGroupJoinRequestRequest, writer.uint32(/* id 502, wireType 2 =*/4018).fork()).ldelim();
                    if (message.createGroupJoinQuestionRequest != null && message.hasOwnProperty("createGroupJoinQuestionRequest"))
                        $root.im.turms.proto.CreateGroupJoinQuestionRequest.encode(message.createGroupJoinQuestionRequest, writer.uint32(/* id 503, wireType 2 =*/4026).fork()).ldelim();
                    if (message.deleteGroupInvitationRequest != null && message.hasOwnProperty("deleteGroupInvitationRequest"))
                        $root.im.turms.proto.DeleteGroupInvitationRequest.encode(message.deleteGroupInvitationRequest, writer.uint32(/* id 504, wireType 2 =*/4034).fork()).ldelim();
                    if (message.deleteGroupJoinRequestRequest != null && message.hasOwnProperty("deleteGroupJoinRequestRequest"))
                        $root.im.turms.proto.DeleteGroupJoinRequestRequest.encode(message.deleteGroupJoinRequestRequest, writer.uint32(/* id 505, wireType 2 =*/4042).fork()).ldelim();
                    if (message.deleteGroupJoinQuestionRequest != null && message.hasOwnProperty("deleteGroupJoinQuestionRequest"))
                        $root.im.turms.proto.DeleteGroupJoinQuestionRequest.encode(message.deleteGroupJoinQuestionRequest, writer.uint32(/* id 506, wireType 2 =*/4050).fork()).ldelim();
                    if (message.queryGroupInvitationsRequest != null && message.hasOwnProperty("queryGroupInvitationsRequest"))
                        $root.im.turms.proto.QueryGroupInvitationsRequest.encode(message.queryGroupInvitationsRequest, writer.uint32(/* id 507, wireType 2 =*/4058).fork()).ldelim();
                    if (message.queryGroupJoinRequestsRequest != null && message.hasOwnProperty("queryGroupJoinRequestsRequest"))
                        $root.im.turms.proto.QueryGroupJoinRequestsRequest.encode(message.queryGroupJoinRequestsRequest, writer.uint32(/* id 508, wireType 2 =*/4066).fork()).ldelim();
                    if (message.queryGroupJoinQuestionsRequest != null && message.hasOwnProperty("queryGroupJoinQuestionsRequest"))
                        $root.im.turms.proto.QueryGroupJoinQuestionsRequest.encode(message.queryGroupJoinQuestionsRequest, writer.uint32(/* id 509, wireType 2 =*/4074).fork()).ldelim();
                    if (message.updateGroupJoinQuestionRequest != null && message.hasOwnProperty("updateGroupJoinQuestionRequest"))
                        $root.im.turms.proto.UpdateGroupJoinQuestionRequest.encode(message.updateGroupJoinQuestionRequest, writer.uint32(/* id 510, wireType 2 =*/4082).fork()).ldelim();
                    if (message.createGroupMemberRequest != null && message.hasOwnProperty("createGroupMemberRequest"))
                        $root.im.turms.proto.CreateGroupMemberRequest.encode(message.createGroupMemberRequest, writer.uint32(/* id 600, wireType 2 =*/4802).fork()).ldelim();
                    if (message.deleteGroupMemberRequest != null && message.hasOwnProperty("deleteGroupMemberRequest"))
                        $root.im.turms.proto.DeleteGroupMemberRequest.encode(message.deleteGroupMemberRequest, writer.uint32(/* id 601, wireType 2 =*/4810).fork()).ldelim();
                    if (message.queryGroupMembersRequest != null && message.hasOwnProperty("queryGroupMembersRequest"))
                        $root.im.turms.proto.QueryGroupMembersRequest.encode(message.queryGroupMembersRequest, writer.uint32(/* id 602, wireType 2 =*/4818).fork()).ldelim();
                    if (message.updateGroupMemberRequest != null && message.hasOwnProperty("updateGroupMemberRequest"))
                        $root.im.turms.proto.UpdateGroupMemberRequest.encode(message.updateGroupMemberRequest, writer.uint32(/* id 603, wireType 2 =*/4826).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a TurmsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.TurmsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.TurmsRequest} TurmsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TurmsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.TurmsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.requestId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.requesterId = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.ackRequest = $root.im.turms.proto.AckRequest.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.createMessageRequest = $root.im.turms.proto.CreateMessageRequest.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.queryMessageStatusesRequest = $root.im.turms.proto.QueryMessageStatusesRequest.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.queryMessagesRequest = $root.im.turms.proto.QueryMessagesRequest.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.queryPendingMessagesWithTotalRequest = $root.im.turms.proto.QueryPendingMessagesWithTotalRequest.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.updateMessageRequest = $root.im.turms.proto.UpdateMessageRequest.decode(reader, reader.uint32());
                            break;
                        case 10:
                            message.updateTypingStatusRequest = $root.im.turms.proto.UpdateTypingStatusRequest.decode(reader, reader.uint32());
                            break;
                        case 100:
                            message.queryUserGroupInvitationsRequest = $root.im.turms.proto.QueryUserGroupInvitationsRequest.decode(reader, reader.uint32());
                            break;
                        case 101:
                            message.queryUserProfileRequest = $root.im.turms.proto.QueryUserProfileRequest.decode(reader, reader.uint32());
                            break;
                        case 102:
                            message.queryUsersIdsNearbyRequest = $root.im.turms.proto.QueryUsersIdsNearbyRequest.decode(reader, reader.uint32());
                            break;
                        case 103:
                            message.queryUsersInfosNearbyRequest = $root.im.turms.proto.QueryUsersInfosNearbyRequest.decode(reader, reader.uint32());
                            break;
                        case 104:
                            message.queryUsersOnlineStatusRequest = $root.im.turms.proto.QueryUsersOnlineStatusRequest.decode(reader, reader.uint32());
                            break;
                        case 105:
                            message.updateUserLocationRequest = $root.im.turms.proto.UpdateUserLocationRequest.decode(reader, reader.uint32());
                            break;
                        case 106:
                            message.updateUserOnlineStatusRequest = $root.im.turms.proto.UpdateUserOnlineStatusRequest.decode(reader, reader.uint32());
                            break;
                        case 107:
                            message.updateUserRequest = $root.im.turms.proto.UpdateUserRequest.decode(reader, reader.uint32());
                            break;
                        case 200:
                            message.createFriendRequestRequest = $root.im.turms.proto.CreateFriendRequestRequest.decode(reader, reader.uint32());
                            break;
                        case 201:
                            message.createRelationshipGroupRequest = $root.im.turms.proto.CreateRelationshipGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 202:
                            message.createRelationshipRequest = $root.im.turms.proto.CreateRelationshipRequest.decode(reader, reader.uint32());
                            break;
                        case 203:
                            message.deleteRelationshipGroupRequest = $root.im.turms.proto.DeleteRelationshipGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 204:
                            message.deleteRelationshipRequest = $root.im.turms.proto.DeleteRelationshipRequest.decode(reader, reader.uint32());
                            break;
                        case 205:
                            message.queryFriendRequestsRequest = $root.im.turms.proto.QueryFriendRequestsRequest.decode(reader, reader.uint32());
                            break;
                        case 206:
                            message.queryRelatedUsersIdsRequest = $root.im.turms.proto.QueryRelatedUsersIdsRequest.decode(reader, reader.uint32());
                            break;
                        case 207:
                            message.queryRelationshipGroupsRequest = $root.im.turms.proto.QueryRelationshipGroupsRequest.decode(reader, reader.uint32());
                            break;
                        case 208:
                            message.queryRelationshipsRequest = $root.im.turms.proto.QueryRelationshipsRequest.decode(reader, reader.uint32());
                            break;
                        case 209:
                            message.updateFriendRequestRequest = $root.im.turms.proto.UpdateFriendRequestRequest.decode(reader, reader.uint32());
                            break;
                        case 210:
                            message.updateRelationshipGroupRequest = $root.im.turms.proto.UpdateRelationshipGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 211:
                            message.updateRelationshipRequest = $root.im.turms.proto.UpdateRelationshipRequest.decode(reader, reader.uint32());
                            break;
                        case 300:
                            message.createGroupRequest = $root.im.turms.proto.CreateGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 301:
                            message.deleteGroupRequest = $root.im.turms.proto.DeleteGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 302:
                            message.queryGroupRequest = $root.im.turms.proto.QueryGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 303:
                            message.queryJoinedGroupsIdsRequest = $root.im.turms.proto.QueryJoinedGroupsIdsRequest.decode(reader, reader.uint32());
                            break;
                        case 304:
                            message.queryJoinedGroupsInfosRequest = $root.im.turms.proto.QueryJoinedGroupsInfosRequest.decode(reader, reader.uint32());
                            break;
                        case 305:
                            message.updateGroupRequest = $root.im.turms.proto.UpdateGroupRequest.decode(reader, reader.uint32());
                            break;
                        case 400:
                            message.createGroupBlacklistedUserRequest = $root.im.turms.proto.CreateGroupBlacklistedUserRequest.decode(reader, reader.uint32());
                            break;
                        case 401:
                            message.deleteGroupBlacklistedUserRequest = $root.im.turms.proto.DeleteGroupBlacklistedUserRequest.decode(reader, reader.uint32());
                            break;
                        case 402:
                            message.queryGroupBlacklistedUsersIdsRequest = $root.im.turms.proto.QueryGroupBlacklistedUsersIdsRequest.decode(reader, reader.uint32());
                            break;
                        case 403:
                            message.queryGroupBlacklistedUsersInfosRequest = $root.im.turms.proto.QueryGroupBlacklistedUsersInfosRequest.decode(reader, reader.uint32());
                            break;
                        case 500:
                            message.checkGroupJoinQuestionAnswerRequest = $root.im.turms.proto.CheckGroupJoinQuestionAnswerRequest.decode(reader, reader.uint32());
                            break;
                        case 501:
                            message.createGroupInvitationRequest = $root.im.turms.proto.CreateGroupInvitationRequest.decode(reader, reader.uint32());
                            break;
                        case 502:
                            message.createGroupJoinRequestRequest = $root.im.turms.proto.CreateGroupJoinRequestRequest.decode(reader, reader.uint32());
                            break;
                        case 503:
                            message.createGroupJoinQuestionRequest = $root.im.turms.proto.CreateGroupJoinQuestionRequest.decode(reader, reader.uint32());
                            break;
                        case 504:
                            message.deleteGroupInvitationRequest = $root.im.turms.proto.DeleteGroupInvitationRequest.decode(reader, reader.uint32());
                            break;
                        case 505:
                            message.deleteGroupJoinRequestRequest = $root.im.turms.proto.DeleteGroupJoinRequestRequest.decode(reader, reader.uint32());
                            break;
                        case 506:
                            message.deleteGroupJoinQuestionRequest = $root.im.turms.proto.DeleteGroupJoinQuestionRequest.decode(reader, reader.uint32());
                            break;
                        case 507:
                            message.queryGroupInvitationsRequest = $root.im.turms.proto.QueryGroupInvitationsRequest.decode(reader, reader.uint32());
                            break;
                        case 508:
                            message.queryGroupJoinRequestsRequest = $root.im.turms.proto.QueryGroupJoinRequestsRequest.decode(reader, reader.uint32());
                            break;
                        case 509:
                            message.queryGroupJoinQuestionsRequest = $root.im.turms.proto.QueryGroupJoinQuestionsRequest.decode(reader, reader.uint32());
                            break;
                        case 510:
                            message.updateGroupJoinQuestionRequest = $root.im.turms.proto.UpdateGroupJoinQuestionRequest.decode(reader, reader.uint32());
                            break;
                        case 600:
                            message.createGroupMemberRequest = $root.im.turms.proto.CreateGroupMemberRequest.decode(reader, reader.uint32());
                            break;
                        case 601:
                            message.deleteGroupMemberRequest = $root.im.turms.proto.DeleteGroupMemberRequest.decode(reader, reader.uint32());
                            break;
                        case 602:
                            message.queryGroupMembersRequest = $root.im.turms.proto.QueryGroupMembersRequest.decode(reader, reader.uint32());
                            break;
                        case 603:
                            message.updateGroupMemberRequest = $root.im.turms.proto.UpdateGroupMemberRequest.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return TurmsRequest;
            })();

            proto.QueryUserGroupInvitationsRequest = (function() {

                /**
                 * Properties of a QueryUserGroupInvitationsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryUserGroupInvitationsRequest
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryUserGroupInvitationsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryUserGroupInvitationsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryUserGroupInvitationsRequest.
                 * @implements IQueryUserGroupInvitationsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryUserGroupInvitationsRequest=} [properties] Properties to set
                 */
                function QueryUserGroupInvitationsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryUserGroupInvitationsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryUserGroupInvitationsRequest
                 * @instance
                 */
                QueryUserGroupInvitationsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryUserGroupInvitationsRequest message. Does not implicitly {@link im.turms.proto.QueryUserGroupInvitationsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryUserGroupInvitationsRequest
                 * @static
                 * @param {im.turms.proto.IQueryUserGroupInvitationsRequest} message QueryUserGroupInvitationsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryUserGroupInvitationsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryUserGroupInvitationsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryUserGroupInvitationsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryUserGroupInvitationsRequest} QueryUserGroupInvitationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryUserGroupInvitationsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryUserGroupInvitationsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryUserGroupInvitationsRequest;
            })();

            proto.QueryUserProfileRequest = (function() {

                /**
                 * Properties of a QueryUserProfileRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryUserProfileRequest
                 * @property {number|null} [userId] QueryUserProfileRequest userId
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryUserProfileRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryUserProfileRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryUserProfileRequest.
                 * @implements IQueryUserProfileRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryUserProfileRequest=} [properties] Properties to set
                 */
                function QueryUserProfileRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryUserProfileRequest userId.
                 * @member {number} userId
                 * @memberof im.turms.proto.QueryUserProfileRequest
                 * @instance
                 */
                QueryUserProfileRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * QueryUserProfileRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryUserProfileRequest
                 * @instance
                 */
                QueryUserProfileRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryUserProfileRequest message. Does not implicitly {@link im.turms.proto.QueryUserProfileRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryUserProfileRequest
                 * @static
                 * @param {im.turms.proto.IQueryUserProfileRequest} message QueryUserProfileRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryUserProfileRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryUserProfileRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryUserProfileRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryUserProfileRequest} QueryUserProfileRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryUserProfileRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryUserProfileRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryUserProfileRequest;
            })();

            proto.QueryUsersIdsNearbyRequest = (function() {

                /**
                 * Properties of a QueryUsersIdsNearbyRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryUsersIdsNearbyRequest
                 * @property {number|null} [latitude] QueryUsersIdsNearbyRequest latitude
                 * @property {number|null} [longitude] QueryUsersIdsNearbyRequest longitude
                 * @property {google.protobuf.IFloatValue|null} [distance] QueryUsersIdsNearbyRequest distance
                 * @property {google.protobuf.IInt32Value|null} [maxNumber] QueryUsersIdsNearbyRequest maxNumber
                 */

                /**
                 * Constructs a new QueryUsersIdsNearbyRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryUsersIdsNearbyRequest.
                 * @implements IQueryUsersIdsNearbyRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryUsersIdsNearbyRequest=} [properties] Properties to set
                 */
                function QueryUsersIdsNearbyRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryUsersIdsNearbyRequest latitude.
                 * @member {number} latitude
                 * @memberof im.turms.proto.QueryUsersIdsNearbyRequest
                 * @instance
                 */
                QueryUsersIdsNearbyRequest.prototype.latitude = 0;

                /**
                 * QueryUsersIdsNearbyRequest longitude.
                 * @member {number} longitude
                 * @memberof im.turms.proto.QueryUsersIdsNearbyRequest
                 * @instance
                 */
                QueryUsersIdsNearbyRequest.prototype.longitude = 0;

                /**
                 * QueryUsersIdsNearbyRequest distance.
                 * @member {google.protobuf.IFloatValue|null|undefined} distance
                 * @memberof im.turms.proto.QueryUsersIdsNearbyRequest
                 * @instance
                 */
                QueryUsersIdsNearbyRequest.prototype.distance = null;

                /**
                 * QueryUsersIdsNearbyRequest maxNumber.
                 * @member {google.protobuf.IInt32Value|null|undefined} maxNumber
                 * @memberof im.turms.proto.QueryUsersIdsNearbyRequest
                 * @instance
                 */
                QueryUsersIdsNearbyRequest.prototype.maxNumber = null;

                /**
                 * Encodes the specified QueryUsersIdsNearbyRequest message. Does not implicitly {@link im.turms.proto.QueryUsersIdsNearbyRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryUsersIdsNearbyRequest
                 * @static
                 * @param {im.turms.proto.IQueryUsersIdsNearbyRequest} message QueryUsersIdsNearbyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryUsersIdsNearbyRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        $root.google.protobuf.FloatValue.encode(message.distance, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.maxNumber != null && message.hasOwnProperty("maxNumber"))
                        $root.google.protobuf.Int32Value.encode(message.maxNumber, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryUsersIdsNearbyRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryUsersIdsNearbyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryUsersIdsNearbyRequest} QueryUsersIdsNearbyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryUsersIdsNearbyRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryUsersIdsNearbyRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.latitude = reader.float();
                            break;
                        case 2:
                            message.longitude = reader.float();
                            break;
                        case 3:
                            message.distance = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.maxNumber = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryUsersIdsNearbyRequest;
            })();

            proto.QueryUsersInfosNearbyRequest = (function() {

                /**
                 * Properties of a QueryUsersInfosNearbyRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryUsersInfosNearbyRequest
                 * @property {number|null} [latitude] QueryUsersInfosNearbyRequest latitude
                 * @property {number|null} [longitude] QueryUsersInfosNearbyRequest longitude
                 * @property {google.protobuf.IFloatValue|null} [distance] QueryUsersInfosNearbyRequest distance
                 * @property {google.protobuf.IUInt32Value|null} [maxNumber] QueryUsersInfosNearbyRequest maxNumber
                 */

                /**
                 * Constructs a new QueryUsersInfosNearbyRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryUsersInfosNearbyRequest.
                 * @implements IQueryUsersInfosNearbyRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryUsersInfosNearbyRequest=} [properties] Properties to set
                 */
                function QueryUsersInfosNearbyRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryUsersInfosNearbyRequest latitude.
                 * @member {number} latitude
                 * @memberof im.turms.proto.QueryUsersInfosNearbyRequest
                 * @instance
                 */
                QueryUsersInfosNearbyRequest.prototype.latitude = 0;

                /**
                 * QueryUsersInfosNearbyRequest longitude.
                 * @member {number} longitude
                 * @memberof im.turms.proto.QueryUsersInfosNearbyRequest
                 * @instance
                 */
                QueryUsersInfosNearbyRequest.prototype.longitude = 0;

                /**
                 * QueryUsersInfosNearbyRequest distance.
                 * @member {google.protobuf.IFloatValue|null|undefined} distance
                 * @memberof im.turms.proto.QueryUsersInfosNearbyRequest
                 * @instance
                 */
                QueryUsersInfosNearbyRequest.prototype.distance = null;

                /**
                 * QueryUsersInfosNearbyRequest maxNumber.
                 * @member {google.protobuf.IUInt32Value|null|undefined} maxNumber
                 * @memberof im.turms.proto.QueryUsersInfosNearbyRequest
                 * @instance
                 */
                QueryUsersInfosNearbyRequest.prototype.maxNumber = null;

                /**
                 * Encodes the specified QueryUsersInfosNearbyRequest message. Does not implicitly {@link im.turms.proto.QueryUsersInfosNearbyRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryUsersInfosNearbyRequest
                 * @static
                 * @param {im.turms.proto.IQueryUsersInfosNearbyRequest} message QueryUsersInfosNearbyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryUsersInfosNearbyRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        $root.google.protobuf.FloatValue.encode(message.distance, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.maxNumber != null && message.hasOwnProperty("maxNumber"))
                        $root.google.protobuf.UInt32Value.encode(message.maxNumber, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryUsersInfosNearbyRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryUsersInfosNearbyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryUsersInfosNearbyRequest} QueryUsersInfosNearbyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryUsersInfosNearbyRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryUsersInfosNearbyRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.latitude = reader.float();
                            break;
                        case 2:
                            message.longitude = reader.float();
                            break;
                        case 3:
                            message.distance = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.maxNumber = $root.google.protobuf.UInt32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryUsersInfosNearbyRequest;
            })();

            proto.QueryUsersOnlineStatusRequest = (function() {

                /**
                 * Properties of a QueryUsersOnlineStatusRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryUsersOnlineStatusRequest
                 * @property {Array.<number>|null} [usersIds] QueryUsersOnlineStatusRequest usersIds
                 */

                /**
                 * Constructs a new QueryUsersOnlineStatusRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryUsersOnlineStatusRequest.
                 * @implements IQueryUsersOnlineStatusRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryUsersOnlineStatusRequest=} [properties] Properties to set
                 */
                function QueryUsersOnlineStatusRequest(properties) {
                    this.usersIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryUsersOnlineStatusRequest usersIds.
                 * @member {Array.<number>} usersIds
                 * @memberof im.turms.proto.QueryUsersOnlineStatusRequest
                 * @instance
                 */
                QueryUsersOnlineStatusRequest.prototype.usersIds = $util.emptyArray;

                /**
                 * Encodes the specified QueryUsersOnlineStatusRequest message. Does not implicitly {@link im.turms.proto.QueryUsersOnlineStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryUsersOnlineStatusRequest
                 * @static
                 * @param {im.turms.proto.IQueryUsersOnlineStatusRequest} message QueryUsersOnlineStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryUsersOnlineStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.usersIds != null && message.usersIds.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.usersIds.length; ++i)
                            writer.int64(message.usersIds[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Decodes a QueryUsersOnlineStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryUsersOnlineStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryUsersOnlineStatusRequest} QueryUsersOnlineStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryUsersOnlineStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryUsersOnlineStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.usersIds && message.usersIds.length))
                                message.usersIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.usersIds.push(reader.int64());
                            } else
                                message.usersIds.push(reader.int64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryUsersOnlineStatusRequest;
            })();

            proto.CreateFriendRequestRequest = (function() {

                /**
                 * Properties of a CreateFriendRequestRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateFriendRequestRequest
                 * @property {number|null} [recipientId] CreateFriendRequestRequest recipientId
                 * @property {string|null} [content] CreateFriendRequestRequest content
                 */

                /**
                 * Constructs a new CreateFriendRequestRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateFriendRequestRequest.
                 * @implements ICreateFriendRequestRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateFriendRequestRequest=} [properties] Properties to set
                 */
                function CreateFriendRequestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateFriendRequestRequest recipientId.
                 * @member {number} recipientId
                 * @memberof im.turms.proto.CreateFriendRequestRequest
                 * @instance
                 */
                CreateFriendRequestRequest.prototype.recipientId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateFriendRequestRequest content.
                 * @member {string} content
                 * @memberof im.turms.proto.CreateFriendRequestRequest
                 * @instance
                 */
                CreateFriendRequestRequest.prototype.content = "";

                /**
                 * Encodes the specified CreateFriendRequestRequest message. Does not implicitly {@link im.turms.proto.CreateFriendRequestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateFriendRequestRequest
                 * @static
                 * @param {im.turms.proto.ICreateFriendRequestRequest} message CreateFriendRequestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateFriendRequestRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.recipientId != null && message.hasOwnProperty("recipientId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.recipientId);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                    return writer;
                };

                /**
                 * Decodes a CreateFriendRequestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateFriendRequestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateFriendRequestRequest} CreateFriendRequestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateFriendRequestRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateFriendRequestRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.recipientId = reader.int64();
                            break;
                        case 2:
                            message.content = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateFriendRequestRequest;
            })();

            proto.CreateRelationshipGroupRequest = (function() {

                /**
                 * Properties of a CreateRelationshipGroupRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateRelationshipGroupRequest
                 * @property {string|null} [name] CreateRelationshipGroupRequest name
                 */

                /**
                 * Constructs a new CreateRelationshipGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateRelationshipGroupRequest.
                 * @implements ICreateRelationshipGroupRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateRelationshipGroupRequest=} [properties] Properties to set
                 */
                function CreateRelationshipGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateRelationshipGroupRequest name.
                 * @member {string} name
                 * @memberof im.turms.proto.CreateRelationshipGroupRequest
                 * @instance
                 */
                CreateRelationshipGroupRequest.prototype.name = "";

                /**
                 * Encodes the specified CreateRelationshipGroupRequest message. Does not implicitly {@link im.turms.proto.CreateRelationshipGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateRelationshipGroupRequest
                 * @static
                 * @param {im.turms.proto.ICreateRelationshipGroupRequest} message CreateRelationshipGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRelationshipGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Decodes a CreateRelationshipGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateRelationshipGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateRelationshipGroupRequest} CreateRelationshipGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRelationshipGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateRelationshipGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateRelationshipGroupRequest;
            })();

            proto.CreateRelationshipRequest = (function() {

                /**
                 * Properties of a CreateRelationshipRequest.
                 * @memberof im.turms.proto
                 * @interface ICreateRelationshipRequest
                 * @property {number|null} [userId] CreateRelationshipRequest userId
                 * @property {boolean|null} [isBlocked] CreateRelationshipRequest isBlocked
                 * @property {google.protobuf.IInt32Value|null} [groupIndex] CreateRelationshipRequest groupIndex
                 */

                /**
                 * Constructs a new CreateRelationshipRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a CreateRelationshipRequest.
                 * @implements ICreateRelationshipRequest
                 * @constructor
                 * @param {im.turms.proto.ICreateRelationshipRequest=} [properties] Properties to set
                 */
                function CreateRelationshipRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateRelationshipRequest userId.
                 * @member {number} userId
                 * @memberof im.turms.proto.CreateRelationshipRequest
                 * @instance
                 */
                CreateRelationshipRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateRelationshipRequest isBlocked.
                 * @member {boolean} isBlocked
                 * @memberof im.turms.proto.CreateRelationshipRequest
                 * @instance
                 */
                CreateRelationshipRequest.prototype.isBlocked = false;

                /**
                 * CreateRelationshipRequest groupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} groupIndex
                 * @memberof im.turms.proto.CreateRelationshipRequest
                 * @instance
                 */
                CreateRelationshipRequest.prototype.groupIndex = null;

                /**
                 * Encodes the specified CreateRelationshipRequest message. Does not implicitly {@link im.turms.proto.CreateRelationshipRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.CreateRelationshipRequest
                 * @static
                 * @param {im.turms.proto.ICreateRelationshipRequest} message CreateRelationshipRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRelationshipRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.isBlocked != null && message.hasOwnProperty("isBlocked"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isBlocked);
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.groupIndex, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a CreateRelationshipRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.CreateRelationshipRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.CreateRelationshipRequest} CreateRelationshipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRelationshipRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.CreateRelationshipRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.isBlocked = reader.bool();
                            break;
                        case 3:
                            message.groupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return CreateRelationshipRequest;
            })();

            proto.DeleteRelationshipGroupMemberRequest = (function() {

                /**
                 * Properties of a DeleteRelationshipGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteRelationshipGroupMemberRequest
                 * @property {number|null} [userId] DeleteRelationshipGroupMemberRequest userId
                 * @property {number|null} [groupIndex] DeleteRelationshipGroupMemberRequest groupIndex
                 * @property {google.protobuf.IInt32Value|null} [targetGroupIndex] DeleteRelationshipGroupMemberRequest targetGroupIndex
                 */

                /**
                 * Constructs a new DeleteRelationshipGroupMemberRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteRelationshipGroupMemberRequest.
                 * @implements IDeleteRelationshipGroupMemberRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteRelationshipGroupMemberRequest=} [properties] Properties to set
                 */
                function DeleteRelationshipGroupMemberRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteRelationshipGroupMemberRequest userId.
                 * @member {number} userId
                 * @memberof im.turms.proto.DeleteRelationshipGroupMemberRequest
                 * @instance
                 */
                DeleteRelationshipGroupMemberRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DeleteRelationshipGroupMemberRequest groupIndex.
                 * @member {number} groupIndex
                 * @memberof im.turms.proto.DeleteRelationshipGroupMemberRequest
                 * @instance
                 */
                DeleteRelationshipGroupMemberRequest.prototype.groupIndex = 0;

                /**
                 * DeleteRelationshipGroupMemberRequest targetGroupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} targetGroupIndex
                 * @memberof im.turms.proto.DeleteRelationshipGroupMemberRequest
                 * @instance
                 */
                DeleteRelationshipGroupMemberRequest.prototype.targetGroupIndex = null;

                /**
                 * Encodes the specified DeleteRelationshipGroupMemberRequest message. Does not implicitly {@link im.turms.proto.DeleteRelationshipGroupMemberRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteRelationshipGroupMemberRequest
                 * @static
                 * @param {im.turms.proto.IDeleteRelationshipGroupMemberRequest} message DeleteRelationshipGroupMemberRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRelationshipGroupMemberRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupIndex);
                    if (message.targetGroupIndex != null && message.hasOwnProperty("targetGroupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.targetGroupIndex, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a DeleteRelationshipGroupMemberRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteRelationshipGroupMemberRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteRelationshipGroupMemberRequest} DeleteRelationshipGroupMemberRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRelationshipGroupMemberRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteRelationshipGroupMemberRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.groupIndex = reader.int32();
                            break;
                        case 3:
                            message.targetGroupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteRelationshipGroupMemberRequest;
            })();

            proto.DeleteRelationshipGroupRequest = (function() {

                /**
                 * Properties of a DeleteRelationshipGroupRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteRelationshipGroupRequest
                 * @property {number|null} [groupIndex] DeleteRelationshipGroupRequest groupIndex
                 * @property {google.protobuf.IInt32Value|null} [targetGroupIndex] DeleteRelationshipGroupRequest targetGroupIndex
                 */

                /**
                 * Constructs a new DeleteRelationshipGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteRelationshipGroupRequest.
                 * @implements IDeleteRelationshipGroupRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteRelationshipGroupRequest=} [properties] Properties to set
                 */
                function DeleteRelationshipGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteRelationshipGroupRequest groupIndex.
                 * @member {number} groupIndex
                 * @memberof im.turms.proto.DeleteRelationshipGroupRequest
                 * @instance
                 */
                DeleteRelationshipGroupRequest.prototype.groupIndex = 0;

                /**
                 * DeleteRelationshipGroupRequest targetGroupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} targetGroupIndex
                 * @memberof im.turms.proto.DeleteRelationshipGroupRequest
                 * @instance
                 */
                DeleteRelationshipGroupRequest.prototype.targetGroupIndex = null;

                /**
                 * Encodes the specified DeleteRelationshipGroupRequest message. Does not implicitly {@link im.turms.proto.DeleteRelationshipGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteRelationshipGroupRequest
                 * @static
                 * @param {im.turms.proto.IDeleteRelationshipGroupRequest} message DeleteRelationshipGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRelationshipGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.groupIndex);
                    if (message.targetGroupIndex != null && message.hasOwnProperty("targetGroupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.targetGroupIndex, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a DeleteRelationshipGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteRelationshipGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteRelationshipGroupRequest} DeleteRelationshipGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRelationshipGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteRelationshipGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupIndex = reader.int32();
                            break;
                        case 2:
                            message.targetGroupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteRelationshipGroupRequest;
            })();

            proto.DeleteRelationshipRequest = (function() {

                /**
                 * Properties of a DeleteRelationshipRequest.
                 * @memberof im.turms.proto
                 * @interface IDeleteRelationshipRequest
                 * @property {number|null} [relatedUserId] DeleteRelationshipRequest relatedUserId
                 * @property {google.protobuf.IInt32Value|null} [groupIndex] DeleteRelationshipRequest groupIndex
                 * @property {google.protobuf.IInt32Value|null} [targetGroupIndex] DeleteRelationshipRequest targetGroupIndex
                 */

                /**
                 * Constructs a new DeleteRelationshipRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a DeleteRelationshipRequest.
                 * @implements IDeleteRelationshipRequest
                 * @constructor
                 * @param {im.turms.proto.IDeleteRelationshipRequest=} [properties] Properties to set
                 */
                function DeleteRelationshipRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteRelationshipRequest relatedUserId.
                 * @member {number} relatedUserId
                 * @memberof im.turms.proto.DeleteRelationshipRequest
                 * @instance
                 */
                DeleteRelationshipRequest.prototype.relatedUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DeleteRelationshipRequest groupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} groupIndex
                 * @memberof im.turms.proto.DeleteRelationshipRequest
                 * @instance
                 */
                DeleteRelationshipRequest.prototype.groupIndex = null;

                /**
                 * DeleteRelationshipRequest targetGroupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} targetGroupIndex
                 * @memberof im.turms.proto.DeleteRelationshipRequest
                 * @instance
                 */
                DeleteRelationshipRequest.prototype.targetGroupIndex = null;

                /**
                 * Encodes the specified DeleteRelationshipRequest message. Does not implicitly {@link im.turms.proto.DeleteRelationshipRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.DeleteRelationshipRequest
                 * @static
                 * @param {im.turms.proto.IDeleteRelationshipRequest} message DeleteRelationshipRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRelationshipRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.relatedUserId != null && message.hasOwnProperty("relatedUserId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.relatedUserId);
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.groupIndex, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.targetGroupIndex != null && message.hasOwnProperty("targetGroupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.targetGroupIndex, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a DeleteRelationshipRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.DeleteRelationshipRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.DeleteRelationshipRequest} DeleteRelationshipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRelationshipRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.DeleteRelationshipRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.relatedUserId = reader.int64();
                            break;
                        case 2:
                            message.groupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.targetGroupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return DeleteRelationshipRequest;
            })();

            proto.QueryFriendRequestsRequest = (function() {

                /**
                 * Properties of a QueryFriendRequestsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryFriendRequestsRequest
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryFriendRequestsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryFriendRequestsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryFriendRequestsRequest.
                 * @implements IQueryFriendRequestsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryFriendRequestsRequest=} [properties] Properties to set
                 */
                function QueryFriendRequestsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryFriendRequestsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryFriendRequestsRequest
                 * @instance
                 */
                QueryFriendRequestsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryFriendRequestsRequest message. Does not implicitly {@link im.turms.proto.QueryFriendRequestsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryFriendRequestsRequest
                 * @static
                 * @param {im.turms.proto.IQueryFriendRequestsRequest} message QueryFriendRequestsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryFriendRequestsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryFriendRequestsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryFriendRequestsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryFriendRequestsRequest} QueryFriendRequestsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryFriendRequestsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryFriendRequestsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryFriendRequestsRequest;
            })();

            proto.QueryRelatedUsersIdsRequest = (function() {

                /**
                 * Properties of a QueryRelatedUsersIdsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryRelatedUsersIdsRequest
                 * @property {google.protobuf.IBoolValue|null} [isBlocked] QueryRelatedUsersIdsRequest isBlocked
                 * @property {google.protobuf.IInt32Value|null} [groupIndex] QueryRelatedUsersIdsRequest groupIndex
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryRelatedUsersIdsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryRelatedUsersIdsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryRelatedUsersIdsRequest.
                 * @implements IQueryRelatedUsersIdsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryRelatedUsersIdsRequest=} [properties] Properties to set
                 */
                function QueryRelatedUsersIdsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryRelatedUsersIdsRequest isBlocked.
                 * @member {google.protobuf.IBoolValue|null|undefined} isBlocked
                 * @memberof im.turms.proto.QueryRelatedUsersIdsRequest
                 * @instance
                 */
                QueryRelatedUsersIdsRequest.prototype.isBlocked = null;

                /**
                 * QueryRelatedUsersIdsRequest groupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} groupIndex
                 * @memberof im.turms.proto.QueryRelatedUsersIdsRequest
                 * @instance
                 */
                QueryRelatedUsersIdsRequest.prototype.groupIndex = null;

                /**
                 * QueryRelatedUsersIdsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryRelatedUsersIdsRequest
                 * @instance
                 */
                QueryRelatedUsersIdsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryRelatedUsersIdsRequest message. Does not implicitly {@link im.turms.proto.QueryRelatedUsersIdsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryRelatedUsersIdsRequest
                 * @static
                 * @param {im.turms.proto.IQueryRelatedUsersIdsRequest} message QueryRelatedUsersIdsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryRelatedUsersIdsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isBlocked != null && message.hasOwnProperty("isBlocked"))
                        $root.google.protobuf.BoolValue.encode(message.isBlocked, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.groupIndex, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryRelatedUsersIdsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryRelatedUsersIdsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryRelatedUsersIdsRequest} QueryRelatedUsersIdsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryRelatedUsersIdsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryRelatedUsersIdsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.isBlocked = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.groupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryRelatedUsersIdsRequest;
            })();

            proto.QueryRelationshipGroupsRequest = (function() {

                /**
                 * Properties of a QueryRelationshipGroupsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryRelationshipGroupsRequest
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryRelationshipGroupsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryRelationshipGroupsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryRelationshipGroupsRequest.
                 * @implements IQueryRelationshipGroupsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryRelationshipGroupsRequest=} [properties] Properties to set
                 */
                function QueryRelationshipGroupsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryRelationshipGroupsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryRelationshipGroupsRequest
                 * @instance
                 */
                QueryRelationshipGroupsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryRelationshipGroupsRequest message. Does not implicitly {@link im.turms.proto.QueryRelationshipGroupsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryRelationshipGroupsRequest
                 * @static
                 * @param {im.turms.proto.IQueryRelationshipGroupsRequest} message QueryRelationshipGroupsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryRelationshipGroupsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryRelationshipGroupsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryRelationshipGroupsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryRelationshipGroupsRequest} QueryRelationshipGroupsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryRelationshipGroupsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryRelationshipGroupsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryRelationshipGroupsRequest;
            })();

            proto.QueryRelationshipsRequest = (function() {

                /**
                 * Properties of a QueryRelationshipsRequest.
                 * @memberof im.turms.proto
                 * @interface IQueryRelationshipsRequest
                 * @property {Array.<number>|null} [relatedUsersIds] QueryRelationshipsRequest relatedUsersIds
                 * @property {google.protobuf.IBoolValue|null} [isBlocked] QueryRelationshipsRequest isBlocked
                 * @property {google.protobuf.IInt32Value|null} [groupIndex] QueryRelationshipsRequest groupIndex
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] QueryRelationshipsRequest lastUpdatedDate
                 */

                /**
                 * Constructs a new QueryRelationshipsRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents a QueryRelationshipsRequest.
                 * @implements IQueryRelationshipsRequest
                 * @constructor
                 * @param {im.turms.proto.IQueryRelationshipsRequest=} [properties] Properties to set
                 */
                function QueryRelationshipsRequest(properties) {
                    this.relatedUsersIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryRelationshipsRequest relatedUsersIds.
                 * @member {Array.<number>} relatedUsersIds
                 * @memberof im.turms.proto.QueryRelationshipsRequest
                 * @instance
                 */
                QueryRelationshipsRequest.prototype.relatedUsersIds = $util.emptyArray;

                /**
                 * QueryRelationshipsRequest isBlocked.
                 * @member {google.protobuf.IBoolValue|null|undefined} isBlocked
                 * @memberof im.turms.proto.QueryRelationshipsRequest
                 * @instance
                 */
                QueryRelationshipsRequest.prototype.isBlocked = null;

                /**
                 * QueryRelationshipsRequest groupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} groupIndex
                 * @memberof im.turms.proto.QueryRelationshipsRequest
                 * @instance
                 */
                QueryRelationshipsRequest.prototype.groupIndex = null;

                /**
                 * QueryRelationshipsRequest lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.QueryRelationshipsRequest
                 * @instance
                 */
                QueryRelationshipsRequest.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified QueryRelationshipsRequest message. Does not implicitly {@link im.turms.proto.QueryRelationshipsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.QueryRelationshipsRequest
                 * @static
                 * @param {im.turms.proto.IQueryRelationshipsRequest} message QueryRelationshipsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryRelationshipsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.relatedUsersIds != null && message.relatedUsersIds.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.relatedUsersIds.length; ++i)
                            writer.int64(message.relatedUsersIds[i]);
                        writer.ldelim();
                    }
                    if (message.isBlocked != null && message.hasOwnProperty("isBlocked"))
                        $root.google.protobuf.BoolValue.encode(message.isBlocked, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.groupIndex, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a QueryRelationshipsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.QueryRelationshipsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.QueryRelationshipsRequest} QueryRelationshipsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryRelationshipsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.QueryRelationshipsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.relatedUsersIds && message.relatedUsersIds.length))
                                message.relatedUsersIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.relatedUsersIds.push(reader.int64());
                            } else
                                message.relatedUsersIds.push(reader.int64());
                            break;
                        case 2:
                            message.isBlocked = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.groupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return QueryRelationshipsRequest;
            })();

            proto.UpdateFriendRequestRequest = (function() {

                /**
                 * Properties of an UpdateFriendRequestRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateFriendRequestRequest
                 * @property {number|null} [requestId] UpdateFriendRequestRequest requestId
                 * @property {im.turms.proto.ResponseAction|null} [responseAction] UpdateFriendRequestRequest responseAction
                 * @property {google.protobuf.IStringValue|null} [reason] UpdateFriendRequestRequest reason
                 */

                /**
                 * Constructs a new UpdateFriendRequestRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateFriendRequestRequest.
                 * @implements IUpdateFriendRequestRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateFriendRequestRequest=} [properties] Properties to set
                 */
                function UpdateFriendRequestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateFriendRequestRequest requestId.
                 * @member {number} requestId
                 * @memberof im.turms.proto.UpdateFriendRequestRequest
                 * @instance
                 */
                UpdateFriendRequestRequest.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateFriendRequestRequest responseAction.
                 * @member {im.turms.proto.ResponseAction} responseAction
                 * @memberof im.turms.proto.UpdateFriendRequestRequest
                 * @instance
                 */
                UpdateFriendRequestRequest.prototype.responseAction = 0;

                /**
                 * UpdateFriendRequestRequest reason.
                 * @member {google.protobuf.IStringValue|null|undefined} reason
                 * @memberof im.turms.proto.UpdateFriendRequestRequest
                 * @instance
                 */
                UpdateFriendRequestRequest.prototype.reason = null;

                /**
                 * Encodes the specified UpdateFriendRequestRequest message. Does not implicitly {@link im.turms.proto.UpdateFriendRequestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateFriendRequestRequest
                 * @static
                 * @param {im.turms.proto.IUpdateFriendRequestRequest} message UpdateFriendRequestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateFriendRequestRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.requestId != null && message.hasOwnProperty("requestId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestId);
                    if (message.responseAction != null && message.hasOwnProperty("responseAction"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.responseAction);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        $root.google.protobuf.StringValue.encode(message.reason, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UpdateFriendRequestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateFriendRequestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateFriendRequestRequest} UpdateFriendRequestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateFriendRequestRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateFriendRequestRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.requestId = reader.int64();
                            break;
                        case 2:
                            message.responseAction = reader.int32();
                            break;
                        case 3:
                            message.reason = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateFriendRequestRequest;
            })();

            proto.UpdateRelationshipGroupRequest = (function() {

                /**
                 * Properties of an UpdateRelationshipGroupRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateRelationshipGroupRequest
                 * @property {number|null} [groupIndex] UpdateRelationshipGroupRequest groupIndex
                 * @property {string|null} [newName] UpdateRelationshipGroupRequest newName
                 */

                /**
                 * Constructs a new UpdateRelationshipGroupRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateRelationshipGroupRequest.
                 * @implements IUpdateRelationshipGroupRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateRelationshipGroupRequest=} [properties] Properties to set
                 */
                function UpdateRelationshipGroupRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateRelationshipGroupRequest groupIndex.
                 * @member {number} groupIndex
                 * @memberof im.turms.proto.UpdateRelationshipGroupRequest
                 * @instance
                 */
                UpdateRelationshipGroupRequest.prototype.groupIndex = 0;

                /**
                 * UpdateRelationshipGroupRequest newName.
                 * @member {string} newName
                 * @memberof im.turms.proto.UpdateRelationshipGroupRequest
                 * @instance
                 */
                UpdateRelationshipGroupRequest.prototype.newName = "";

                /**
                 * Encodes the specified UpdateRelationshipGroupRequest message. Does not implicitly {@link im.turms.proto.UpdateRelationshipGroupRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateRelationshipGroupRequest
                 * @static
                 * @param {im.turms.proto.IUpdateRelationshipGroupRequest} message UpdateRelationshipGroupRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateRelationshipGroupRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupIndex != null && message.hasOwnProperty("groupIndex"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.groupIndex);
                    if (message.newName != null && message.hasOwnProperty("newName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.newName);
                    return writer;
                };

                /**
                 * Decodes an UpdateRelationshipGroupRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateRelationshipGroupRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateRelationshipGroupRequest} UpdateRelationshipGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateRelationshipGroupRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateRelationshipGroupRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupIndex = reader.int32();
                            break;
                        case 2:
                            message.newName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateRelationshipGroupRequest;
            })();

            proto.UpdateRelationshipRequest = (function() {

                /**
                 * Properties of an UpdateRelationshipRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateRelationshipRequest
                 * @property {number|null} [relatedUserId] UpdateRelationshipRequest relatedUserId
                 * @property {google.protobuf.IBoolValue|null} [blocked] UpdateRelationshipRequest blocked
                 * @property {google.protobuf.IInt32Value|null} [newGroupIndex] UpdateRelationshipRequest newGroupIndex
                 * @property {google.protobuf.IInt32Value|null} [deleteGroupIndex] UpdateRelationshipRequest deleteGroupIndex
                 */

                /**
                 * Constructs a new UpdateRelationshipRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateRelationshipRequest.
                 * @implements IUpdateRelationshipRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateRelationshipRequest=} [properties] Properties to set
                 */
                function UpdateRelationshipRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateRelationshipRequest relatedUserId.
                 * @member {number} relatedUserId
                 * @memberof im.turms.proto.UpdateRelationshipRequest
                 * @instance
                 */
                UpdateRelationshipRequest.prototype.relatedUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UpdateRelationshipRequest blocked.
                 * @member {google.protobuf.IBoolValue|null|undefined} blocked
                 * @memberof im.turms.proto.UpdateRelationshipRequest
                 * @instance
                 */
                UpdateRelationshipRequest.prototype.blocked = null;

                /**
                 * UpdateRelationshipRequest newGroupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} newGroupIndex
                 * @memberof im.turms.proto.UpdateRelationshipRequest
                 * @instance
                 */
                UpdateRelationshipRequest.prototype.newGroupIndex = null;

                /**
                 * UpdateRelationshipRequest deleteGroupIndex.
                 * @member {google.protobuf.IInt32Value|null|undefined} deleteGroupIndex
                 * @memberof im.turms.proto.UpdateRelationshipRequest
                 * @instance
                 */
                UpdateRelationshipRequest.prototype.deleteGroupIndex = null;

                /**
                 * Encodes the specified UpdateRelationshipRequest message. Does not implicitly {@link im.turms.proto.UpdateRelationshipRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateRelationshipRequest
                 * @static
                 * @param {im.turms.proto.IUpdateRelationshipRequest} message UpdateRelationshipRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateRelationshipRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.relatedUserId != null && message.hasOwnProperty("relatedUserId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.relatedUserId);
                    if (message.blocked != null && message.hasOwnProperty("blocked"))
                        $root.google.protobuf.BoolValue.encode(message.blocked, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.newGroupIndex != null && message.hasOwnProperty("newGroupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.newGroupIndex, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.deleteGroupIndex != null && message.hasOwnProperty("deleteGroupIndex"))
                        $root.google.protobuf.Int32Value.encode(message.deleteGroupIndex, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UpdateRelationshipRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateRelationshipRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateRelationshipRequest} UpdateRelationshipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateRelationshipRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateRelationshipRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.relatedUserId = reader.int64();
                            break;
                        case 2:
                            message.blocked = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.newGroupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.deleteGroupIndex = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateRelationshipRequest;
            })();

            proto.UpdateUserLocationRequest = (function() {

                /**
                 * Properties of an UpdateUserLocationRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateUserLocationRequest
                 * @property {number|null} [latitude] UpdateUserLocationRequest latitude
                 * @property {number|null} [longitude] UpdateUserLocationRequest longitude
                 * @property {google.protobuf.IStringValue|null} [name] UpdateUserLocationRequest name
                 * @property {google.protobuf.IStringValue|null} [address] UpdateUserLocationRequest address
                 */

                /**
                 * Constructs a new UpdateUserLocationRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateUserLocationRequest.
                 * @implements IUpdateUserLocationRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateUserLocationRequest=} [properties] Properties to set
                 */
                function UpdateUserLocationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateUserLocationRequest latitude.
                 * @member {number} latitude
                 * @memberof im.turms.proto.UpdateUserLocationRequest
                 * @instance
                 */
                UpdateUserLocationRequest.prototype.latitude = 0;

                /**
                 * UpdateUserLocationRequest longitude.
                 * @member {number} longitude
                 * @memberof im.turms.proto.UpdateUserLocationRequest
                 * @instance
                 */
                UpdateUserLocationRequest.prototype.longitude = 0;

                /**
                 * UpdateUserLocationRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.UpdateUserLocationRequest
                 * @instance
                 */
                UpdateUserLocationRequest.prototype.name = null;

                /**
                 * UpdateUserLocationRequest address.
                 * @member {google.protobuf.IStringValue|null|undefined} address
                 * @memberof im.turms.proto.UpdateUserLocationRequest
                 * @instance
                 */
                UpdateUserLocationRequest.prototype.address = null;

                /**
                 * Encodes the specified UpdateUserLocationRequest message. Does not implicitly {@link im.turms.proto.UpdateUserLocationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateUserLocationRequest
                 * @static
                 * @param {im.turms.proto.IUpdateUserLocationRequest} message UpdateUserLocationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserLocationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.address != null && message.hasOwnProperty("address"))
                        $root.google.protobuf.StringValue.encode(message.address, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UpdateUserLocationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateUserLocationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateUserLocationRequest} UpdateUserLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserLocationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateUserLocationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.latitude = reader.float();
                            break;
                        case 2:
                            message.longitude = reader.float();
                            break;
                        case 3:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.address = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateUserLocationRequest;
            })();

            proto.UpdateUserOnlineStatusRequest = (function() {

                /**
                 * Properties of an UpdateUserOnlineStatusRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateUserOnlineStatusRequest
                 * @property {im.turms.proto.UserStatus|null} [userStatus] UpdateUserOnlineStatusRequest userStatus
                 */

                /**
                 * Constructs a new UpdateUserOnlineStatusRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateUserOnlineStatusRequest.
                 * @implements IUpdateUserOnlineStatusRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateUserOnlineStatusRequest=} [properties] Properties to set
                 */
                function UpdateUserOnlineStatusRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateUserOnlineStatusRequest userStatus.
                 * @member {im.turms.proto.UserStatus} userStatus
                 * @memberof im.turms.proto.UpdateUserOnlineStatusRequest
                 * @instance
                 */
                UpdateUserOnlineStatusRequest.prototype.userStatus = 0;

                /**
                 * Encodes the specified UpdateUserOnlineStatusRequest message. Does not implicitly {@link im.turms.proto.UpdateUserOnlineStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateUserOnlineStatusRequest
                 * @static
                 * @param {im.turms.proto.IUpdateUserOnlineStatusRequest} message UpdateUserOnlineStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserOnlineStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userStatus);
                    return writer;
                };

                /**
                 * Decodes an UpdateUserOnlineStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateUserOnlineStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateUserOnlineStatusRequest} UpdateUserOnlineStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserOnlineStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateUserOnlineStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userStatus = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateUserOnlineStatusRequest;
            })();

            proto.UpdateUserRequest = (function() {

                /**
                 * Properties of an UpdateUserRequest.
                 * @memberof im.turms.proto
                 * @interface IUpdateUserRequest
                 * @property {google.protobuf.IStringValue|null} [password] UpdateUserRequest password
                 * @property {google.protobuf.IStringValue|null} [name] UpdateUserRequest name
                 * @property {google.protobuf.IStringValue|null} [intro] UpdateUserRequest intro
                 * @property {google.protobuf.IStringValue|null} [profilePictureUrl] UpdateUserRequest profilePictureUrl
                 * @property {im.turms.proto.ProfileAccessStrategy|null} [profileAccessStrategy] UpdateUserRequest profileAccessStrategy
                 */

                /**
                 * Constructs a new UpdateUserRequest.
                 * @memberof im.turms.proto
                 * @classdesc Represents an UpdateUserRequest.
                 * @implements IUpdateUserRequest
                 * @constructor
                 * @param {im.turms.proto.IUpdateUserRequest=} [properties] Properties to set
                 */
                function UpdateUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateUserRequest password.
                 * @member {google.protobuf.IStringValue|null|undefined} password
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @instance
                 */
                UpdateUserRequest.prototype.password = null;

                /**
                 * UpdateUserRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @instance
                 */
                UpdateUserRequest.prototype.name = null;

                /**
                 * UpdateUserRequest intro.
                 * @member {google.protobuf.IStringValue|null|undefined} intro
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @instance
                 */
                UpdateUserRequest.prototype.intro = null;

                /**
                 * UpdateUserRequest profilePictureUrl.
                 * @member {google.protobuf.IStringValue|null|undefined} profilePictureUrl
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @instance
                 */
                UpdateUserRequest.prototype.profilePictureUrl = null;

                /**
                 * UpdateUserRequest profileAccessStrategy.
                 * @member {im.turms.proto.ProfileAccessStrategy} profileAccessStrategy
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @instance
                 */
                UpdateUserRequest.prototype.profileAccessStrategy = 0;

                /**
                 * Encodes the specified UpdateUserRequest message. Does not implicitly {@link im.turms.proto.UpdateUserRequest.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @static
                 * @param {im.turms.proto.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.password != null && message.hasOwnProperty("password"))
                        $root.google.protobuf.StringValue.encode(message.password, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.name != null && message.hasOwnProperty("name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.intro != null && message.hasOwnProperty("intro"))
                        $root.google.protobuf.StringValue.encode(message.intro, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.profilePictureUrl != null && message.hasOwnProperty("profilePictureUrl"))
                        $root.google.protobuf.StringValue.encode(message.profilePictureUrl, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.profileAccessStrategy != null && message.hasOwnProperty("profileAccessStrategy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.profileAccessStrategy);
                    return writer;
                };

                /**
                 * Decodes an UpdateUserRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UpdateUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UpdateUserRequest} UpdateUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UpdateUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.password = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.intro = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.profilePictureUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.profileAccessStrategy = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UpdateUserRequest;
            })();

            proto.Int64ValuesWithVersion = (function() {

                /**
                 * Properties of an Int64ValuesWithVersion.
                 * @memberof im.turms.proto
                 * @interface IInt64ValuesWithVersion
                 * @property {Array.<number>|null} [values] Int64ValuesWithVersion values
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] Int64ValuesWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new Int64ValuesWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents an Int64ValuesWithVersion.
                 * @implements IInt64ValuesWithVersion
                 * @constructor
                 * @param {im.turms.proto.IInt64ValuesWithVersion=} [properties] Properties to set
                 */
                function Int64ValuesWithVersion(properties) {
                    this.values = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Int64ValuesWithVersion values.
                 * @member {Array.<number>} values
                 * @memberof im.turms.proto.Int64ValuesWithVersion
                 * @instance
                 */
                Int64ValuesWithVersion.prototype.values = $util.emptyArray;

                /**
                 * Int64ValuesWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.Int64ValuesWithVersion
                 * @instance
                 */
                Int64ValuesWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified Int64ValuesWithVersion message. Does not implicitly {@link im.turms.proto.Int64ValuesWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.Int64ValuesWithVersion
                 * @static
                 * @param {im.turms.proto.IInt64ValuesWithVersion} message Int64ValuesWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64ValuesWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.values != null && message.values.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.values.length; ++i)
                            writer.int64(message.values[i]);
                        writer.ldelim();
                    }
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an Int64ValuesWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.Int64ValuesWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.Int64ValuesWithVersion} Int64ValuesWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64ValuesWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.Int64ValuesWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.values && message.values.length))
                                message.values = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.values.push(reader.int64());
                            } else
                                message.values.push(reader.int64());
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Int64ValuesWithVersion;
            })();

            proto.Int64Values = (function() {

                /**
                 * Properties of an Int64Values.
                 * @memberof im.turms.proto
                 * @interface IInt64Values
                 * @property {Array.<number>|null} [values] Int64Values values
                 */

                /**
                 * Constructs a new Int64Values.
                 * @memberof im.turms.proto
                 * @classdesc Represents an Int64Values.
                 * @implements IInt64Values
                 * @constructor
                 * @param {im.turms.proto.IInt64Values=} [properties] Properties to set
                 */
                function Int64Values(properties) {
                    this.values = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Int64Values values.
                 * @member {Array.<number>} values
                 * @memberof im.turms.proto.Int64Values
                 * @instance
                 */
                Int64Values.prototype.values = $util.emptyArray;

                /**
                 * Encodes the specified Int64Values message. Does not implicitly {@link im.turms.proto.Int64Values.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.Int64Values
                 * @static
                 * @param {im.turms.proto.IInt64Values} message Int64Values message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Values.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.values != null && message.values.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.values.length; ++i)
                            writer.int64(message.values[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Decodes an Int64Values message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.Int64Values
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.Int64Values} Int64Values
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Values.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.Int64Values();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.values && message.values.length))
                                message.values = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.values.push(reader.int64());
                            } else
                                message.values.push(reader.int64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Int64Values;
            })();

            proto.GroupInvitationsWithVersion = (function() {

                /**
                 * Properties of a GroupInvitationsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IGroupInvitationsWithVersion
                 * @property {Array.<im.turms.proto.IGroupInvitation>|null} [groupInvitations] GroupInvitationsWithVersion groupInvitations
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] GroupInvitationsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new GroupInvitationsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupInvitationsWithVersion.
                 * @implements IGroupInvitationsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IGroupInvitationsWithVersion=} [properties] Properties to set
                 */
                function GroupInvitationsWithVersion(properties) {
                    this.groupInvitations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupInvitationsWithVersion groupInvitations.
                 * @member {Array.<im.turms.proto.IGroupInvitation>} groupInvitations
                 * @memberof im.turms.proto.GroupInvitationsWithVersion
                 * @instance
                 */
                GroupInvitationsWithVersion.prototype.groupInvitations = $util.emptyArray;

                /**
                 * GroupInvitationsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.GroupInvitationsWithVersion
                 * @instance
                 */
                GroupInvitationsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified GroupInvitationsWithVersion message. Does not implicitly {@link im.turms.proto.GroupInvitationsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupInvitationsWithVersion
                 * @static
                 * @param {im.turms.proto.IGroupInvitationsWithVersion} message GroupInvitationsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupInvitationsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupInvitations != null && message.groupInvitations.length)
                        for (var i = 0; i < message.groupInvitations.length; ++i)
                            $root.im.turms.proto.GroupInvitation.encode(message.groupInvitations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupInvitationsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupInvitationsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupInvitationsWithVersion} GroupInvitationsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupInvitationsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupInvitationsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.groupInvitations && message.groupInvitations.length))
                                message.groupInvitations = [];
                            message.groupInvitations.push($root.im.turms.proto.GroupInvitation.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupInvitationsWithVersion;
            })();

            proto.GroupJoinQuestionsWithVersion = (function() {

                /**
                 * Properties of a GroupJoinQuestionsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IGroupJoinQuestionsWithVersion
                 * @property {Array.<im.turms.proto.IGroupJoinQuestion>|null} [groupJoinQuestions] GroupJoinQuestionsWithVersion groupJoinQuestions
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] GroupJoinQuestionsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new GroupJoinQuestionsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupJoinQuestionsWithVersion.
                 * @implements IGroupJoinQuestionsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IGroupJoinQuestionsWithVersion=} [properties] Properties to set
                 */
                function GroupJoinQuestionsWithVersion(properties) {
                    this.groupJoinQuestions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupJoinQuestionsWithVersion groupJoinQuestions.
                 * @member {Array.<im.turms.proto.IGroupJoinQuestion>} groupJoinQuestions
                 * @memberof im.turms.proto.GroupJoinQuestionsWithVersion
                 * @instance
                 */
                GroupJoinQuestionsWithVersion.prototype.groupJoinQuestions = $util.emptyArray;

                /**
                 * GroupJoinQuestionsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.GroupJoinQuestionsWithVersion
                 * @instance
                 */
                GroupJoinQuestionsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified GroupJoinQuestionsWithVersion message. Does not implicitly {@link im.turms.proto.GroupJoinQuestionsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupJoinQuestionsWithVersion
                 * @static
                 * @param {im.turms.proto.IGroupJoinQuestionsWithVersion} message GroupJoinQuestionsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupJoinQuestionsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupJoinQuestions != null && message.groupJoinQuestions.length)
                        for (var i = 0; i < message.groupJoinQuestions.length; ++i)
                            $root.im.turms.proto.GroupJoinQuestion.encode(message.groupJoinQuestions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupJoinQuestionsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupJoinQuestionsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupJoinQuestionsWithVersion} GroupJoinQuestionsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupJoinQuestionsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupJoinQuestionsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.groupJoinQuestions && message.groupJoinQuestions.length))
                                message.groupJoinQuestions = [];
                            message.groupJoinQuestions.push($root.im.turms.proto.GroupJoinQuestion.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupJoinQuestionsWithVersion;
            })();

            proto.GroupJoinRequestsWithVersion = (function() {

                /**
                 * Properties of a GroupJoinRequestsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IGroupJoinRequestsWithVersion
                 * @property {Array.<im.turms.proto.IGroupJoinRequest>|null} [groupJoinRequests] GroupJoinRequestsWithVersion groupJoinRequests
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] GroupJoinRequestsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new GroupJoinRequestsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupJoinRequestsWithVersion.
                 * @implements IGroupJoinRequestsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IGroupJoinRequestsWithVersion=} [properties] Properties to set
                 */
                function GroupJoinRequestsWithVersion(properties) {
                    this.groupJoinRequests = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupJoinRequestsWithVersion groupJoinRequests.
                 * @member {Array.<im.turms.proto.IGroupJoinRequest>} groupJoinRequests
                 * @memberof im.turms.proto.GroupJoinRequestsWithVersion
                 * @instance
                 */
                GroupJoinRequestsWithVersion.prototype.groupJoinRequests = $util.emptyArray;

                /**
                 * GroupJoinRequestsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.GroupJoinRequestsWithVersion
                 * @instance
                 */
                GroupJoinRequestsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified GroupJoinRequestsWithVersion message. Does not implicitly {@link im.turms.proto.GroupJoinRequestsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupJoinRequestsWithVersion
                 * @static
                 * @param {im.turms.proto.IGroupJoinRequestsWithVersion} message GroupJoinRequestsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupJoinRequestsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupJoinRequests != null && message.groupJoinRequests.length)
                        for (var i = 0; i < message.groupJoinRequests.length; ++i)
                            $root.im.turms.proto.GroupJoinRequest.encode(message.groupJoinRequests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupJoinRequestsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupJoinRequestsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupJoinRequestsWithVersion} GroupJoinRequestsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupJoinRequestsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupJoinRequestsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.groupJoinRequests && message.groupJoinRequests.length))
                                message.groupJoinRequests = [];
                            message.groupJoinRequests.push($root.im.turms.proto.GroupJoinRequest.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupJoinRequestsWithVersion;
            })();

            proto.GroupMembersWithVersion = (function() {

                /**
                 * Properties of a GroupMembersWithVersion.
                 * @memberof im.turms.proto
                 * @interface IGroupMembersWithVersion
                 * @property {Array.<im.turms.proto.IGroupMember>|null} [groupMembers] GroupMembersWithVersion groupMembers
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] GroupMembersWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new GroupMembersWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupMembersWithVersion.
                 * @implements IGroupMembersWithVersion
                 * @constructor
                 * @param {im.turms.proto.IGroupMembersWithVersion=} [properties] Properties to set
                 */
                function GroupMembersWithVersion(properties) {
                    this.groupMembers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupMembersWithVersion groupMembers.
                 * @member {Array.<im.turms.proto.IGroupMember>} groupMembers
                 * @memberof im.turms.proto.GroupMembersWithVersion
                 * @instance
                 */
                GroupMembersWithVersion.prototype.groupMembers = $util.emptyArray;

                /**
                 * GroupMembersWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.GroupMembersWithVersion
                 * @instance
                 */
                GroupMembersWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified GroupMembersWithVersion message. Does not implicitly {@link im.turms.proto.GroupMembersWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupMembersWithVersion
                 * @static
                 * @param {im.turms.proto.IGroupMembersWithVersion} message GroupMembersWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupMembersWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupMembers != null && message.groupMembers.length)
                        for (var i = 0; i < message.groupMembers.length; ++i)
                            $root.im.turms.proto.GroupMember.encode(message.groupMembers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupMembersWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupMembersWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupMembersWithVersion} GroupMembersWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupMembersWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupMembersWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.groupMembers && message.groupMembers.length))
                                message.groupMembers = [];
                            message.groupMembers.push($root.im.turms.proto.GroupMember.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupMembersWithVersion;
            })();

            proto.GroupWithVersion = (function() {

                /**
                 * Properties of a GroupWithVersion.
                 * @memberof im.turms.proto
                 * @interface IGroupWithVersion
                 * @property {number|null} [lastUpdatedDate] GroupWithVersion lastUpdatedDate
                 * @property {Array.<im.turms.proto.IGroup>|null} [group] GroupWithVersion group
                 */

                /**
                 * Constructs a new GroupWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupWithVersion.
                 * @implements IGroupWithVersion
                 * @constructor
                 * @param {im.turms.proto.IGroupWithVersion=} [properties] Properties to set
                 */
                function GroupWithVersion(properties) {
                    this.group = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupWithVersion lastUpdatedDate.
                 * @member {number} lastUpdatedDate
                 * @memberof im.turms.proto.GroupWithVersion
                 * @instance
                 */
                GroupWithVersion.prototype.lastUpdatedDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * GroupWithVersion group.
                 * @member {Array.<im.turms.proto.IGroup>} group
                 * @memberof im.turms.proto.GroupWithVersion
                 * @instance
                 */
                GroupWithVersion.prototype.group = $util.emptyArray;

                /**
                 * Encodes the specified GroupWithVersion message. Does not implicitly {@link im.turms.proto.GroupWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupWithVersion
                 * @static
                 * @param {im.turms.proto.IGroupWithVersion} message GroupWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastUpdatedDate);
                    if (message.group != null && message.group.length)
                        for (var i = 0; i < message.group.length; ++i)
                            $root.im.turms.proto.Group.encode(message.group[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupWithVersion} GroupWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lastUpdatedDate = reader.int64();
                            break;
                        case 2:
                            if (!(message.group && message.group.length))
                                message.group = [];
                            message.group.push($root.im.turms.proto.Group.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupWithVersion;
            })();

            proto.GroupsWithVersion = (function() {

                /**
                 * Properties of a GroupsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IGroupsWithVersion
                 * @property {Array.<im.turms.proto.IGroup>|null} [groups] GroupsWithVersion groups
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] GroupsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new GroupsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a GroupsWithVersion.
                 * @implements IGroupsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IGroupsWithVersion=} [properties] Properties to set
                 */
                function GroupsWithVersion(properties) {
                    this.groups = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GroupsWithVersion groups.
                 * @member {Array.<im.turms.proto.IGroup>} groups
                 * @memberof im.turms.proto.GroupsWithVersion
                 * @instance
                 */
                GroupsWithVersion.prototype.groups = $util.emptyArray;

                /**
                 * GroupsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.GroupsWithVersion
                 * @instance
                 */
                GroupsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified GroupsWithVersion message. Does not implicitly {@link im.turms.proto.GroupsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.GroupsWithVersion
                 * @static
                 * @param {im.turms.proto.IGroupsWithVersion} message GroupsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GroupsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groups != null && message.groups.length)
                        for (var i = 0; i < message.groups.length; ++i)
                            $root.im.turms.proto.Group.encode(message.groups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a GroupsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.GroupsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.GroupsWithVersion} GroupsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GroupsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.GroupsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.groups && message.groups.length))
                                message.groups = [];
                            message.groups.push($root.im.turms.proto.Group.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return GroupsWithVersion;
            })();

            proto.MessageStatuses = (function() {

                /**
                 * Properties of a MessageStatuses.
                 * @memberof im.turms.proto
                 * @interface IMessageStatuses
                 * @property {Array.<im.turms.proto.IMessageStatus>|null} [messageStatuses] MessageStatuses messageStatuses
                 */

                /**
                 * Constructs a new MessageStatuses.
                 * @memberof im.turms.proto
                 * @classdesc Represents a MessageStatuses.
                 * @implements IMessageStatuses
                 * @constructor
                 * @param {im.turms.proto.IMessageStatuses=} [properties] Properties to set
                 */
                function MessageStatuses(properties) {
                    this.messageStatuses = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageStatuses messageStatuses.
                 * @member {Array.<im.turms.proto.IMessageStatus>} messageStatuses
                 * @memberof im.turms.proto.MessageStatuses
                 * @instance
                 */
                MessageStatuses.prototype.messageStatuses = $util.emptyArray;

                /**
                 * Encodes the specified MessageStatuses message. Does not implicitly {@link im.turms.proto.MessageStatuses.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.MessageStatuses
                 * @static
                 * @param {im.turms.proto.IMessageStatuses} message MessageStatuses message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageStatuses.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageStatuses != null && message.messageStatuses.length)
                        for (var i = 0; i < message.messageStatuses.length; ++i)
                            $root.im.turms.proto.MessageStatus.encode(message.messageStatuses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a MessageStatuses message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.MessageStatuses
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.MessageStatuses} MessageStatuses
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageStatuses.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.MessageStatuses();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messageStatuses && message.messageStatuses.length))
                                message.messageStatuses = [];
                            message.messageStatuses.push($root.im.turms.proto.MessageStatus.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return MessageStatuses;
            })();

            proto.MessagesWithTotalList = (function() {

                /**
                 * Properties of a MessagesWithTotalList.
                 * @memberof im.turms.proto
                 * @interface IMessagesWithTotalList
                 * @property {Array.<im.turms.proto.IMessagesWithTotal>|null} [messagesWithTotalList] MessagesWithTotalList messagesWithTotalList
                 */

                /**
                 * Constructs a new MessagesWithTotalList.
                 * @memberof im.turms.proto
                 * @classdesc Represents a MessagesWithTotalList.
                 * @implements IMessagesWithTotalList
                 * @constructor
                 * @param {im.turms.proto.IMessagesWithTotalList=} [properties] Properties to set
                 */
                function MessagesWithTotalList(properties) {
                    this.messagesWithTotalList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessagesWithTotalList messagesWithTotalList.
                 * @member {Array.<im.turms.proto.IMessagesWithTotal>} messagesWithTotalList
                 * @memberof im.turms.proto.MessagesWithTotalList
                 * @instance
                 */
                MessagesWithTotalList.prototype.messagesWithTotalList = $util.emptyArray;

                /**
                 * Encodes the specified MessagesWithTotalList message. Does not implicitly {@link im.turms.proto.MessagesWithTotalList.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.MessagesWithTotalList
                 * @static
                 * @param {im.turms.proto.IMessagesWithTotalList} message MessagesWithTotalList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessagesWithTotalList.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messagesWithTotalList != null && message.messagesWithTotalList.length)
                        for (var i = 0; i < message.messagesWithTotalList.length; ++i)
                            $root.im.turms.proto.MessagesWithTotal.encode(message.messagesWithTotalList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a MessagesWithTotalList message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.MessagesWithTotalList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.MessagesWithTotalList} MessagesWithTotalList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessagesWithTotalList.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.MessagesWithTotalList();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messagesWithTotalList && message.messagesWithTotalList.length))
                                message.messagesWithTotalList = [];
                            message.messagesWithTotalList.push($root.im.turms.proto.MessagesWithTotal.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return MessagesWithTotalList;
            })();

            proto.Messages = (function() {

                /**
                 * Properties of a Messages.
                 * @memberof im.turms.proto
                 * @interface IMessages
                 * @property {Array.<im.turms.proto.IMessage>|null} [messages] Messages messages
                 */

                /**
                 * Constructs a new Messages.
                 * @memberof im.turms.proto
                 * @classdesc Represents a Messages.
                 * @implements IMessages
                 * @constructor
                 * @param {im.turms.proto.IMessages=} [properties] Properties to set
                 */
                function Messages(properties) {
                    this.messages = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Messages messages.
                 * @member {Array.<im.turms.proto.IMessage>} messages
                 * @memberof im.turms.proto.Messages
                 * @instance
                 */
                Messages.prototype.messages = $util.emptyArray;

                /**
                 * Encodes the specified Messages message. Does not implicitly {@link im.turms.proto.Messages.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.Messages
                 * @static
                 * @param {im.turms.proto.IMessages} message Messages message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Messages.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messages != null && message.messages.length)
                        for (var i = 0; i < message.messages.length; ++i)
                            $root.im.turms.proto.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a Messages message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.Messages
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.Messages} Messages
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Messages.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.Messages();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.im.turms.proto.Message.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Messages;
            })();

            proto.TurmsResponse = (function() {

                /**
                 * Properties of a TurmsResponse.
                 * @memberof im.turms.proto
                 * @interface ITurmsResponse
                 * @property {number|null} [requestId] TurmsResponse requestId
                 * @property {number|null} [code] TurmsResponse code
                 * @property {google.protobuf.IStringValue|null} [reason] TurmsResponse reason
                 * @property {im.turms.proto.TurmsResponse.IData|null} [data] TurmsResponse data
                 * @property {im.turms.proto.ITurmsRequest|null} [notification] TurmsResponse notification
                 */

                /**
                 * Constructs a new TurmsResponse.
                 * @memberof im.turms.proto
                 * @classdesc Represents a TurmsResponse.
                 * @implements ITurmsResponse
                 * @constructor
                 * @param {im.turms.proto.ITurmsResponse=} [properties] Properties to set
                 */
                function TurmsResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TurmsResponse requestId.
                 * @member {number} requestId
                 * @memberof im.turms.proto.TurmsResponse
                 * @instance
                 */
                TurmsResponse.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * TurmsResponse code.
                 * @member {number} code
                 * @memberof im.turms.proto.TurmsResponse
                 * @instance
                 */
                TurmsResponse.prototype.code = 0;

                /**
                 * TurmsResponse reason.
                 * @member {google.protobuf.IStringValue|null|undefined} reason
                 * @memberof im.turms.proto.TurmsResponse
                 * @instance
                 */
                TurmsResponse.prototype.reason = null;

                /**
                 * TurmsResponse data.
                 * @member {im.turms.proto.TurmsResponse.IData|null|undefined} data
                 * @memberof im.turms.proto.TurmsResponse
                 * @instance
                 */
                TurmsResponse.prototype.data = null;

                /**
                 * TurmsResponse notification.
                 * @member {im.turms.proto.ITurmsRequest|null|undefined} notification
                 * @memberof im.turms.proto.TurmsResponse
                 * @instance
                 */
                TurmsResponse.prototype.notification = null;

                /**
                 * Encodes the specified TurmsResponse message. Does not implicitly {@link im.turms.proto.TurmsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.TurmsResponse
                 * @static
                 * @param {im.turms.proto.ITurmsResponse} message TurmsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TurmsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.requestId != null && message.hasOwnProperty("requestId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestId);
                    if (message.code != null && message.hasOwnProperty("code"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        $root.google.protobuf.StringValue.encode(message.reason, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.im.turms.proto.TurmsResponse.Data.encode(message.data, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.notification != null && message.hasOwnProperty("notification"))
                        $root.im.turms.proto.TurmsRequest.encode(message.notification, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a TurmsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.TurmsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.TurmsResponse} TurmsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TurmsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.TurmsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.requestId = reader.int64();
                            break;
                        case 2:
                            message.code = reader.int32();
                            break;
                        case 3:
                            message.reason = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.data = $root.im.turms.proto.TurmsResponse.Data.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.notification = $root.im.turms.proto.TurmsRequest.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                TurmsResponse.Data = (function() {

                    /**
                     * Properties of a Data.
                     * @memberof im.turms.proto.TurmsResponse
                     * @interface IData
                     * @property {im.turms.proto.IInt64Values|null} [ids] Data ids
                     * @property {im.turms.proto.IInt64ValuesWithVersion|null} [idsWithVersion] Data idsWithVersion
                     * @property {google.protobuf.IBoolValue|null} [success] Data success
                     * @property {im.turms.proto.IAcknowledge|null} [acknowledge] Data acknowledge
                     * @property {im.turms.proto.IMessages|null} [messages] Data messages
                     * @property {im.turms.proto.IMessageStatuses|null} [messageStatuses] Data messageStatuses
                     * @property {im.turms.proto.IMessagesWithTotalList|null} [messagesWithTotalList] Data messagesWithTotalList
                     * @property {im.turms.proto.IUsersInfosWithVersion|null} [usersInfosWithVersion] Data usersInfosWithVersion
                     * @property {im.turms.proto.IUsersOnlineStatuses|null} [usersOnlineStatuses] Data usersOnlineStatuses
                     * @property {im.turms.proto.IUserFriendRequestsWithVersion|null} [userFriendRequestsWithVersion] Data userFriendRequestsWithVersion
                     * @property {im.turms.proto.IUserRelationshipGroupsWithVersion|null} [userRelationshipGroupsWithVersion] Data userRelationshipGroupsWithVersion
                     * @property {im.turms.proto.IUserRelationshipsWithVersion|null} [userRelationshipsWithVersion] Data userRelationshipsWithVersion
                     * @property {im.turms.proto.IGroupInvitationsWithVersion|null} [groupInvitationsWithVersion] Data groupInvitationsWithVersion
                     * @property {im.turms.proto.IGroupJoinRequestsWithVersion|null} [groupJoinRequestsWithVersion] Data groupJoinRequestsWithVersion
                     * @property {im.turms.proto.IGroupJoinQuestionsWithVersion|null} [groupJoinQuestionsWithVersion] Data groupJoinQuestionsWithVersion
                     * @property {im.turms.proto.IGroupMembersWithVersion|null} [groupMembersWithVersion] Data groupMembersWithVersion
                     * @property {im.turms.proto.IGroupsWithVersion|null} [groupsWithVersion] Data groupsWithVersion
                     */

                    /**
                     * Constructs a new Data.
                     * @memberof im.turms.proto.TurmsResponse
                     * @classdesc Represents a Data.
                     * @implements IData
                     * @constructor
                     * @param {im.turms.proto.TurmsResponse.IData=} [properties] Properties to set
                     */
                    function Data(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Data ids.
                     * @member {im.turms.proto.IInt64Values|null|undefined} ids
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.ids = null;

                    /**
                     * Data idsWithVersion.
                     * @member {im.turms.proto.IInt64ValuesWithVersion|null|undefined} idsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.idsWithVersion = null;

                    /**
                     * Data success.
                     * @member {google.protobuf.IBoolValue|null|undefined} success
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.success = null;

                    /**
                     * Data acknowledge.
                     * @member {im.turms.proto.IAcknowledge|null|undefined} acknowledge
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.acknowledge = null;

                    /**
                     * Data messages.
                     * @member {im.turms.proto.IMessages|null|undefined} messages
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.messages = null;

                    /**
                     * Data messageStatuses.
                     * @member {im.turms.proto.IMessageStatuses|null|undefined} messageStatuses
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.messageStatuses = null;

                    /**
                     * Data messagesWithTotalList.
                     * @member {im.turms.proto.IMessagesWithTotalList|null|undefined} messagesWithTotalList
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.messagesWithTotalList = null;

                    /**
                     * Data usersInfosWithVersion.
                     * @member {im.turms.proto.IUsersInfosWithVersion|null|undefined} usersInfosWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.usersInfosWithVersion = null;

                    /**
                     * Data usersOnlineStatuses.
                     * @member {im.turms.proto.IUsersOnlineStatuses|null|undefined} usersOnlineStatuses
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.usersOnlineStatuses = null;

                    /**
                     * Data userFriendRequestsWithVersion.
                     * @member {im.turms.proto.IUserFriendRequestsWithVersion|null|undefined} userFriendRequestsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.userFriendRequestsWithVersion = null;

                    /**
                     * Data userRelationshipGroupsWithVersion.
                     * @member {im.turms.proto.IUserRelationshipGroupsWithVersion|null|undefined} userRelationshipGroupsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.userRelationshipGroupsWithVersion = null;

                    /**
                     * Data userRelationshipsWithVersion.
                     * @member {im.turms.proto.IUserRelationshipsWithVersion|null|undefined} userRelationshipsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.userRelationshipsWithVersion = null;

                    /**
                     * Data groupInvitationsWithVersion.
                     * @member {im.turms.proto.IGroupInvitationsWithVersion|null|undefined} groupInvitationsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.groupInvitationsWithVersion = null;

                    /**
                     * Data groupJoinRequestsWithVersion.
                     * @member {im.turms.proto.IGroupJoinRequestsWithVersion|null|undefined} groupJoinRequestsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.groupJoinRequestsWithVersion = null;

                    /**
                     * Data groupJoinQuestionsWithVersion.
                     * @member {im.turms.proto.IGroupJoinQuestionsWithVersion|null|undefined} groupJoinQuestionsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.groupJoinQuestionsWithVersion = null;

                    /**
                     * Data groupMembersWithVersion.
                     * @member {im.turms.proto.IGroupMembersWithVersion|null|undefined} groupMembersWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.groupMembersWithVersion = null;

                    /**
                     * Data groupsWithVersion.
                     * @member {im.turms.proto.IGroupsWithVersion|null|undefined} groupsWithVersion
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Data.prototype.groupsWithVersion = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Data kind.
                     * @member {"ids"|"idsWithVersion"|"success"|"acknowledge"|"messages"|"messageStatuses"|"messagesWithTotalList"|"usersInfosWithVersion"|"usersOnlineStatuses"|"userFriendRequestsWithVersion"|"userRelationshipGroupsWithVersion"|"userRelationshipsWithVersion"|"groupInvitationsWithVersion"|"groupJoinRequestsWithVersion"|"groupJoinQuestionsWithVersion"|"groupMembersWithVersion"|"groupsWithVersion"|undefined} kind
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @instance
                     */
                    Object.defineProperty(Data.prototype, "kind", {
                        get: $util.oneOfGetter($oneOfFields = ["ids", "idsWithVersion", "success", "acknowledge", "messages", "messageStatuses", "messagesWithTotalList", "usersInfosWithVersion", "usersOnlineStatuses", "userFriendRequestsWithVersion", "userRelationshipGroupsWithVersion", "userRelationshipsWithVersion", "groupInvitationsWithVersion", "groupJoinRequestsWithVersion", "groupJoinQuestionsWithVersion", "groupMembersWithVersion", "groupsWithVersion"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Encodes the specified Data message. Does not implicitly {@link im.turms.proto.TurmsResponse.Data.verify|verify} messages.
                     * @function encode
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @static
                     * @param {im.turms.proto.TurmsResponse.IData} message Data message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Data.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ids != null && message.hasOwnProperty("ids"))
                            $root.im.turms.proto.Int64Values.encode(message.ids, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.idsWithVersion != null && message.hasOwnProperty("idsWithVersion"))
                            $root.im.turms.proto.Int64ValuesWithVersion.encode(message.idsWithVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.success != null && message.hasOwnProperty("success"))
                            $root.google.protobuf.BoolValue.encode(message.success, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.acknowledge != null && message.hasOwnProperty("acknowledge"))
                            $root.im.turms.proto.Acknowledge.encode(message.acknowledge, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.messages != null && message.hasOwnProperty("messages"))
                            $root.im.turms.proto.Messages.encode(message.messages, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.messageStatuses != null && message.hasOwnProperty("messageStatuses"))
                            $root.im.turms.proto.MessageStatuses.encode(message.messageStatuses, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.messagesWithTotalList != null && message.hasOwnProperty("messagesWithTotalList"))
                            $root.im.turms.proto.MessagesWithTotalList.encode(message.messagesWithTotalList, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.usersInfosWithVersion != null && message.hasOwnProperty("usersInfosWithVersion"))
                            $root.im.turms.proto.UsersInfosWithVersion.encode(message.usersInfosWithVersion, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.usersOnlineStatuses != null && message.hasOwnProperty("usersOnlineStatuses"))
                            $root.im.turms.proto.UsersOnlineStatuses.encode(message.usersOnlineStatuses, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.userFriendRequestsWithVersion != null && message.hasOwnProperty("userFriendRequestsWithVersion"))
                            $root.im.turms.proto.UserFriendRequestsWithVersion.encode(message.userFriendRequestsWithVersion, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.userRelationshipGroupsWithVersion != null && message.hasOwnProperty("userRelationshipGroupsWithVersion"))
                            $root.im.turms.proto.UserRelationshipGroupsWithVersion.encode(message.userRelationshipGroupsWithVersion, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.userRelationshipsWithVersion != null && message.hasOwnProperty("userRelationshipsWithVersion"))
                            $root.im.turms.proto.UserRelationshipsWithVersion.encode(message.userRelationshipsWithVersion, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        if (message.groupInvitationsWithVersion != null && message.hasOwnProperty("groupInvitationsWithVersion"))
                            $root.im.turms.proto.GroupInvitationsWithVersion.encode(message.groupInvitationsWithVersion, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.groupJoinRequestsWithVersion != null && message.hasOwnProperty("groupJoinRequestsWithVersion"))
                            $root.im.turms.proto.GroupJoinRequestsWithVersion.encode(message.groupJoinRequestsWithVersion, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                        if (message.groupJoinQuestionsWithVersion != null && message.hasOwnProperty("groupJoinQuestionsWithVersion"))
                            $root.im.turms.proto.GroupJoinQuestionsWithVersion.encode(message.groupJoinQuestionsWithVersion, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                        if (message.groupMembersWithVersion != null && message.hasOwnProperty("groupMembersWithVersion"))
                            $root.im.turms.proto.GroupMembersWithVersion.encode(message.groupMembersWithVersion, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                        if (message.groupsWithVersion != null && message.hasOwnProperty("groupsWithVersion"))
                            $root.im.turms.proto.GroupsWithVersion.encode(message.groupsWithVersion, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Data message from the specified reader or buffer.
                     * @function decode
                     * @memberof im.turms.proto.TurmsResponse.Data
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {im.turms.proto.TurmsResponse.Data} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Data.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.TurmsResponse.Data();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ids = $root.im.turms.proto.Int64Values.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.idsWithVersion = $root.im.turms.proto.Int64ValuesWithVersion.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.success = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.acknowledge = $root.im.turms.proto.Acknowledge.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.messages = $root.im.turms.proto.Messages.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.messageStatuses = $root.im.turms.proto.MessageStatuses.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.messagesWithTotalList = $root.im.turms.proto.MessagesWithTotalList.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.usersInfosWithVersion = $root.im.turms.proto.UsersInfosWithVersion.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.usersOnlineStatuses = $root.im.turms.proto.UsersOnlineStatuses.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.userFriendRequestsWithVersion = $root.im.turms.proto.UserFriendRequestsWithVersion.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.userRelationshipGroupsWithVersion = $root.im.turms.proto.UserRelationshipGroupsWithVersion.decode(reader, reader.uint32());
                                break;
                            case 12:
                                message.userRelationshipsWithVersion = $root.im.turms.proto.UserRelationshipsWithVersion.decode(reader, reader.uint32());
                                break;
                            case 13:
                                message.groupInvitationsWithVersion = $root.im.turms.proto.GroupInvitationsWithVersion.decode(reader, reader.uint32());
                                break;
                            case 14:
                                message.groupJoinRequestsWithVersion = $root.im.turms.proto.GroupJoinRequestsWithVersion.decode(reader, reader.uint32());
                                break;
                            case 15:
                                message.groupJoinQuestionsWithVersion = $root.im.turms.proto.GroupJoinQuestionsWithVersion.decode(reader, reader.uint32());
                                break;
                            case 16:
                                message.groupMembersWithVersion = $root.im.turms.proto.GroupMembersWithVersion.decode(reader, reader.uint32());
                                break;
                            case 17:
                                message.groupsWithVersion = $root.im.turms.proto.GroupsWithVersion.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Data;
                })();

                return TurmsResponse;
            })();

            proto.UserFriendRequestsWithVersion = (function() {

                /**
                 * Properties of a UserFriendRequestsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IUserFriendRequestsWithVersion
                 * @property {Array.<im.turms.proto.IUserFriendRequest>|null} [userFriendRequests] UserFriendRequestsWithVersion userFriendRequests
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] UserFriendRequestsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new UserFriendRequestsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserFriendRequestsWithVersion.
                 * @implements IUserFriendRequestsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IUserFriendRequestsWithVersion=} [properties] Properties to set
                 */
                function UserFriendRequestsWithVersion(properties) {
                    this.userFriendRequests = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserFriendRequestsWithVersion userFriendRequests.
                 * @member {Array.<im.turms.proto.IUserFriendRequest>} userFriendRequests
                 * @memberof im.turms.proto.UserFriendRequestsWithVersion
                 * @instance
                 */
                UserFriendRequestsWithVersion.prototype.userFriendRequests = $util.emptyArray;

                /**
                 * UserFriendRequestsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.UserFriendRequestsWithVersion
                 * @instance
                 */
                UserFriendRequestsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified UserFriendRequestsWithVersion message. Does not implicitly {@link im.turms.proto.UserFriendRequestsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserFriendRequestsWithVersion
                 * @static
                 * @param {im.turms.proto.IUserFriendRequestsWithVersion} message UserFriendRequestsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserFriendRequestsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userFriendRequests != null && message.userFriendRequests.length)
                        for (var i = 0; i < message.userFriendRequests.length; ++i)
                            $root.im.turms.proto.UserFriendRequest.encode(message.userFriendRequests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserFriendRequestsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserFriendRequestsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserFriendRequestsWithVersion} UserFriendRequestsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserFriendRequestsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserFriendRequestsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.userFriendRequests && message.userFriendRequests.length))
                                message.userFriendRequests = [];
                            message.userFriendRequests.push($root.im.turms.proto.UserFriendRequest.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserFriendRequestsWithVersion;
            })();

            proto.UserRelationshipGroupsWithVersion = (function() {

                /**
                 * Properties of a UserRelationshipGroupsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IUserRelationshipGroupsWithVersion
                 * @property {Array.<im.turms.proto.IUserRelationshipGroup>|null} [userRelationshipGroups] UserRelationshipGroupsWithVersion userRelationshipGroups
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] UserRelationshipGroupsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new UserRelationshipGroupsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserRelationshipGroupsWithVersion.
                 * @implements IUserRelationshipGroupsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IUserRelationshipGroupsWithVersion=} [properties] Properties to set
                 */
                function UserRelationshipGroupsWithVersion(properties) {
                    this.userRelationshipGroups = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserRelationshipGroupsWithVersion userRelationshipGroups.
                 * @member {Array.<im.turms.proto.IUserRelationshipGroup>} userRelationshipGroups
                 * @memberof im.turms.proto.UserRelationshipGroupsWithVersion
                 * @instance
                 */
                UserRelationshipGroupsWithVersion.prototype.userRelationshipGroups = $util.emptyArray;

                /**
                 * UserRelationshipGroupsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.UserRelationshipGroupsWithVersion
                 * @instance
                 */
                UserRelationshipGroupsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified UserRelationshipGroupsWithVersion message. Does not implicitly {@link im.turms.proto.UserRelationshipGroupsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserRelationshipGroupsWithVersion
                 * @static
                 * @param {im.turms.proto.IUserRelationshipGroupsWithVersion} message UserRelationshipGroupsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserRelationshipGroupsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userRelationshipGroups != null && message.userRelationshipGroups.length)
                        for (var i = 0; i < message.userRelationshipGroups.length; ++i)
                            $root.im.turms.proto.UserRelationshipGroup.encode(message.userRelationshipGroups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserRelationshipGroupsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserRelationshipGroupsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserRelationshipGroupsWithVersion} UserRelationshipGroupsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserRelationshipGroupsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserRelationshipGroupsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.userRelationshipGroups && message.userRelationshipGroups.length))
                                message.userRelationshipGroups = [];
                            message.userRelationshipGroups.push($root.im.turms.proto.UserRelationshipGroup.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserRelationshipGroupsWithVersion;
            })();

            proto.UserRelationshipsWithVersion = (function() {

                /**
                 * Properties of a UserRelationshipsWithVersion.
                 * @memberof im.turms.proto
                 * @interface IUserRelationshipsWithVersion
                 * @property {Array.<im.turms.proto.IUserRelationship>|null} [userRelationships] UserRelationshipsWithVersion userRelationships
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] UserRelationshipsWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new UserRelationshipsWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UserRelationshipsWithVersion.
                 * @implements IUserRelationshipsWithVersion
                 * @constructor
                 * @param {im.turms.proto.IUserRelationshipsWithVersion=} [properties] Properties to set
                 */
                function UserRelationshipsWithVersion(properties) {
                    this.userRelationships = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserRelationshipsWithVersion userRelationships.
                 * @member {Array.<im.turms.proto.IUserRelationship>} userRelationships
                 * @memberof im.turms.proto.UserRelationshipsWithVersion
                 * @instance
                 */
                UserRelationshipsWithVersion.prototype.userRelationships = $util.emptyArray;

                /**
                 * UserRelationshipsWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.UserRelationshipsWithVersion
                 * @instance
                 */
                UserRelationshipsWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified UserRelationshipsWithVersion message. Does not implicitly {@link im.turms.proto.UserRelationshipsWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UserRelationshipsWithVersion
                 * @static
                 * @param {im.turms.proto.IUserRelationshipsWithVersion} message UserRelationshipsWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserRelationshipsWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userRelationships != null && message.userRelationships.length)
                        for (var i = 0; i < message.userRelationships.length; ++i)
                            $root.im.turms.proto.UserRelationship.encode(message.userRelationships[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserRelationshipsWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UserRelationshipsWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UserRelationshipsWithVersion} UserRelationshipsWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserRelationshipsWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UserRelationshipsWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.userRelationships && message.userRelationships.length))
                                message.userRelationships = [];
                            message.userRelationships.push($root.im.turms.proto.UserRelationship.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UserRelationshipsWithVersion;
            })();

            proto.UsersInfosWithVersion = (function() {

                /**
                 * Properties of a UsersInfosWithVersion.
                 * @memberof im.turms.proto
                 * @interface IUsersInfosWithVersion
                 * @property {Array.<im.turms.proto.IUserInfo>|null} [userInfos] UsersInfosWithVersion userInfos
                 * @property {google.protobuf.IInt64Value|null} [lastUpdatedDate] UsersInfosWithVersion lastUpdatedDate
                 */

                /**
                 * Constructs a new UsersInfosWithVersion.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UsersInfosWithVersion.
                 * @implements IUsersInfosWithVersion
                 * @constructor
                 * @param {im.turms.proto.IUsersInfosWithVersion=} [properties] Properties to set
                 */
                function UsersInfosWithVersion(properties) {
                    this.userInfos = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UsersInfosWithVersion userInfos.
                 * @member {Array.<im.turms.proto.IUserInfo>} userInfos
                 * @memberof im.turms.proto.UsersInfosWithVersion
                 * @instance
                 */
                UsersInfosWithVersion.prototype.userInfos = $util.emptyArray;

                /**
                 * UsersInfosWithVersion lastUpdatedDate.
                 * @member {google.protobuf.IInt64Value|null|undefined} lastUpdatedDate
                 * @memberof im.turms.proto.UsersInfosWithVersion
                 * @instance
                 */
                UsersInfosWithVersion.prototype.lastUpdatedDate = null;

                /**
                 * Encodes the specified UsersInfosWithVersion message. Does not implicitly {@link im.turms.proto.UsersInfosWithVersion.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UsersInfosWithVersion
                 * @static
                 * @param {im.turms.proto.IUsersInfosWithVersion} message UsersInfosWithVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UsersInfosWithVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userInfos != null && message.userInfos.length)
                        for (var i = 0; i < message.userInfos.length; ++i)
                            $root.im.turms.proto.UserInfo.encode(message.userInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lastUpdatedDate != null && message.hasOwnProperty("lastUpdatedDate"))
                        $root.google.protobuf.Int64Value.encode(message.lastUpdatedDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UsersInfosWithVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UsersInfosWithVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UsersInfosWithVersion} UsersInfosWithVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UsersInfosWithVersion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UsersInfosWithVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.userInfos && message.userInfos.length))
                                message.userInfos = [];
                            message.userInfos.push($root.im.turms.proto.UserInfo.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lastUpdatedDate = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UsersInfosWithVersion;
            })();

            proto.UsersOnlineStatuses = (function() {

                /**
                 * Properties of a UsersOnlineStatuses.
                 * @memberof im.turms.proto
                 * @interface IUsersOnlineStatuses
                 * @property {Array.<im.turms.proto.IUserStatusDetail>|null} [userStatuses] UsersOnlineStatuses userStatuses
                 */

                /**
                 * Constructs a new UsersOnlineStatuses.
                 * @memberof im.turms.proto
                 * @classdesc Represents a UsersOnlineStatuses.
                 * @implements IUsersOnlineStatuses
                 * @constructor
                 * @param {im.turms.proto.IUsersOnlineStatuses=} [properties] Properties to set
                 */
                function UsersOnlineStatuses(properties) {
                    this.userStatuses = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UsersOnlineStatuses userStatuses.
                 * @member {Array.<im.turms.proto.IUserStatusDetail>} userStatuses
                 * @memberof im.turms.proto.UsersOnlineStatuses
                 * @instance
                 */
                UsersOnlineStatuses.prototype.userStatuses = $util.emptyArray;

                /**
                 * Encodes the specified UsersOnlineStatuses message. Does not implicitly {@link im.turms.proto.UsersOnlineStatuses.verify|verify} messages.
                 * @function encode
                 * @memberof im.turms.proto.UsersOnlineStatuses
                 * @static
                 * @param {im.turms.proto.IUsersOnlineStatuses} message UsersOnlineStatuses message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UsersOnlineStatuses.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userStatuses != null && message.userStatuses.length)
                        for (var i = 0; i < message.userStatuses.length; ++i)
                            $root.im.turms.proto.UserStatusDetail.encode(message.userStatuses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UsersOnlineStatuses message from the specified reader or buffer.
                 * @function decode
                 * @memberof im.turms.proto.UsersOnlineStatuses
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {im.turms.proto.UsersOnlineStatuses} UsersOnlineStatuses
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UsersOnlineStatuses.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im.turms.proto.UsersOnlineStatuses();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.userStatuses && message.userStatuses.length))
                                message.userStatuses = [];
                            message.userStatuses.push($root.im.turms.proto.UserStatusDetail.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return UsersOnlineStatuses;
            })();

            return proto;
        })();

        return turms;
    })();

    return im;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
