import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/get-feed.action';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import {
    errorsSelector,
    feedDataSelector,
    isLoadingSelector,
} from '../../store/selectors';
import { environment } from '../../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import queryString from 'query-string';

@Component({
    selector: 'md-feed',
    standalone: false,
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
    @Input({ required: true, alias: 'apiUrl' }) apiUrlProps = '';

    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    public feedData$: Observable<GetFeedResponseInterface | null>;
    public limit = environment.limit;
    public baseUrl = '';
    public currentPage = 1;
    private readonly destroy$: DestroyRef = inject(DestroyRef);

    constructor(
        private store: Store,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
    }

    private initializeValues(): void {
        this.baseUrl = this.router.url.split('?')[0];
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorsSelector));
        this.feedData$ = this.store.pipe(select(feedDataSelector));
    }

    private fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = queryString.parseUrl(this.apiUrlProps);
        const stringifiedParams = queryString.stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query,
        });
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
    }

    private initializeListeners(): void {
        this.activatedRoute.queryParams
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe({
                next: (params) => {
                    this.currentPage = +params['page'] || 1;
                    this.fetchFeed();
                },
            });
    }
}
