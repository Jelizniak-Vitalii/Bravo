import { NgModule} from "@angular/core";
import { SharedModule} from "../shared/module/sharedModule";
import {NgxDropzoneModule} from "ngx-dropzone";
import {SortObjectKeysModule} from "../shared/pipe/sortObjectKeysModule";
import { RouterModule} from "@angular/router";

import { CatalogComponent } from "./catalog.component";
import { BtnReplaceCatalogComponent } from "./btnReplaceCatalog/btnReplaceCatalog.component";
import { EditProductComponent } from "./editCatalog/editProduct.component";
import { AddProductComponent } from "./addProduct/addProduct.component";
import { ReplaceCatalogComponent } from "./replaceCatalog/replaceCatalog.component";
import { DeleteProductComponent } from "./deleteProduct/deleteProduct.component";
import { BtnAddProductComponent } from "./btnAddProduct/btnAddProduct.component";

const routes = [
  {
    path: '', component: CatalogComponent, children: [
      { path: 'editProduct', component: EditProductComponent },
      { path: 'replaceCatalog', component: ReplaceCatalogComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'deleteProduct', component: DeleteProductComponent }
    ]
  }
]

@NgModule({
  declarations: [
    CatalogComponent,
    EditProductComponent,
    ReplaceCatalogComponent,
    AddProductComponent,
    DeleteProductComponent,
    BtnReplaceCatalogComponent,
    BtnAddProductComponent,



  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxDropzoneModule,
    SortObjectKeysModule,

  ],
  providers: [],
})

export class CatalogModule {
}
