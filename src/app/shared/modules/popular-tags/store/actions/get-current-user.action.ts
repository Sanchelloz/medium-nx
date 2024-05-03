import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { GetPopularTagsResponseInterface } from '../../types/get-popular-tags-response.interface';

export const getPopularTagsAction = createAction(ActionTypes.Get_popular_tags);
export const getPopularTagsSuccessAction = createAction(
    ActionTypes.Get_popular_tags_success,
    props<{ popularTags: GetPopularTagsResponseInterface }>(),
);
export const getPopularTagsFailureAction = createAction(
    ActionTypes.Get_popular_tags_failure,
);
