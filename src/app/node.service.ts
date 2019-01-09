import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ArticleData } from './article/article.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

@Injectable()
export class NodeService {
	private url = 'http://localhost:3000/api/links';
	articleData: ArticleData;
	links: ArticleData[];
	tag: string[];

	constructor(private httpClient: HttpClient) {}

	getLinks(): Observable<ArticleData[]> {
		return this.httpClient.get<ArticleData[]>(this.url).pipe(catchError(this.handleError));
	}

	handleError(err: HttpErrorResponse) {
		return throwError('U have an error');
	}

	addLink(nothing: ArticleData): Observable<ArticleData> {
		return this.httpClient.post<ArticleData>(this.url, nothing).pipe(catchError(this.handleError));
	}

	getTags(): Observable<string[]> {
		return this.httpClient.get<string[]>('http://localhost:3000/api/links/tags').pipe(catchError(this.handleError));
	}

	deleteTag(id: number): Observable<any> {
		const urldelete = this.url + '/' + String(id); // DELETE api/heroes/42
		console.log(urldelete);
		return this.httpClient.delete(urldelete).pipe(catchError(this.handleError));
	}
}
