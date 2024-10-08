import { Component, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, DelayTime, MessageType, Position } from '../../../../services/admin/alertify.service';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-create',
	standalone: true,
	imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
	templateUrl: './create.component.html',
	styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent {

	constructor(private _service: ProductService, _spinner: NgxSpinnerService, private _alertify: AlertifyService) {
		super(_spinner);
	}

	@Output() createdProduct : EventEmitter<Create_Product> = new EventEmitter();

	create(txtName: HTMLInputElement, txtPrice: HTMLInputElement, txtStock: HTMLInputElement){
		this.showScanner();
		const create_product: Create_Product = new Create_Product();
		create_product.name = txtName.value
		create_product.price = parseInt(txtPrice.value)
		create_product.stock = parseInt(txtStock.value)

		this._service.createProduct(create_product, () => {
			this.hideScanner();
			this._alertify.message("Product created successfully!", MessageType.Success);
			this.createdProduct.emit(create_product);
		}, errorMessage => {this.hideScanner(); this._alertify.message(errorMessage, MessageType.Error, Position.BottomLeft, DelayTime.LongDelay)});
	}

}	
