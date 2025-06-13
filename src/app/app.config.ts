import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {GrpcCoreModule} from '@ngx-grpc/core';
import {GrpcWebClientModule} from '@ngx-grpc/grpc-web-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(GrpcCoreModule.forRoot()),
    importProvidersFrom(GrpcWebClientModule.forRoot({
      settings: {
        host: 'http://localhost:8080'
      }
    })),
  ]
};
