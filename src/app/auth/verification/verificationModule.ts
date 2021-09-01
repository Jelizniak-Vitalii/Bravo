import { NgModule } from "@angular/core";

import {VerificationComponent} from "../verification/verification.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/module/sharedModule";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "../../shared/interceptor/authInterceptor";

const routes: Routes = [
  {path: '', component: VerificationComponent }
]

@NgModule({
  declarations: [
    VerificationComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})

export class VerificationModule { }
