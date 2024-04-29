import { AuthStateInterface } from '../../types/auth-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from './register.actions';
import {
    loginAction,
    loginFailureAction,
    loginSuccessAction,
} from './login.action';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import {
    getCurrentUserAction,
    getCurrentUserFailureAction,
    getCurrentUserSuccessAction,
} from './get-current-user.action';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        }),
    ),
    on(
        registerSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        }),
    ),
    on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: false,
            validationErrors: action.errors,
        }),
    ),
    on(loginAction, (state: AuthStateInterface) => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
    })),
    on(
        loginSuccessAction,
        (
            state: AuthStateInterface,
            action: { currentUser: CurrentUserInterface },
        ) => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
            isLoggedIn: true,
            validationErrors: null,
        }),
    ),
    on(
        loginFailureAction,
        (
            state: AuthStateInterface,
            action: { errors: BackendErrorsInterface },
        ) => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: false,
            currentUser: null,
            validationErrors: action.errors,
        }),
    ),
    on(
        getCurrentUserAction,
        (state: AuthStateInterface): AuthStateInterface => ({
            ...state,
            isLoading: true,
        }),
    ),
    on(
        getCurrentUserSuccessAction,
        (
            state: AuthStateInterface,
            action: { currentUser: CurrentUserInterface },
        ): AuthStateInterface => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        }),
    ),
    on(
        getCurrentUserFailureAction,
        (state: AuthStateInterface): AuthStateInterface => ({
            ...state,
            isLoading: false,
            isLoggedIn: false,
            currentUser: null,
        }),
    ),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
