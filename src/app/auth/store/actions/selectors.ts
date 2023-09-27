import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../../types/auth-interfaces';

export const authFeatureSelector =
    createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittedSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitted,
);
