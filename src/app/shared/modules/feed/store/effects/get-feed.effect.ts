import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
    getFeedAction,
    getFeedFailureAction,
    getFeedSuccessAction,
} from '../actions/get-feed.action';
import { FeedService } from '../../services/feed.service';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

@Injectable()
export class GetFeedEffect {
    public getFeed$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getFeedAction),
            switchMap(({ url }) => {
                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponseInterface) => {
                        return getFeedSuccessAction({ feed });
                    }),
                    catchError(() => of(getFeedFailureAction())),
                );
            }),
        );
    });

    constructor(
        private actions$: Actions,
        private feedService: FeedService,
    ) {}
}
