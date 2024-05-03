import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { PopularTagsInterface } from '../../types/popular-tags.interface';

export const getPopularTagsAction = createAction(ActionTypes.Get_popular_tags);
export const getPopularTagsSuccessAction = createAction(
    ActionTypes.Get_popular_tags_success,
    props<{ popularTags: PopularTagsInterface }>(),
);
export const getPopularTagsFailureAction = createAction(
    ActionTypes.Get_popular_tags_failure,
);
