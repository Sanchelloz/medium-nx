import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../types/get-feed-response.interface';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FeedService {
    constructor(private http: HttpClient) {}

    public getFeed(url: string): Observable<GetFeedResponseInterface> {
        const fullUrl = environment.apiUrl + url;

        return this.http.get<GetFeedResponseInterface>(fullUrl);
    }
}
