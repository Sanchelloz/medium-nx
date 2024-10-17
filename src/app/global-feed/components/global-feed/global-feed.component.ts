import { Component } from '@angular/core';

@Component({
    selector: 'md-global-feed',
    standalone: false,
    templateUrl: './global-feed.component.html',
})
export class GlobalFeedComponent {
    public apiUrl = '/articles';
}
