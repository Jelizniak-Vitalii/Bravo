import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {UpdateService} from "../../shared/services/updateService";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './editCustomer.component.html',
  styleUrls: ['./editCustomer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private  http: HttpClient,
    private dialog: MatDialog,
    private updateCustomerService: UpdateService

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      customerNo: new FormControl(this.data.customerNo),
      userName: new FormControl(this.data.userName),
      deliveryAddress: new FormControl(this.data.deliveryAddress),
      mon: new FormControl(this.data.days.mon),
      tue: new FormControl(this.data.days.tue),
      wed: new FormControl(this.data.days.wed),
      thu: new FormControl(this.data.days.thu),
      fri: new FormControl(this.data.days.fri),
      sat: new FormControl(this.data.days.sat),
      sun: new FormControl(this.data.days.sun),
      email: new FormControl(this.data.email),
      customerId: new FormControl(this.data.customerId)
    })
  }

  submit(): void {
    this.http.post('http://localhost:3000/updateUsers/post', this.form.value)
      .subscribe()
    this.updateCustomerService.update.next();
    this.dialog.closeAll();
  }

  clear(): void {
    this.form.reset()
  }


}
