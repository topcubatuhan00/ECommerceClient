import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

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

	ngOnInit(){
		// $.get("https://localhost:7198/api/Product", (data: any) => {
		// 	console.log(data);
		// })
	}

}


