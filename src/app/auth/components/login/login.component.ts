import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from '../../store/selectors';
import { LoginRequestInterface } from '../../types/auth-interfaces';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
    selector: 'md-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup<{
        email: FormControl<string>;
        password: FormControl<string>;
    }>;
    public isSubmitting$: Observable<boolean>;
    public backendErrors$: Observable<BackendErrorsInterface | null>;
    private readonly destroy$: DestroyRef = inject(DestroyRef);

    constructor(
        private store: Store,
        private fb: FormBuilder,
    ) {}

    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    public onSubmitForm(): void {
        console.log('loginForm', this.loginForm.value);

        const request: LoginRequestInterface = {
            user: this.loginForm.getRawValue(),
        };

        console.log('registerAction ', loginAction({ request }));

        this.store.dispatch(loginAction({ request }));
    }

    private initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }
}
