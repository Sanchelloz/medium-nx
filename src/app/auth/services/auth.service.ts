import { Injectable } from '@angular/core';
import {
    AuthResponseInterface,
    LoginRequestInterface,
    RegisterRequestInterface,
} from '../types/auth-interfaces';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public register(
        data: RegisterRequestInterface,
    ): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}/users`;

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser));
    }

    public login(
        data: LoginRequestInterface,
    ): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}/users/login`;

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser));
    }

    public getCurrentUser(): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}/user`;

        return this.http
            .get<AuthResponseInterface>(url)
            .pipe(map(this.getUser));
    }

    private getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }
}
