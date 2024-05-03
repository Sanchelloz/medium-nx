import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from '../../../auth/store/selectors';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'md-feed-toggler',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './feed-toggler.component.html',
    styleUrl: './feed-toggler.component.scss',
})
export class FeedTogglerComponent implements OnInit {
    @Input({ required: true, alias: 'tagName' }) tagNameProps: string | null;
    public isLoggedIn$: Observable<boolean>;
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    private initializeValues() {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    }
}
