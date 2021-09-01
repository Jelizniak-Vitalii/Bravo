import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { EditCustomerComponent } from "./editCustomer/editCustomer.component";
import { UpdateService } from "../shared/services/updateService";
import { GetUserDataService } from "../shared/services/customer/getUserDataService";
import { environment } from "../../environments/environment";
import {ShowMenuService} from "../shared/services/menu/showMenuService";

export interface PeriodicElement {
  customerId: number;
  _id: string;
  email: string;
  customerNo: string;
  userName: string;
  deliveryAddress: string;
  deliveryDays: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  activeMenu: boolean = false;
  displayedColumns: string[] = [ 'customerNo', 'userName', 'deliveryAddress', 'deliveryDays' ];

  dataSource = new MatTableDataSource<PeriodicElement>([])
  status = localStorage.getItem('token');

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private updateCustomerService: UpdateService,
    private getUserDataApiService: GetUserDataService,
    private showMenuService: ShowMenuService
  ) { }

  ngOnInit(): void {
    this.renderUserData( '', this.status)
    this.updateCustomerService.update.subscribe((res) => {
      this.renderUserData( '', this.status)
    })

  }

  renderUserData( event: any, status: string | null): void {
    this.getUserDataApiService.usersData( environment.GET_USERS_DATA,
      { event: event.target ? event.target.value : '',  token: status })
      .subscribe((el: any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(el);
        this.dataSource.paginator = this.paginator;
      })
  }

  choiceCustomer(row: {}): void {
    this.dialog.open(EditCustomerComponent, {
      data: row
    })
  }

  showMenu(): void {
    this.activeMenu = !this.activeMenu
    this.showMenuService.changeStateMenu(this.activeMenu)
  }
}





