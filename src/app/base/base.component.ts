import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
	
	constructor(private _spinner : NgxSpinnerService){}

	showScanner(){
		this._spinner.show();
	}

	hideScanner(){
		this._spinner.hide();
	}

}
