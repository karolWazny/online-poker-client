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
export enum GameEventType {
  NOOP = 0,
  STREET_UPDATE = 1,
  PLAYER_TO_ACT = 2,
  PLAYER_ACTED = 3,
  NEW_DEAL = 4,
  PLAYER_JOINED = 5,
  PLAYER_DISCONNECTED = 6
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

  private _metatype: onlineNiepowazniPoker000.MessageType;
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
  get metatype(): onlineNiepowazniPoker000.MessageType {
    return this._metatype;
  }
  set metatype(value: onlineNiepowazniPoker000.MessageType) {
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
        onlineNiepowazniPoker000.MessageType[
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
    metatype: onlineNiepowazniPoker000.MessageType;
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
    _instance.possibleActions = _instance.possibleActions || [];
    _instance.action = _instance.action || undefined;
    _instance.newDealData = _instance.newDealData || undefined;
    _instance.newPlayerData = _instance.newPlayerData || undefined;
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
          const messageInitializer2 = new onlineNiepowazniPoker000.Card();
          _reader.readMessage(
            messageInitializer2,
            onlineNiepowazniPoker000.Card.deserializeBinaryFromReader
          );
          (_instance.communityCards = _instance.communityCards || []).push(
            messageInitializer2
          );
          break;
        case 3:
          const messageInitializer3 = new PlayerPossibleAction();
          _reader.readMessage(
            messageInitializer3,
            PlayerPossibleAction.deserializeBinaryFromReader
          );
          (_instance.possibleActions = _instance.possibleActions || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.action = new PlayerActionEvent();
          _reader.readMessage(
            _instance.action,
            PlayerActionEvent.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.newDealData = new NewDealData();
          _reader.readMessage(
            _instance.newDealData,
            NewDealData.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.newPlayerData = new NewPlayerData();
          _reader.readMessage(
            _instance.newPlayerData,
            NewPlayerData.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.affectedPlayer = _reader.readString();
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
        onlineNiepowazniPoker000.Card.serializeBinaryToWriter
      );
    }
    if (_instance.possibleActions && _instance.possibleActions.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.possibleActions as any,
        PlayerPossibleAction.serializeBinaryToWriter
      );
    }
    if (_instance.action) {
      _writer.writeMessage(
        4,
        _instance.action as any,
        PlayerActionEvent.serializeBinaryToWriter
      );
    }
    if (_instance.newDealData) {
      _writer.writeMessage(
        5,
        _instance.newDealData as any,
        NewDealData.serializeBinaryToWriter
      );
    }
    if (_instance.newPlayerData) {
      _writer.writeMessage(
        6,
        _instance.newPlayerData as any,
        NewPlayerData.serializeBinaryToWriter
      );
    }
    if (
      _instance.affectedPlayer !== undefined &&
      _instance.affectedPlayer !== null
    ) {
      _writer.writeString(7, _instance.affectedPlayer);
    }
  }

  private _gameEventType: GameEventType;
  private _communityCards?: onlineNiepowazniPoker000.Card[];
  private _possibleActions?: PlayerPossibleAction[];
  private _action?: PlayerActionEvent;
  private _newDealData?: NewDealData;
  private _newPlayerData?: NewPlayerData;
  private _affectedPlayer?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GameEvent to deeply clone from
   */
  constructor(_value?: RecursivePartial<GameEvent.AsObject>) {
    _value = _value || {};
    this.gameEventType = _value.gameEventType;
    this.communityCards = (_value.communityCards || []).map(
      m => new onlineNiepowazniPoker000.Card(m)
    );
    this.possibleActions = (_value.possibleActions || []).map(
      m => new PlayerPossibleAction(m)
    );
    this.action = _value.action
      ? new PlayerActionEvent(_value.action)
      : undefined;
    this.newDealData = _value.newDealData
      ? new NewDealData(_value.newDealData)
      : undefined;
    this.newPlayerData = _value.newPlayerData
      ? new NewPlayerData(_value.newPlayerData)
      : undefined;
    this.affectedPlayer = _value.affectedPlayer;
    GameEvent.refineValues(this);
  }
  get gameEventType(): GameEventType {
    return this._gameEventType;
  }
  set gameEventType(value: GameEventType) {
    this._gameEventType = value;
  }
  get communityCards(): onlineNiepowazniPoker000.Card[] | undefined {
    return this._communityCards;
  }
  set communityCards(value: onlineNiepowazniPoker000.Card[] | undefined) {
    this._communityCards = value;
  }
  get possibleActions(): PlayerPossibleAction[] | undefined {
    return this._possibleActions;
  }
  set possibleActions(value: PlayerPossibleAction[] | undefined) {
    this._possibleActions = value;
  }
  get action(): PlayerActionEvent | undefined {
    return this._action;
  }
  set action(value: PlayerActionEvent | undefined) {
    this._action = value;
  }
  get newDealData(): NewDealData | undefined {
    return this._newDealData;
  }
  set newDealData(value: NewDealData | undefined) {
    this._newDealData = value;
  }
  get newPlayerData(): NewPlayerData | undefined {
    return this._newPlayerData;
  }
  set newPlayerData(value: NewPlayerData | undefined) {
    this._newPlayerData = value;
  }
  get affectedPlayer(): string | undefined {
    return this._affectedPlayer;
  }
  set affectedPlayer(value?: string) {
    this._affectedPlayer = value;
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
      communityCards: (this.communityCards || []).map(m => m.toObject()),
      possibleActions: (this.possibleActions || []).map(m => m.toObject()),
      action: this.action ? this.action.toObject() : undefined,
      newDealData: this.newDealData ? this.newDealData.toObject() : undefined,
      newPlayerData: this.newPlayerData
        ? this.newPlayerData.toObject()
        : undefined,
      affectedPlayer: this.affectedPlayer
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
      ),
      possibleActions: (this.possibleActions || []).map(m =>
        m.toProtobufJSON(options)
      ),
      action: this.action ? this.action.toProtobufJSON(options) : null,
      newDealData: this.newDealData
        ? this.newDealData.toProtobufJSON(options)
        : null,
      newPlayerData: this.newPlayerData
        ? this.newPlayerData.toProtobufJSON(options)
        : null,
      affectedPlayer:
        this.affectedPlayer === null || this.affectedPlayer === undefined
          ? null
          : this.affectedPlayer
    };
  }
}
export module GameEvent {
  /**
   * Standard JavaScript object representation for GameEvent
   */
  export interface AsObject {
    gameEventType: GameEventType;
    communityCards?: onlineNiepowazniPoker000.Card.AsObject[];
    possibleActions?: PlayerPossibleAction.AsObject[];
    action?: PlayerActionEvent.AsObject;
    newDealData?: NewDealData.AsObject;
    newPlayerData?: NewPlayerData.AsObject;
    affectedPlayer?: string;
  }

  /**
   * Protobuf JSON representation for GameEvent
   */
  export interface AsProtobufJSON {
    gameEventType: string;
    communityCards: onlineNiepowazniPoker000.Card.AsProtobufJSON[] | null;
    possibleActions: PlayerPossibleAction.AsProtobufJSON[] | null;
    action: PlayerActionEvent.AsProtobufJSON | null;
    newDealData: NewDealData.AsProtobufJSON | null;
    newPlayerData: NewPlayerData.AsProtobufJSON | null;
    affectedPlayer: string | null;
  }
}

/**
 * Message implementation for online.niepowazni.poker.PlayerPossibleAction
 */
export class PlayerPossibleAction implements GrpcMessage {
  static id = 'online.niepowazni.poker.PlayerPossibleAction';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PlayerPossibleAction();
    PlayerPossibleAction.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PlayerPossibleAction) {
    _instance.actionType = _instance.actionType || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PlayerPossibleAction,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.actionType = _reader.readEnum();
          break;
        case 3:
          _instance.lowerBound = _reader.readInt64String();
          break;
        case 4:
          _instance.upperBound = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    PlayerPossibleAction.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PlayerPossibleAction,
    _writer: BinaryWriter
  ) {
    if (_instance.actionType) {
      _writer.writeEnum(1, _instance.actionType);
    }
    if (_instance.lowerBound !== undefined && _instance.lowerBound !== null) {
      _writer.writeInt64String(3, _instance.lowerBound);
    }
    if (_instance.upperBound !== undefined && _instance.upperBound !== null) {
      _writer.writeInt64String(4, _instance.upperBound);
    }
  }

  private _actionType: onlineNiepowazniPoker000.PlayerActionType;
  private _lowerBound?: string;
  private _upperBound?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PlayerPossibleAction to deeply clone from
   */
  constructor(_value?: RecursivePartial<PlayerPossibleAction.AsObject>) {
    _value = _value || {};
    this.actionType = _value.actionType;
    this.lowerBound = _value.lowerBound;
    this.upperBound = _value.upperBound;
    PlayerPossibleAction.refineValues(this);
  }
  get actionType(): onlineNiepowazniPoker000.PlayerActionType {
    return this._actionType;
  }
  set actionType(value: onlineNiepowazniPoker000.PlayerActionType) {
    this._actionType = value;
  }
  get lowerBound(): string | undefined {
    return this._lowerBound;
  }
  set lowerBound(value?: string) {
    this._lowerBound = value;
  }
  get upperBound(): string | undefined {
    return this._upperBound;
  }
  set upperBound(value?: string) {
    this._upperBound = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PlayerPossibleAction.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PlayerPossibleAction.AsObject {
    return {
      actionType: this.actionType,
      lowerBound: this.lowerBound,
      upperBound: this.upperBound
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
  ): PlayerPossibleAction.AsProtobufJSON {
    return {
      actionType:
        onlineNiepowazniPoker000.PlayerActionType[
          this.actionType === null || this.actionType === undefined
            ? 0
            : this.actionType
        ],
      lowerBound:
        this.lowerBound === null || this.lowerBound === undefined
          ? null
          : this.lowerBound,
      upperBound:
        this.upperBound === null || this.upperBound === undefined
          ? null
          : this.upperBound
    };
  }
}
export module PlayerPossibleAction {
  /**
   * Standard JavaScript object representation for PlayerPossibleAction
   */
  export interface AsObject {
    actionType: onlineNiepowazniPoker000.PlayerActionType;
    lowerBound?: string;
    upperBound?: string;
  }

  /**
   * Protobuf JSON representation for PlayerPossibleAction
   */
  export interface AsProtobufJSON {
    actionType: string;
    lowerBound: string | null;
    upperBound: string | null;
  }
}

/**
 * Message implementation for online.niepowazni.poker.PlayerActionEvent
 */
export class PlayerActionEvent implements GrpcMessage {
  static id = 'online.niepowazni.poker.PlayerActionEvent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PlayerActionEvent();
    PlayerActionEvent.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PlayerActionEvent) {
    _instance.actionType = _instance.actionType || 0;

    _instance.playerTags = _instance.playerTags || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PlayerActionEvent,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.actionType = _reader.readEnum();
          break;
        case 2:
          _instance.value = _reader.readInt64String();
          break;
        case 3:
          _instance.playerPot = _reader.readInt64String();
          break;
        case 4:
          _instance.playerStack = _reader.readInt64String();
          break;
        case 5:
          (_instance.playerTags = _instance.playerTags || []).push(
            ...(_reader.readPackedEnum() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    PlayerActionEvent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PlayerActionEvent,
    _writer: BinaryWriter
  ) {
    if (_instance.actionType) {
      _writer.writeEnum(1, _instance.actionType);
    }
    if (_instance.value !== undefined && _instance.value !== null) {
      _writer.writeInt64String(2, _instance.value);
    }
    if (_instance.playerPot !== undefined && _instance.playerPot !== null) {
      _writer.writeInt64String(3, _instance.playerPot);
    }
    if (_instance.playerStack !== undefined && _instance.playerStack !== null) {
      _writer.writeInt64String(4, _instance.playerStack);
    }
    if (_instance.playerTags && _instance.playerTags.length) {
      _writer.writePackedEnum(5, _instance.playerTags);
    }
  }

  private _actionType: onlineNiepowazniPoker000.PlayerActionType;
  private _value?: string;
  private _playerPot?: string;
  private _playerStack?: string;
  private _playerTags: onlineNiepowazniPoker000.PlayerTag[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PlayerActionEvent to deeply clone from
   */
  constructor(_value?: RecursivePartial<PlayerActionEvent.AsObject>) {
    _value = _value || {};
    this.actionType = _value.actionType;
    this.value = _value.value;
    this.playerPot = _value.playerPot;
    this.playerStack = _value.playerStack;
    this.playerTags = (_value.playerTags || []).slice();
    PlayerActionEvent.refineValues(this);
  }
  get actionType(): onlineNiepowazniPoker000.PlayerActionType {
    return this._actionType;
  }
  set actionType(value: onlineNiepowazniPoker000.PlayerActionType) {
    this._actionType = value;
  }
  get value(): string | undefined {
    return this._value;
  }
  set value(value?: string) {
    this._value = value;
  }
  get playerPot(): string | undefined {
    return this._playerPot;
  }
  set playerPot(value?: string) {
    this._playerPot = value;
  }
  get playerStack(): string | undefined {
    return this._playerStack;
  }
  set playerStack(value?: string) {
    this._playerStack = value;
  }
  get playerTags(): onlineNiepowazniPoker000.PlayerTag[] {
    return this._playerTags;
  }
  set playerTags(value: onlineNiepowazniPoker000.PlayerTag[]) {
    this._playerTags = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PlayerActionEvent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PlayerActionEvent.AsObject {
    return {
      actionType: this.actionType,
      value: this.value,
      playerPot: this.playerPot,
      playerStack: this.playerStack,
      playerTags: (this.playerTags || []).slice()
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
  ): PlayerActionEvent.AsProtobufJSON {
    return {
      actionType:
        onlineNiepowazniPoker000.PlayerActionType[
          this.actionType === null || this.actionType === undefined
            ? 0
            : this.actionType
        ],
      value:
        this.value === null || this.value === undefined ? null : this.value,
      playerPot:
        this.playerPot === null || this.playerPot === undefined
          ? null
          : this.playerPot,
      playerStack:
        this.playerStack === null || this.playerStack === undefined
          ? null
          : this.playerStack,
      playerTags: (this.playerTags || []).map(
        v => onlineNiepowazniPoker000.PlayerTag[v]
      )
    };
  }
}
export module PlayerActionEvent {
  /**
   * Standard JavaScript object representation for PlayerActionEvent
   */
  export interface AsObject {
    actionType: onlineNiepowazniPoker000.PlayerActionType;
    value?: string;
    playerPot?: string;
    playerStack?: string;
    playerTags: onlineNiepowazniPoker000.PlayerTag[];
  }

  /**
   * Protobuf JSON representation for PlayerActionEvent
   */
  export interface AsProtobufJSON {
    actionType: string;
    value: string | null;
    playerPot: string | null;
    playerStack: string | null;
    playerTags: string[];
  }
}

/**
 * Message implementation for online.niepowazni.poker.NewDealData
 */
export class NewDealData implements GrpcMessage {
  static id = 'online.niepowazni.poker.NewDealData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NewDealData();
    NewDealData.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NewDealData) {
    _instance.smallBlindPlayer = _instance.smallBlindPlayer || '';
    _instance.smallBlindStack = _instance.smallBlindStack || '0';
    _instance.bigBlindPlayer = _instance.bigBlindPlayer || '';
    _instance.bigBlindStack = _instance.bigBlindStack || '0';
    _instance.buttonPlayer = _instance.buttonPlayer || '';
    _instance.underTheGunPlayer = _instance.underTheGunPlayer || '';
    _instance.stack = _instance.stack || '0';
    _instance.bigBlind = _instance.bigBlind || '0';
    _instance.smallBlind = _instance.smallBlind || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NewDealData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.smallBlindPlayer = _reader.readString();
          break;
        case 2:
          _instance.smallBlindStack = _reader.readInt64String();
          break;
        case 3:
          _instance.bigBlindPlayer = _reader.readString();
          break;
        case 4:
          _instance.bigBlindStack = _reader.readInt64String();
          break;
        case 5:
          _instance.buttonPlayer = _reader.readString();
          break;
        case 6:
          _instance.underTheGunPlayer = _reader.readString();
          break;
        case 7:
          _instance.stack = _reader.readInt64String();
          break;
        case 8:
          _instance.bigBlind = _reader.readInt64String();
          break;
        case 9:
          _instance.smallBlind = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    NewDealData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NewDealData,
    _writer: BinaryWriter
  ) {
    if (_instance.smallBlindPlayer) {
      _writer.writeString(1, _instance.smallBlindPlayer);
    }
    if (_instance.smallBlindStack) {
      _writer.writeInt64String(2, _instance.smallBlindStack);
    }
    if (_instance.bigBlindPlayer) {
      _writer.writeString(3, _instance.bigBlindPlayer);
    }
    if (_instance.bigBlindStack) {
      _writer.writeInt64String(4, _instance.bigBlindStack);
    }
    if (_instance.buttonPlayer) {
      _writer.writeString(5, _instance.buttonPlayer);
    }
    if (_instance.underTheGunPlayer) {
      _writer.writeString(6, _instance.underTheGunPlayer);
    }
    if (_instance.stack) {
      _writer.writeInt64String(7, _instance.stack);
    }
    if (_instance.bigBlind) {
      _writer.writeInt64String(8, _instance.bigBlind);
    }
    if (_instance.smallBlind) {
      _writer.writeInt64String(9, _instance.smallBlind);
    }
  }

  private _smallBlindPlayer: string;
  private _smallBlindStack: string;
  private _bigBlindPlayer: string;
  private _bigBlindStack: string;
  private _buttonPlayer: string;
  private _underTheGunPlayer: string;
  private _stack: string;
  private _bigBlind: string;
  private _smallBlind: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NewDealData to deeply clone from
   */
  constructor(_value?: RecursivePartial<NewDealData.AsObject>) {
    _value = _value || {};
    this.smallBlindPlayer = _value.smallBlindPlayer;
    this.smallBlindStack = _value.smallBlindStack;
    this.bigBlindPlayer = _value.bigBlindPlayer;
    this.bigBlindStack = _value.bigBlindStack;
    this.buttonPlayer = _value.buttonPlayer;
    this.underTheGunPlayer = _value.underTheGunPlayer;
    this.stack = _value.stack;
    this.bigBlind = _value.bigBlind;
    this.smallBlind = _value.smallBlind;
    NewDealData.refineValues(this);
  }
  get smallBlindPlayer(): string {
    return this._smallBlindPlayer;
  }
  set smallBlindPlayer(value: string) {
    this._smallBlindPlayer = value;
  }
  get smallBlindStack(): string {
    return this._smallBlindStack;
  }
  set smallBlindStack(value: string) {
    this._smallBlindStack = value;
  }
  get bigBlindPlayer(): string {
    return this._bigBlindPlayer;
  }
  set bigBlindPlayer(value: string) {
    this._bigBlindPlayer = value;
  }
  get bigBlindStack(): string {
    return this._bigBlindStack;
  }
  set bigBlindStack(value: string) {
    this._bigBlindStack = value;
  }
  get buttonPlayer(): string {
    return this._buttonPlayer;
  }
  set buttonPlayer(value: string) {
    this._buttonPlayer = value;
  }
  get underTheGunPlayer(): string {
    return this._underTheGunPlayer;
  }
  set underTheGunPlayer(value: string) {
    this._underTheGunPlayer = value;
  }
  get stack(): string {
    return this._stack;
  }
  set stack(value: string) {
    this._stack = value;
  }
  get bigBlind(): string {
    return this._bigBlind;
  }
  set bigBlind(value: string) {
    this._bigBlind = value;
  }
  get smallBlind(): string {
    return this._smallBlind;
  }
  set smallBlind(value: string) {
    this._smallBlind = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NewDealData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NewDealData.AsObject {
    return {
      smallBlindPlayer: this.smallBlindPlayer,
      smallBlindStack: this.smallBlindStack,
      bigBlindPlayer: this.bigBlindPlayer,
      bigBlindStack: this.bigBlindStack,
      buttonPlayer: this.buttonPlayer,
      underTheGunPlayer: this.underTheGunPlayer,
      stack: this.stack,
      bigBlind: this.bigBlind,
      smallBlind: this.smallBlind
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
  ): NewDealData.AsProtobufJSON {
    return {
      smallBlindPlayer: this.smallBlindPlayer,
      smallBlindStack: this.smallBlindStack,
      bigBlindPlayer: this.bigBlindPlayer,
      bigBlindStack: this.bigBlindStack,
      buttonPlayer: this.buttonPlayer,
      underTheGunPlayer: this.underTheGunPlayer,
      stack: this.stack,
      bigBlind: this.bigBlind,
      smallBlind: this.smallBlind
    };
  }
}
export module NewDealData {
  /**
   * Standard JavaScript object representation for NewDealData
   */
  export interface AsObject {
    smallBlindPlayer: string;
    smallBlindStack: string;
    bigBlindPlayer: string;
    bigBlindStack: string;
    buttonPlayer: string;
    underTheGunPlayer: string;
    stack: string;
    bigBlind: string;
    smallBlind: string;
  }

  /**
   * Protobuf JSON representation for NewDealData
   */
  export interface AsProtobufJSON {
    smallBlindPlayer: string;
    smallBlindStack: string;
    bigBlindPlayer: string;
    bigBlindStack: string;
    buttonPlayer: string;
    underTheGunPlayer: string;
    stack: string;
    bigBlind: string;
    smallBlind: string;
  }
}

/**
 * Message implementation for online.niepowazni.poker.NewPlayerData
 */
export class NewPlayerData implements GrpcMessage {
  static id = 'online.niepowazni.poker.NewPlayerData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NewPlayerData();
    NewPlayerData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NewPlayerData) {
    _instance.username = _instance.username || '';
    _instance.buyIn = _instance.buyIn || '0';
    _instance.updatedPlayersList = _instance.updatedPlayersList || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NewPlayerData,
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
        case 3:
          (_instance.updatedPlayersList =
            _instance.updatedPlayersList || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    NewPlayerData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NewPlayerData,
    _writer: BinaryWriter
  ) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.buyIn) {
      _writer.writeInt64String(2, _instance.buyIn);
    }
    if (_instance.updatedPlayersList && _instance.updatedPlayersList.length) {
      _writer.writeRepeatedString(3, _instance.updatedPlayersList);
    }
  }

  private _username: string;
  private _buyIn: string;
  private _updatedPlayersList: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NewPlayerData to deeply clone from
   */
  constructor(_value?: RecursivePartial<NewPlayerData.AsObject>) {
    _value = _value || {};
    this.username = _value.username;
    this.buyIn = _value.buyIn;
    this.updatedPlayersList = (_value.updatedPlayersList || []).slice();
    NewPlayerData.refineValues(this);
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
  get updatedPlayersList(): string[] {
    return this._updatedPlayersList;
  }
  set updatedPlayersList(value: string[]) {
    this._updatedPlayersList = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NewPlayerData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NewPlayerData.AsObject {
    return {
      username: this.username,
      buyIn: this.buyIn,
      updatedPlayersList: (this.updatedPlayersList || []).slice()
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
  ): NewPlayerData.AsProtobufJSON {
    return {
      username: this.username,
      buyIn: this.buyIn,
      updatedPlayersList: (this.updatedPlayersList || []).slice()
    };
  }
}
export module NewPlayerData {
  /**
   * Standard JavaScript object representation for NewPlayerData
   */
  export interface AsObject {
    username: string;
    buyIn: string;
    updatedPlayersList: string[];
  }

  /**
   * Protobuf JSON representation for NewPlayerData
   */
  export interface AsProtobufJSON {
    username: string;
    buyIn: string;
    updatedPlayersList: string[];
  }
}
