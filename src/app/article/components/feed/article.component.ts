import {
    Component,
    DestroyRef,
    inject,
    Input,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/get-article.action';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { errorsSelector, isLoadingSelector } from '../../store/selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import queryString from 'query-string';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'md-article',
    standalone: false,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    public feedData$: Observable<GetFeedResponseInterface | null>;
    public limit = environment.limit;
    public baseUrl = '';
    public currentPage = 1;
    private readonly destroy$: DestroyRef = inject(DestroyRef);

    constructor(
        private readonly store: Store,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) {}
    private _apiUrlProps = '';
    get apiUrlProps(): string {
        return this._apiUrlProps;
    }
    @Input({ required: true, alias: 'apiUrl' }) set apiUrlProps(val: string) {
        this._apiUrlProps = val;
        this.fetchFeed();
        console.log('apiUrlProps Input ', val);
    }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
    }

    ngOnChanges(changes: SimpleChanges): void {
        /*const isApiUrlChanged =
            !changes['apiUrlProps'].firstChange &&
            changes['apiUrlProps'].currentValue !==
                changes['apiUrlProps'].previousValue;

        if (isApiUrlChanged) {
            this.fetchFeed();
        }*/
    }

    private initializeValues(): void {
        this.baseUrl = this.router.url.split('?')[0];
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorsSelector));
        //this.feedData$ = this.store.pipe(select(articleDataSelector));
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

        this.store.dispatch(getArticleAction({ urlSlug: apiUrlWithParams }));
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
