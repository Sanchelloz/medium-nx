import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from '../actions/register.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { RegisterRequestInterface } from '../../types/auth-interfaces';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {
    public register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }: { request: RegisterRequestInterface }) => {
                console.log(request);

                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
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

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) {}
}
