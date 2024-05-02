import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FeedService } from './services/feed.service';

@NgModule({
    declarations: [FeedComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducers),
    ],
    exports: [FeedComponent],
    providers: [FeedService],
})
export class FeedModule {}
