import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FeedService } from './services/feed.service';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@NgModule({
    declarations: [FeedComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducers),
        RouterLink,
        NgOptimizedImage,
        ErrorMessageComponent,
        LoadingComponent,
    ],
    exports: [FeedComponent],
    providers: [FeedService],
})
export class FeedModule {}
