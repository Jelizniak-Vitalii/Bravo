import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/module/sharedModule";
import {RouterModule } from "@angular/router";

import { HttpClientModule} from "@angular/common/http";
import {CustomersComponent} from "./customers.component";
import {EditCustomerComponent} from "./editCustomer/editCustomer.component";
import {SortObjectKeysModule} from "../shared/pipe/sortObjectKeysModule";


const routes = [
  {
    path: '', component: CustomersComponent, children: [
      { path: 'editCustomer', component: EditCustomerComponent}
    ]
  }
]

@NgModule({
  declarations: [
    CustomersComponent,
    EditCustomerComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

    HttpClientModule,
    SortObjectKeysModule,
  ],
  providers: [],
  exports: [

  ]
})

export class CustomersModule {
}
