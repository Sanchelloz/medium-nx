import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { registerAction } from '../../store/actions/register.actions';
import { Observable } from 'rxjs';
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/auth-interfaces';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

@Component({
    selector: 'md-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public authForm: FormGroup<{
        username: FormControl<string>;
        email: FormControl<string>;
        password: FormControl<string>;
    }>;
    public isSubmitting$: Observable<boolean>;
    public backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(
        private store: Store,
        private fb: FormBuilder,
    ) {}

    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm() {
        this.authForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    public onSubmitForm(): void {
        console.log('authForm', this.authForm.value);

        const request: RegisterRequestInterface = {
            user: this.authForm.getRawValue(),
        };

        console.log('registerAction ', registerAction({ request }));

        this.store.dispatch(registerAction({ request }));
    }

    private initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }
}
