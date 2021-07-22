import { NgModule } from "@angular/core";
import {SharedModule} from "../../shared/module/sharedModule";
import { RouterModule, Routes } from "@angular/router";

import { FormLogInComponent } from "./formLogIn.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: FormLogInComponent}
]

@NgModule({
  declarations: [
    FormLogInComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,

  ],
  providers: [],
})

export class FormLogInModule { }
