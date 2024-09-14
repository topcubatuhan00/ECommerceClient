import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';



@Component({
	selector: 'app-layout',
	standalone: true,
	imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterOutlet, MatSidenavModule],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.css'
})
export class LayoutComponent {

	constructor(private _alertify: AlertifyService) { }
	ngOnInit() {
		// this._alertify.message('Hello World', MessageType.Error);
	}

}
