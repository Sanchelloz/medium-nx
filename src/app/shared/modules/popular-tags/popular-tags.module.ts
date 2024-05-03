import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { StoreModule } from '@ngrx/store';
import { popularTagsReducers } from './store/reducers';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [PopularTagsComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetPopularTagsEffect]),
        StoreModule.forFeature('popularTags', popularTagsReducers),
        ErrorMessageComponent,
        LoadingComponent,
        RouterLink,
    ],
    exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
