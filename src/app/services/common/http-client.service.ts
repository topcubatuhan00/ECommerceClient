import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpClientService {

	constructor(private _http: HttpClient) { }

	baseUrl: string = "https://localhost:7198/api";

	private generateUrl(requestParams: Partial<RequestParams>): string {
		return `${requestParams.difficultBaseUrl ? requestParams.difficultBaseUrl : this.baseUrl}/${requestParams.
			controller}${requestParams.action ? `/${requestParams.action}` : ""}`
	}

	get<T>(requestParams: Partial<RequestParams>, id?: string): Observable<T> {
		let url: string = "";
		url = requestParams.fullEndPoint ? requestParams.fullEndPoint : `${this.generateUrl(requestParams)}${id ? `/${id}` : ''}`;

		return this._http.get<T>(url, { headers: requestParams.headers });

	}

	post<T>(requestParams: Partial<RequestParams>, body: Partial<T>): Observable<T> {
		let url: string = "";
		url = requestParams.fullEndPoint ? requestParams.fullEndPoint : `${this.generateUrl(requestParams)}`;

		return this._http.post<T>(url, body, { headers: requestParams.headers });
	}

	put<T>(requestParams: Partial<RequestParams>, body: Partial<T>): Observable<T> {
		let url: string = "";
		url = requestParams.fullEndPoint ? requestParams.fullEndPoint : `${this.generateUrl(requestParams)}`;

		return this._http.put<T>(url, body, { headers: requestParams.headers });
	}

	delete<T>(requestParams: Partial<RequestParams>, id: string): Observable<T> {
		let url: string = "";
		url = requestParams.fullEndPoint ? requestParams.fullEndPoint : `${this.generateUrl(requestParams)}/${id}`;
	
		return this._http.delete<T>(url, { headers: requestParams.headers });
	}

}

export class RequestParams {
	controller?: string
	action?: string
	headers?: HttpHeaders
	difficultBaseUrl?: string
	fullEndPoint?: string
}