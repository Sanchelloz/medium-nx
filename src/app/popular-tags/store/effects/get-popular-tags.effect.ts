import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {
    getPopularTagsAction,
    getPopularTagsFailureAction,
    getPopularTagsSuccessAction,
} from '../actions/get-current-user.action';
import { PopularTagsService } from '../../services/popular-tags.service';
import { PopularTagsInterface } from '../../types/popular-tags.interface';

@Injectable()
export class GetPopularTagsEffect {
    public getPopularTags$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPopularTagsAction),
            switchMap(() => {
                return this.popularTagsService.getPopularTags().pipe(
                    map((popularTags: PopularTagsInterface) => {
                        console.log(popularTags);

                        return getPopularTagsSuccessAction({ popularTags });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(getPopularTagsFailureAction());
                    }),
                );
            }),
        );
    });

    constructor(
        private actions$: Actions,
        private popularTagsService: PopularTagsService,
    ) {}
}
