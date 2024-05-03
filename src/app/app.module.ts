import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { PersistenceService } from './shared/services/persistence.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { PopularTagsModule } from './popular-tags/popular-tags.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AuthModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({ router: routerReducer }, {}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
        HeaderComponent,
        GlobalFeedModule,
        StoreRouterConnectingModule.forRoot(),
        PopularTagsModule,
    ],
    providers: [
        PersistenceService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
