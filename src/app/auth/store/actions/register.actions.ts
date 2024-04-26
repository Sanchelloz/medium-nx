import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { RegisterRequestInterface } from '../../types/auth-interfaces';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const registerAction = createAction(
    ActionTypes.Register,
    props<{ request: RegisterRequestInterface }>(),
);
export const registerSuccessAction = createAction(
    ActionTypes.Register_success,
    props<{ currentUser: CurrentUserInterface }>(),
);
export const registerFailureAction = createAction(
    ActionTypes.Register_failure,
    props<{ errors: BackendErrorsInterface }>(),
);
