import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CatalogHttpService} from "../../shared/services/catalog/catalogHttpService";
import {environment} from "../../../environments/environment";
import {UpdateService} from "../../shared/services/updateService";

@Component({
  selector: 'app-delete-product',
  templateUrl: './deleteProduct.component.html',
  styleUrls: ['./deleteProduct.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private getCatalogData: CatalogHttpService,
    private updateCatalogs: UpdateService
  ) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.getCatalogData.deleteProduct( environment.DELETE_PRODUCT, { productId: this.data.productId } )
      .subscribe((el: any) => {
        this.dialog.closeAll()
      })
    this.updateCatalogs.update.next()

  }

}
