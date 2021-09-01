import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/module/sharedModule";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from "./main.component";

const routes: Routes = [

  { path: '', component: MainComponent, children: [
      { path: 'customers', loadChildren: () => import('../customers/customersModule').then(m => m.CustomersModule) },
      { path: 'catalog', loadChildren: () => import('../catalog/catalogModule').then(m => m.CatalogModule) },
      { path:'orders', loadChildren: () => import('../orders/ordersModule').then(m => m.OrdersModule) },
    ]}
]

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [],
})

export class MenuModule { }


