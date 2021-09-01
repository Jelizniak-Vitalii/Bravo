import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-btn-add-customers',
  templateUrl: './btnAddCustomers.component.html',
  styleUrls: ['./btnAddCustomers.component.scss']
})
export class BtnAddCustomersComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  redirectTo(): void {
    this.route.navigate(['./mainContent/customers/editCustomer']);
  }

}
