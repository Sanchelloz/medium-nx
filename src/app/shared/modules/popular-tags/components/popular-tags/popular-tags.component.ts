import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPopularTagsAction } from '../../store/actions/get-current-user.action';
import { Observable } from 'rxjs';
import { GetPopularTagsResponseInterface } from '../../types/get-popular-tags-response.interface';
import {
    errorsSelector,
    isLoadingSelector,
    popularTagsDataSelector,
} from '../../store/selectors';

@Component({
    selector: 'md-popular-tags',
    standalone: false,
    templateUrl: './popular-tags.component.html',
    styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent implements OnInit {
    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    public popularTagsData$: Observable<GetPopularTagsResponseInterface | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
    }

    private initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorsSelector));
        this.popularTagsData$ = this.store.pipe(
            select(popularTagsDataSelector),
        );
    }

    private fetchData(): void {
        this.store.dispatch(getPopularTagsAction());
    }
}
