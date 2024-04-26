import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/actions/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesComponent } from '../shared/components/beckend-error-messages/backend-error-messages.component';
import { PersistenceService } from '../shared/services/persistence.service';

const routes: Routes = [
    { path: 'register', component: RegisterComponent, title: 'Register' },
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect]),
        BackendErrorMessagesComponent,
    ],
    providers: [AuthService, PersistenceService],
})
export class AuthModule {}
