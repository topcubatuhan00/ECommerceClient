import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list _product';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private _http: HttpClientService) { }

	createProduct(product: Create_Product, successCallback?: any, errorCallback?: (errorMessage: string) => void) {
		this._http.post({ controller: "Product" }, product)
			.subscribe((data) => {
				if (successCallback) successCallback();
			}, (errorResponse: HttpErrorResponse) => {
				const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
				let message = "";
				_error.forEach((v) => {
					v.value.forEach((_v) => {
						message += `${_v}<br>`
					});
				});
				if (errorCallback) errorCallback(message);
			});
	}

	async readProduct(page: number = 0, size: number = 5, successCallback?: any, errorCallback?: (errorMessage: string) => void) {
		const promiseData = this._http.get<{totalCount: number, data: List_Product[]}>({
			controller: "Product",
			queryString: `page=${page}&size=${size}`
		}).toPromise();

		promiseData.then(d => successCallback()).catch((e: HttpErrorResponse) => {
			if (errorCallback) {
				errorCallback(e.message);
			}
		});

		return await promiseData;
	}
}
