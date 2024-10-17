import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
    getArticleAction,
    getArticleFailureAction,
    getArticleSuccessAction,
} from '../actions/get-article.action';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import { ArticleInterface } from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
    public getArticle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getArticleAction),
            switchMap(({ urlSlug }) => {
                return this.sharedArticleService.getArticle(urlSlug).pipe(
                    map((article: ArticleInterface) => {
                        return getArticleSuccessAction({ article });
                    }),
                    catchError(() => of(getArticleFailureAction())),
                );
            }),
        );
    });

    constructor(
        private readonly actions$: Actions,
        private readonly sharedArticleService: SharedArticleService,
    ) {}
}
