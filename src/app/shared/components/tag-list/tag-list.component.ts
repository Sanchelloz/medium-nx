import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagType } from '../../types/popular-tag-type';

@Component({
    selector: 'md-tag-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tag-list.component.html',
    styleUrl: './tag-list.component.scss',
})
export class TagListComponent implements OnInit {
    @Input({ required: true, alias: 'tags' }) tagsProps: PopularTagType[];

    ngOnInit(): void {
        console.log('tagsProps ', this.tagsProps);
    }
}
