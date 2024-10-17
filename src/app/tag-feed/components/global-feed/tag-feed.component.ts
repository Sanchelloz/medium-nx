import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'md-tag-feed',
    standalone: false,
    templateUrl: './tag-feed.component.html',
})
export class TagFeedComponent implements OnInit {
    protected tagName = '';
    protected apiUrl = '';

    constructor(private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const baseUrl = '/articles?tag=';

        this.activatedRoute.params.subscribe((data: Params) => {
            console.log(data);

            this.tagName = data['slug'];
            this.apiUrl = baseUrl + this.tagName;
        });
    }
}
