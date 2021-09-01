import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/module/sharedModule";
import { RouterModule, Routes } from "@angular/router";

import {OrdersComponent} from "./orders.component";


const routes: Routes = [
  { path: '', component: OrdersComponent }
]

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})

export class OrdersModule { }
