import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { TagListComponent } from '../shared/components/tag-list/tag-list.component';

@NgModule({
    declarations: [PopularTagsComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetPopularTagsEffect]),
        StoreModule.forFeature('popularTags', reducers),
        ErrorMessageComponent,
        LoadingComponent,
        TagListComponent,
    ],
    exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
