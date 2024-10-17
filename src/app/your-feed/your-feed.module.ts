import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerComponent } from '../shared/components/feed-toggler/feed-toggler.component';
import { YourFeedComponent } from './components/global-feed/your-feed.component';

const routes: Routes = [{ path: 'feed', component: YourFeedComponent }];

@NgModule({
    declarations: [YourFeedComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerComponent,
        PopularTagsModule,
        FeedTogglerComponent,
    ],
})
export class YourFeedModule {}
