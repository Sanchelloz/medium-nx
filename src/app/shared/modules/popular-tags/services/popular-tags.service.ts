import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    public getPopularTags(): Observable<GetPopularTagsResponseInterface> {
        const url = `${environment.apiUrl}/tags`;

        return this.http.get<GetPopularTagsResponseInterface>(url);
    }
}
