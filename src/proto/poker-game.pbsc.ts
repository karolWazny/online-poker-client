/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './poker-game.pb';
import { GRPC_POKER_GAME_SERVICE_CLIENT_SETTINGS } from './poker-game.pbconf';
/**
 * Service client implementation for online.niepowazni.poker.PokerGameService
 */
@Injectable({ providedIn: 'any' })
export class PokerGameServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /online.niepowazni.poker.PokerGameService/observeEvents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Event>>
     */
    observeEvents: (
      requestData: thisProto.PokerGameHello,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Event>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/online.niepowazni.poker.PokerGameService/observeEvents',
        requestData,
        requestMetadata,
        requestClass: thisProto.PokerGameHello,
        responseClass: thisProto.Event
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_POKER_GAME_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'online.niepowazni.poker.PokerGameService',
      settings
    );
  }

  /**
   * Server streaming @/online.niepowazni.poker.PokerGameService/observeEvents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Event>
   */
  observeEvents(
    requestData: thisProto.PokerGameHello,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Event> {
    return this.$raw
      .observeEvents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
