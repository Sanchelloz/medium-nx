import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export const registerAction = createAction(
    ActionTypes.register,
    props<{ userName: string; email: string; password: string }>(),
);
