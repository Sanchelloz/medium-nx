import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popular-tags-state.interface';

export const popularTagsFeatureSelector =
    createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading,
);

export const popularTagsDataSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.data,
);

export const errorsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.error,
);
