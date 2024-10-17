import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleStateInterface } from '../types/article-state.interface';

export const articleFeatureSelector =
    createFeatureSelector<ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState.isLoading,
);

export const articleDataSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState.data,
);

export const errorsSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState.error,
);
