import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

declare var $: any;

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterModule, NgxSpinnerModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'ECommerceClient';

	ngOnInit() {

	}

}


