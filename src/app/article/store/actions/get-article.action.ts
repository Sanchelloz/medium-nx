import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { ArticleInterface } from '../../../shared/types/article.interface';

export const getArticleAction = createAction(
    ActionTypes.Get_Article,
    props<{ urlSlug: string }>(),
);
export const getArticleSuccessAction = createAction(
    ActionTypes.Get_Article_success,
    props<{ article: ArticleInterface }>(),
);
export const getArticleFailureAction = createAction(
    ActionTypes.Get_Article_failure,
    //props<{ url: string }>,
);
