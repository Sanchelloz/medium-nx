import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';
import { ArticleInterface } from '../types/article.interface';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor(private readonly http: HttpClient) {}

    public getArticle(urlSlug: string): Observable<ArticleInterface> {
        const fullUrl = `${environment.apiUrl}/articles/${urlSlug}`;

        return this.http
            .get<GetArticleResponseInterface>(fullUrl)
            .pipe(map((resp: GetArticleResponseInterface) => resp.article));
    }
}
