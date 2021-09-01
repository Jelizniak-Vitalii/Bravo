import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-edit-catalog',
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.scss']
})
export class EditProductComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productCode: new FormControl(''),
      unit: new FormControl(''),
      price: new FormControl(''),
      select: new FormControl(''),
      exclusive: new FormControl(''),
      replacementsProduct: new FormControl(''),
    })
  }


}
