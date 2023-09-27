import { AuthStateInterface } from '../../types/auth-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from './register.actions';

const initialState: AuthStateInterface = {
    isSubmitted: false,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitted: true,
        }),
    ),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
