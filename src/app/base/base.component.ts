import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
	
	constructor(private _spinner : NgxSpinnerService){}

	showScanner(){
		this._spinner.show();

		setTimeout(() => {
            this._spinner.hide();
        }, 1000);
	}

	hideScanner(){
		this._spinner.hide();
	}

}
