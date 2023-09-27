import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerAction } from '../../store/actions/register.actions';
import { Observable, Subject, takeUntil } from 'rxjs';
import { isSubmittedSelector } from '../../store/actions/selectors';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'md-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
    public authForm: FormGroup;
    public isSubmitted$: Observable<boolean>;
    private destroy$ = new Subject();

    constructor(
        private store: Store,
        private authService: AuthService,
        private fb: FormBuilder,
    ) {}

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

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
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }

    private initializeValues(): void {
        this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector));
    }
}
