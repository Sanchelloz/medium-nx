import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ArticleComponent } from './components/feed/article.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';
import { GetArticleEffect } from './store/effects/get-article.effect';

@NgModule({
    declarations: [ArticleComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterLink,
        ErrorMessageComponent,
        LoadingComponent,
        NgOptimizedImage,
    ],
    exports: [ArticleComponent],
    providers: [SharedArticleService],
})
export class ArticleModule {}
