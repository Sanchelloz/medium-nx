import { Injectable } from '@angular/core';
import {
    AuthResponseInterface,
    RegisterRequestInterface,
} from '../types/auth-interfaces';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}/users`;

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map((response: AuthResponseInterface) => response.user));
    }
}
