import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { UpdateService } from "../../shared/services/updateService";
import { MatDialog } from "@angular/material/dialog";
import { CatalogHttpService } from "../../shared/services/catalog/catalogHttpService";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-add-product',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private updateService: UpdateService,
    private dialog: MatDialog,
    private catalogHttpService: CatalogHttpService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productCode: new FormControl(''),
      productName: new FormControl(''),
      unit: new FormControl(''),
      price: new FormControl(''),
      select: new FormControl(''),
    })
  }

  addProduct(): void {
    this.catalogHttpService.addProduct('http://localhost:3000/Catalog/add', {value: this.form.value})
      .subscribe((el:any) => {
        console.log(el)

      })
    this.updateService.changeData(true)
    this.dialog.closeAll()
    this.form.reset();
    this.updateService.update.next()
    setTimeout(() => {
      this.updateService.changeData(false)
    }, 4000)
  }

}
