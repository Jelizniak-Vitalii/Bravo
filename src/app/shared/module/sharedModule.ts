import { NgModule } from "@angular/core";
import { LogoComponent } from "../../logo/logo.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LogoComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
