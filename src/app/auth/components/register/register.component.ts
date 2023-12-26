import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerAction } from '../../store/actions/register.actions';
import { Observable } from 'rxjs';
import { isSubmittedSelector } from '../../store/actions/selectors';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
            userName: ['', Validators.required],
            email: '',
            password: '',
        });
    }

    public onSubmitForm(): void {
        console.log(this.authForm.value);
        this.store.dispatch(registerAction(this.authForm.value));

        this.authService
            .register(this.authForm.value)
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe({
                next: (currentUser) => console.log('currentUser ', currentUser),
            });
    }

    private initializeValues(): void {
        this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
    }
}
