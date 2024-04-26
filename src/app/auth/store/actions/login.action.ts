import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { LoginRequestInterface } from '../../types/auth-interfaces';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const loginAction = createAction(
    ActionTypes.Login,
    props<{ request: LoginRequestInterface }>(),
);
export const loginSuccessAction = createAction(
    ActionTypes.Login_success,
    props<{ currentUser: CurrentUserInterface }>(),
);
export const loginFailureAction = createAction(
    ActionTypes.Login_failure,
    props<{ errors: BackendErrorsInterface }>(),
);
