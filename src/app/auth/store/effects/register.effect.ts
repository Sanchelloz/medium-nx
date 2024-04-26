import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from '../actions/register.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { RegisterRequestInterface } from '../../types/auth-interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
    public register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }: { request: RegisterRequestInterface }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistenceService.set(
                            'accessToken',
                            currentUser.token,
                        );

                        return registerSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            registerFailureAction({
                                errors: errorResponse.error.errors,
                            }),
                        );
                    }),
                );
            }),
        );
    });

    public redirectAfterSubmit$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(registerSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('/');
                }),
            );
        },
        { dispatch: false },
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService,
        private router: Router,
    ) {}
}
