import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

export const getCurrentUserAction = createAction(ActionTypes.Get_current_user);
export const getCurrentUserSuccessAction = createAction(
    ActionTypes.Get_current_user_success,
    props<{ currentUser: CurrentUserInterface }>(),
);
export const getCurrentUserFailureAction = createAction(
    ActionTypes.Get_current_user_failure,
);
