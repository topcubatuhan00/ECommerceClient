import { Component } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-customers',
	standalone: true,
	imports: [],
	templateUrl: './customers.component.html',
	styleUrl: './customers.component.css'
})
export class CustomersComponent extends BaseComponent {
	
	constructor( _spinner: NgxSpinnerService){
		super(_spinner)
	}

	ngOnInit(){
		this.showScanner();
	}
}
