import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../types/current-user.interface';
import { select, Store } from '@ngrx/store';
import {
    currentUserSelector,
    isAnonymousSelector,
    isLoggedInSelector,
} from '../../../auth/store/selectors';

@Component({
    selector: 'md-header',
    standalone: true,
    imports: [CommonModule, RouterLink, NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    public isLoggedIn$: Observable<boolean>;
    public isAnonymous$: Observable<boolean>;
    public currentUser$: Observable<CurrentUserInterface | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}
