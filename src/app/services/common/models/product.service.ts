import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private _http: HttpClientService) { }

	createProduct(product: Create_Product, successCallback?: any) {
		this._http.post({ controller: "Product" }, product)
			.subscribe((data) => {
				successCallback();
				console.log(data);
			}
			)
	}
}
