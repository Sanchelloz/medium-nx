import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/get-feed.action';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import {
    errorsSelector,
    feedDataSelector,
    isLoadingSelector,
} from '../../store/selectors';

@Component({
    selector: 'md-feed',
    standalone: false,
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
    @Input({ required: true, alias: 'apiUrl' }) apiUrlProps = '';

    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    feedData$: Observable<GetFeedResponseInterface | null>;
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
    }

    private initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorsSelector));
        this.feedData$ = this.store.pipe(select(feedDataSelector));
    }

    private fetchData(): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
    }
}
