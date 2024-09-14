import { Component } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
// import { Product } from '../../../contracts/create_product';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [MatSidenavModule, CreateComponent, ListComponent],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css'
})
export class ProductsComponent extends BaseComponent {

	constructor(spinner: NgxSpinnerService, private _http: HttpClientService){
		super(spinner);	
	}

	ngOnInit(){

		// this._http.post({
		// 	controller: "Product"
		// }, {name:'Kalem',stock:'100', price:'20'}).subscribe();

		// this._http.post({
		// 	controller: "Product"
		// }, {name:'Defter',stock:'100', price:'40'}).subscribe();

		// this._http.post({
		// 	controller: "Product"
		// }, {name:'Kalem Kutu',stock:'50', price:'100'}).subscribe();

		// this._http.put({controller:"Product"}, {id: "f58fe211-83e3-42d9-9284-3fc81610abf4", name:"Kalemlik", stock: 14, price: 250}).subscribe();

		// this._http.delete({controller:"Product"}, "47c8dbae-a739-4581-81f9-bdbef9adf9e6").subscribe(data => console.log(data));

		// this._http.get<Product[]>({
		// 	 controller: "Product"
		// }).subscribe(data => {
		// 	console.log(data[0].name);
			
		// })
	}

}
