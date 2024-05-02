import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'md-pagination',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
    @Input({ required: true, alias: 'currentPage' }) currentPageProps: number;
    @Input({ required: true, alias: 'limit' }) limitProps: number;
    @Input({ required: true, alias: 'total' }) totalProps: number;
    @Input({ required: true, alias: 'url' }) urlProps: string;

    public pagesCount: number;
    public pages: number[];

    constructor(private utilsService: UtilsService) {}

    ngOnInit(): void {
        this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
        this.pages = this.utilsService.range(1, this.pagesCount);
    }
}
