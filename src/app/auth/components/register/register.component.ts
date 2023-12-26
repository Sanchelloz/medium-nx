import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerAction } from '../../store/actions/register.actions';
import { Observable } from 'rxjs';
import { isSubmittedSelector } from '../../store/actions/selectors';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/auth-interfaces';

@Component({
    selector: 'md-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public authForm: FormGroup;
    public isSubmitted$: Observable<boolean>;
    private readonly destroy$: DestroyRef = inject(DestroyRef);

    constructor(
        private store: Store,
        private authService: AuthService,
        private fb: FormBuilder,
    ) {}

    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm() {
        this.authForm = this.fb.group({
            username: ['', Validators.required],
            email: '',
            password: '',
        });
    }

    public onSubmitForm(): void {
        console.log('authForm', this.authForm.value);
        console.log('registerAction ', registerAction(this.authForm.value));

        const request: RegisterRequestInterface = {
            user: this.authForm.value,
        };

        this.store.dispatch(registerAction({ request }));
    }

    private initializeValues(): void {
        this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
    }
}
