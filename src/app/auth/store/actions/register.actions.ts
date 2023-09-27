import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { RegisterRequestInterface } from '../../types/auth-interfaces';

export const registerAction = createAction(
    ActionTypes.register,
    props<RegisterRequestInterface>(),
);
