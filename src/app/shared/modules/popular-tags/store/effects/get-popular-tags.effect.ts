import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
    getPopularTagsAction,
    getPopularTagsFailureAction,
    getPopularTagsSuccessAction,
} from '../actions/get-current-user.action';
import { PopularTagsService } from '../../services/popular-tags.service';
import { GetPopularTagsResponseInterface } from '../../types/get-popular-tags-response.interface';

@Injectable()
export class GetPopularTagsEffect {
    public getPopularTags$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPopularTagsAction),
            switchMap(() => {
                return this.popularTagsService.getPopularTags().pipe(
                    map((popularTags: GetPopularTagsResponseInterface) => {
                        return getPopularTagsSuccessAction({ popularTags });
                    }),
                    catchError(() => {
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
