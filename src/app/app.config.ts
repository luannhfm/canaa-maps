import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { PoHttpRequestModule } from '@po-ui/ng-components';
export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([ PoHttpRequestModule, ProtheusLibCoreModule]),
  ],
};
