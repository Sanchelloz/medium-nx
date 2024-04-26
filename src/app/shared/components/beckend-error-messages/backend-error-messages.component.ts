import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
    selector: 'md-backend-error-messages',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './backend-error-messages.component.html',
    styleUrl: './backend-error-messages.component.scss',
})
export class BackendErrorMessagesComponent implements OnInit {
    @Input({ alias: 'backendErrors', required: true })
    backendErrorsProps!: BackendErrorsInterface | null;
    public errorMessages: { name: string; message: string }[];

    ngOnInit(): void {
        this.errorMessages = Object.entries(this.backendErrorsProps).map(
            ([key, value]) => {
                return { name: key, message: value.join(', ') };
            },
        );
    }
}
