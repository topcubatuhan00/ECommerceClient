import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
// import { Product } from '../../../contracts/create_product';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { Create_Product } from '../../../contracts/create_product';

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
	}

	@ViewChild(ListComponent) listComponents!: ListComponent;

	createdProduct(createProduct: Create_Product){
		this.listComponents.getProducts();
	}

}
