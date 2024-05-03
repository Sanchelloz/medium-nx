import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPopularTagsAction } from '../../store/actions/get-current-user.action';
import { Observable } from 'rxjs';
import { PopularTagsInterface } from '../../types/popular-tags.interface';
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
    public popularTagsData$: Observable<PopularTagsInterface | null>;

    constructor(private store: Store) {}
    ngOnInit(): void {
        this.initializeValues();

        this.store.dispatch(getPopularTagsAction());
    }

    private initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorsSelector));
        this.popularTagsData$ = this.store.pipe(
            select(popularTagsDataSelector),
        );
    }
}
