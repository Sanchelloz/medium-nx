import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PopularTagsInterface } from '../types/popular-tags.interface';

@Injectable({
    providedIn: 'root',
})
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    public getPopularTags(): Observable<PopularTagsInterface> {
        const url = `${environment.apiUrl}/tags`;

        return this.http.get<PopularTagsInterface>(url);
    }
}
