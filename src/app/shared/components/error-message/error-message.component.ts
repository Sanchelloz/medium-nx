import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'md-error-message',
    standalone: true,
    imports: [CommonModule],
    template: '<div>{{messageProps}}</div>',
})
export class ErrorMessageComponent {
    @Input({ required: true, alias: 'message' }) messageProps =
        'Something went wrong.';
}
