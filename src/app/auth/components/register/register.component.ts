import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerAction } from '../../store/actions/register.actions';

@Component({
    selector: 'md-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public authForm: FormGroup;

    constructor(
        private store: Store,
        private fb: FormBuilder,
    ) {}

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        this.authForm = this.fb.group({
            userName: ['', Validators.required],
            email: '',
            password: '',
        });
    }

    public onSubmitForm() {
        console.log(this.authForm.value);
        this.store.dispatch(registerAction(this.authForm.value));
    }
}
