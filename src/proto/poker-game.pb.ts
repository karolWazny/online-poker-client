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
export enum MessageType {
  EVENT = 0,
  PING = 1
}
export enum GameEventType {
  STREET_UPDATE = 0
}
/**
 * Message implementation for online.niepowazni.poker.Event
 */
export class Event implements GrpcMessage {
  static id = 'online.niepowazni.poker.Event';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Event();
    Event.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Event) {
    _instance.metatype = _instance.metatype || 0;
    _instance.eventData = _instance.eventData || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Event, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.metatype = _reader.readEnum();
          break;
        case 2:
          _instance.eventData = new GameEvent();
          _reader.readMessage(
            _instance.eventData,
            GameEvent.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Event.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Event, _writer: BinaryWriter) {
    if (_instance.metatype) {
      _writer.writeEnum(1, _instance.metatype);
    }
    if (_instance.eventData) {
      _writer.writeMessage(
        2,
        _instance.eventData as any,
        GameEvent.serializeBinaryToWriter
      );
    }
  }

  private _metatype: MessageType;
  private _eventData?: GameEvent;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Event to deeply clone from
   */
  constructor(_value?: RecursivePartial<Event.AsObject>) {
    _value = _value || {};
    this.metatype = _value.metatype;
    this.eventData = _value.eventData
      ? new GameEvent(_value.eventData)
      : undefined;
    Event.refineValues(this);
  }
  get metatype(): MessageType {
    return this._metatype;
  }
  set metatype(value: MessageType) {
    this._metatype = value;
  }
  get eventData(): GameEvent | undefined {
    return this._eventData;
  }
  set eventData(value: GameEvent | undefined) {
    this._eventData = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Event.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Event.AsObject {
    return {
      metatype: this.metatype,
      eventData: this.eventData ? this.eventData.toObject() : undefined
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
  ): Event.AsProtobufJSON {
    return {
      metatype:
        MessageType[
          this.metatype === null || this.metatype === undefined
            ? 0
            : this.metatype
        ],
      eventData: this.eventData ? this.eventData.toProtobufJSON(options) : null
    };
  }
}
export module Event {
  /**
   * Standard JavaScript object representation for Event
   */
  export interface AsObject {
    metatype: MessageType;
    eventData?: GameEvent.AsObject;
  }

  /**
   * Protobuf JSON representation for Event
   */
  export interface AsProtobufJSON {
    metatype: string;
    eventData: GameEvent.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for online.niepowazni.poker.GameEvent
 */
export class GameEvent implements GrpcMessage {
  static id = 'online.niepowazni.poker.GameEvent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GameEvent();
    GameEvent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GameEvent) {
    _instance.gameEventType = _instance.gameEventType || 0;
    _instance.communityCards = _instance.communityCards || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GameEvent,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.gameEventType = _reader.readEnum();
          break;
        case 2:
          const messageInitializer2 = new Card();
          _reader.readMessage(
            messageInitializer2,
            Card.deserializeBinaryFromReader
          );
          (_instance.communityCards = _instance.communityCards || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GameEvent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: GameEvent, _writer: BinaryWriter) {
    if (_instance.gameEventType) {
      _writer.writeEnum(1, _instance.gameEventType);
    }
    if (_instance.communityCards && _instance.communityCards.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.communityCards as any,
        Card.serializeBinaryToWriter
      );
    }
  }

  private _gameEventType: GameEventType;
  private _communityCards?: Card[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GameEvent to deeply clone from
   */
  constructor(_value?: RecursivePartial<GameEvent.AsObject>) {
    _value = _value || {};
    this.gameEventType = _value.gameEventType;
    this.communityCards = (_value.communityCards || []).map(m => new Card(m));
    GameEvent.refineValues(this);
  }
  get gameEventType(): GameEventType {
    return this._gameEventType;
  }
  set gameEventType(value: GameEventType) {
    this._gameEventType = value;
  }
  get communityCards(): Card[] | undefined {
    return this._communityCards;
  }
  set communityCards(value: Card[] | undefined) {
    this._communityCards = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GameEvent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GameEvent.AsObject {
    return {
      gameEventType: this.gameEventType,
      communityCards: (this.communityCards || []).map(m => m.toObject())
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
  ): GameEvent.AsProtobufJSON {
    return {
      gameEventType:
        GameEventType[
          this.gameEventType === null || this.gameEventType === undefined
            ? 0
            : this.gameEventType
        ],
      communityCards: (this.communityCards || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module GameEvent {
  /**
   * Standard JavaScript object representation for GameEvent
   */
  export interface AsObject {
    gameEventType: GameEventType;
    communityCards?: Card.AsObject[];
  }

  /**
   * Protobuf JSON representation for GameEvent
   */
  export interface AsProtobufJSON {
    gameEventType: string;
    communityCards: Card.AsProtobufJSON[] | null;
  }
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
