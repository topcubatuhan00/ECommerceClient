import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import * as jQuery from 'jquery';
const $ = jQuery.default;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerceClient';
}
