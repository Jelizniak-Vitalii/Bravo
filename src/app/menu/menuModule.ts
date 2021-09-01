import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/module/sharedModule";
import { MenuComponent } from "./menu.component";

const routes: Routes = [
  {path: '', component: MenuComponent }
]

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    MenuComponent
  ]
})

export class MenuModule { }


