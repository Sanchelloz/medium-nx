import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './auth/store/actions/get-current-user.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Medium Nx';

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(getCurrentUserAction());
    }
}
