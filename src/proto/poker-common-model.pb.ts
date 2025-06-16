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
export enum PlayerTag {
  FOLDED = 0,
  ALL_IN = 1
}
export enum MessageType {
  PING = 0,
  EVENT = 1
}
export enum PlayerActionType {
  CHECK = 0,
  FOLD = 1,
  BET = 2,
  CALL = 3
}
export enum GameActionResponseCode {
  OK = 0
}
/**
 * Message implementation for online.niepowazni.poker.Card
 */
export class Card implements GrpcMessage {
  static id = 'online.niepowazni.poker.Card';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Card();
    Card.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Card) {
    _instance.rank = _instance.rank || '';
    _instance.suit = _instance.suit || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Card, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rank = _reader.readString();
          break;
        case 2:
          _instance.suit = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Card.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Card, _writer: BinaryWriter) {
    if (_instance.rank) {
      _writer.writeString(1, _instance.rank);
    }
    if (_instance.suit) {
      _writer.writeString(2, _instance.suit);
    }
  }

  private _rank: string;
  private _suit: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Card to deeply clone from
   */
  constructor(_value?: RecursivePartial<Card.AsObject>) {
    _value = _value || {};
    this.rank = _value.rank;
    this.suit = _value.suit;
    Card.refineValues(this);
  }
  get rank(): string {
    return this._rank;
  }
  set rank(value: string) {
    this._rank = value;
  }
  get suit(): string {
    return this._suit;
  }
  set suit(value: string) {
    this._suit = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Card.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Card.AsObject {
    return {
      rank: this.rank,
      suit: this.suit
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
  ): Card.AsProtobufJSON {
    return {
      rank: this.rank,
      suit: this.suit
    };
  }
}
export module Card {
  /**
   * Standard JavaScript object representation for Card
   */
  export interface AsObject {
    rank: string;
    suit: string;
  }

  /**
   * Protobuf JSON representation for Card
   */
  export interface AsProtobufJSON {
    rank: string;
    suit: string;
  }
}
