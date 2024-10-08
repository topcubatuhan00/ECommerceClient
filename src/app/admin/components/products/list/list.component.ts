import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list _product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType } from '../../../../services/admin/alertify.service';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [MatTableModule, MatPaginatorModule],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent {

	constructor(
		private _service: ProductService,
		_spinner: NgxSpinnerService,
		private _alertify: AlertifyService
	) {
		super(_spinner)
	}

	displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
	dataSource: MatTableDataSource<List_Product> = new MatTableDataSource();
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	async getProducts() {
		this.showScanner();

		const allProducts = await this._service.readProduct(
			this.paginator ? this.paginator.pageIndex : 0,
			this.paginator ? this.paginator.pageSize : 5,
			() => this.hideScanner(),
			errorMessage => this._alertify.message(errorMessage, MessageType.Error)
		);

		if (allProducts) {
			this.dataSource = new MatTableDataSource<List_Product>(allProducts.data);
			if (this.paginator) {
				this.paginator.length = allProducts.totalCount;
			}
		} else {
			this._alertify.message('Ürünler alınamadı.', MessageType.Error);
			this.dataSource.data = []; // Veri olmadığında tabloyu temizle
			if (this.paginator) {
				this.paginator.length = 0;
			}
		}
	}

	async pageChanged() {
		await this.getProducts();
	}

	async ngOnInit() {
		await this.getProducts();
	}
}