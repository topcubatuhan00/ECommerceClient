import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from '../../../base/base.component';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css'
})
export class ProductsComponent extends BaseComponent {
	constructor(spinner: NgxSpinnerService) {
		super(spinner);
	}
}
