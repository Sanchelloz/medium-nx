import { Component } from '@angular/core';

@Component({
    selector: 'md-your-feed',
    standalone: false,
    templateUrl: './your-feed.component.html',
})
export class YourFeedComponent {
    public apiUrl = '/articles';
}
