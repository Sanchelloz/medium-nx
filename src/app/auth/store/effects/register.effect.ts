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

@Injectable()
export class RegisterEffect {
    public register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                console.log(request);

                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return registerSuccessAction({ currentUser });
                    }),
                    catchError((error) => {
                        return of(registerFailureAction({ error }));
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
