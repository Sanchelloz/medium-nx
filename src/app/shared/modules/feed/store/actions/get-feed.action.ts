import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

export const getFeedAction = createAction(
    ActionTypes.Get_feed,
    props<{ url: string }>(),
);
export const getFeedSuccessAction = createAction(
    ActionTypes.Get_feed_success,
    props<{ feed: GetFeedResponseInterface }>(),
);
export const getFeedFailureAction = createAction(
    ActionTypes.Get_feed_failure,
    //props<{ url: string }>,
);
