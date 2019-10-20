import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartSystemComponent } from '../cart-system/cart-system.component';
import { DashboardComponent } from '../dashboards/dashboard/dashboard.component';




export const routes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'cart',           component: CartSystemComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }
  


