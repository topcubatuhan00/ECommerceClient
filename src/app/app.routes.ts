import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

export const routes: Routes = [
    {
        path: "admin", component: LayoutComponent, children : [
            {path: "customers", loadComponent: () => import("./admin/components/customers/customers.component").then(x => x.CustomersComponent)},
            {path: "products", loadComponent: () => import("./admin/components/products/products.component").then(x => x.ProductsComponent)},
            {path: "orders", loadComponent: () => import("./admin/components/orders/orders.component").then(x => x.OrdersComponent)},
            {path: "", loadComponent: () => import("./admin/components/dashboard/dashboard.component").then(x => x.DashboardComponent)}
        ]
    },
    {
        path: "", component: HomeComponent
    },
    {path: "baskets", loadComponent: () => import("./ui/components/baskets/baskets.component").then(x => x.BasketsComponent)},
    {path: "products", loadComponent: () => import("./ui/components/products/products.component").then(x => x.ProductsComponent)},
];
