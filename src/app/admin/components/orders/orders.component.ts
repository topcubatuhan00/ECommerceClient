import { Component } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from '../../../base/base.component';

@Component({
	selector: 'app-orders',
	standalone: true,
	imports: [NgxSpinnerModule],
	templateUrl: './orders.component.html',
	styleUrl: './orders.component.css'
})
export class OrdersComponent extends BaseComponent {
	constructor(spinner: NgxSpinnerService) { super(spinner); }
}
