import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';

const routes = [{ path: '', component: GlobalFeedComponent }];

@NgModule({
    declarations: [GlobalFeedComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerComponent,
        PopularTagsModule,
    ],
})
export class GlobalFeedModule {}
