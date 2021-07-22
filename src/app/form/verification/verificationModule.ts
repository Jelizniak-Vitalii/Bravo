import { NgModule } from "@angular/core";

import {VerificationComponent} from "../verification/verification.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/module/sharedModule";

const routes: Routes = [
  {path: '', component: VerificationComponent }
]

@NgModule({
  declarations: [
    VerificationComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
})

export class VerificationModule { }
