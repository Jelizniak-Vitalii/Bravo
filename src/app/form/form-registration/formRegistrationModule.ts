import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {SharedModule} from "../../shared/module/sharedModule";

import { FormRegistrationComponent } from "./formRegistration.component";

const routes: Routes = [
  {path: '', component: FormRegistrationComponent}
]

@NgModule({
  declarations: [
    FormRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
})

export class FormRegistrationModule { }
