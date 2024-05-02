import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'md-loading',
    standalone: true,
    imports: [CommonModule],
    template: '<div>Loading...</div>',
})
export class LoadingComponent {}
