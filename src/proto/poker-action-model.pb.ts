/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as onlineNiepowazniPoker000 from './poker-common-model.pb';
/**
 * Message implementation for online.niepowazni.poker.JoinPokerGameRequest
 */
export class JoinPokerGameRequest implements GrpcMessage {
  static id = 'online.niepowazni.poker.JoinPokerGameRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new JoinPokerGameRequest();
    JoinPokerGameRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: JoinPokerGameRequest) {
    _instance.username = _instance.username || '';
    _instance.buyIn = _instance.buyIn || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: JoinPokerGameRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.buyIn = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    JoinPokerGameRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: JoinPokerGameRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.buyIn) {
      _writer.writeInt64String(2, _instance.buyIn);
    }
  }

  private _username: string;
  private _buyIn: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of JoinPokerGameRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<JoinPokerGameRequest.AsObject>) {
    _value = _value || {};
    this.username = _value.username;
    this.buyIn = _value.buyIn;
    JoinPokerGameRequest.refineValues(this);
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  get buyIn(): string {
    return this._buyIn;
  }
  set buyIn(value: string) {
    this._buyIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    JoinPokerGameRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): JoinPokerGameRequest.AsObject {
    return {
      username: this.username,
      buyIn: this.buyIn
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): JoinPokerGameRequest.AsProtobufJSON {
    return {
      username: this.username,
      buyIn: this.buyIn
    };
  }
}
export module JoinPokerGameRequest {
  /**
   * Standard JavaScript object representation for JoinPokerGameRequest
   */
  export interface AsObject {
    username: string;
    buyIn: string;
  }

  /**
   * Protobuf JSON representation for JoinPokerGameRequest
   */
  export interface AsProtobufJSON {
    username: string;
    buyIn: string;
  }
}

/**
 * Message implementation for online.niepowazni.poker.JoinPokerGameResponse
 */
export class JoinPokerGameResponse implements GrpcMessage {
  static id = 'online.niepowazni.poker.JoinPokerGameResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new JoinPokerGameResponse();
    JoinPokerGameResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: JoinPokerGameResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: JoinPokerGameResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    JoinPokerGameResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: JoinPokerGameResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of JoinPokerGameResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<JoinPokerGameResponse.AsObject>) {
    _value = _value || {};
    JoinPokerGameResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    JoinPokerGameResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): JoinPokerGameResponse.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): JoinPokerGameResponse.AsProtobufJSON {
    return {};
  }
}
export module JoinPokerGameResponse {
  /**
   * Standard JavaScript object representation for JoinPokerGameResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for JoinPokerGameResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for online.niepowazni.poker.PokerGameHello
 */
export class PokerGameHello implements GrpcMessage {
  static id = 'online.niepowazni.poker.PokerGameHello';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PokerGameHello();
    PokerGameHello.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PokerGameHello) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PokerGameHello,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    PokerGameHello.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PokerGameHello,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PokerGameHello to deeply clone from
   */
  constructor(_value?: RecursivePartial<PokerGameHello.AsObject>) {
    _value = _value || {};
    PokerGameHello.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PokerGameHello.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PokerGameHello.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PokerGameHello.AsProtobufJSON {
    return {};
  }
}
export module PokerGameHello {
  /**
   * Standard JavaScript object representation for PokerGameHello
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for PokerGameHello
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for online.niepowazni.poker.GameAction
 */
export class GameAction implements GrpcMessage {
  static id = 'online.niepowazni.poker.GameAction';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GameAction();
    GameAction.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GameAction) {
    _instance.type = _instance.type || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GameAction,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GameAction.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: GameAction, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeEnum(1, _instance.type);
    }
  }

  private _type: onlineNiepowazniPoker000.PlayerActionType;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GameAction to deeply clone from
   */
  constructor(_value?: RecursivePartial<GameAction.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    GameAction.refineValues(this);
  }
  get type(): onlineNiepowazniPoker000.PlayerActionType {
    return this._type;
  }
  set type(value: onlineNiepowazniPoker000.PlayerActionType) {
    this._type = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GameAction.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GameAction.AsObject {
    return {
      type: this.type
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GameAction.AsProtobufJSON {
    return {
      type:
        onlineNiepowazniPoker000.PlayerActionType[
          this.type === null || this.type === undefined ? 0 : this.type
        ]
    };
  }
}
export module GameAction {
  /**
   * Standard JavaScript object representation for GameAction
   */
  export interface AsObject {
    type: onlineNiepowazniPoker000.PlayerActionType;
  }

  /**
   * Protobuf JSON representation for GameAction
   */
  export interface AsProtobufJSON {
    type: string;
  }
}

/**
 * Message implementation for online.niepowazni.poker.GameActionResponse
 */
export class GameActionResponse implements GrpcMessage {
  static id = 'online.niepowazni.poker.GameActionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GameActionResponse();
    GameActionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GameActionResponse) {
    _instance.code = _instance.code || 0;
    _instance.description = _instance.description || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GameActionResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.code = _reader.readEnum();
          break;
        case 2:
          _instance.description = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GameActionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GameActionResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.code) {
      _writer.writeEnum(1, _instance.code);
    }
    if (_instance.description) {
      _writer.writeString(2, _instance.description);
    }
  }

  private _code: onlineNiepowazniPoker000.GameActionResponseCode;
  private _description: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GameActionResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GameActionResponse.AsObject>) {
    _value = _value || {};
    this.code = _value.code;
    this.description = _value.description;
    GameActionResponse.refineValues(this);
  }
  get code(): onlineNiepowazniPoker000.GameActionResponseCode {
    return this._code;
  }
  set code(value: onlineNiepowazniPoker000.GameActionResponseCode) {
    this._code = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GameActionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GameActionResponse.AsObject {
    return {
      code: this.code,
      description: this.description
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GameActionResponse.AsProtobufJSON {
    return {
      code:
        onlineNiepowazniPoker000.GameActionResponseCode[
          this.code === null || this.code === undefined ? 0 : this.code
        ],
      description: this.description
    };
  }
}
export module GameActionResponse {
  /**
   * Standard JavaScript object representation for GameActionResponse
   */
  export interface AsObject {
    code: onlineNiepowazniPoker000.GameActionResponseCode;
    description: string;
  }

  /**
   * Protobuf JSON representation for GameActionResponse
   */
  export interface AsProtobufJSON {
    code: string;
    description: string;
  }
}
