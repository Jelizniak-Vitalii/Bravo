import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  customer: string;
  name: string;
  address: string;
  deliveryDays: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, customer: 'BB-123', name: 'Burger Bar', address: 'Main Street, 1234 Zurich', deliveryDays: 'Mon, Wed, Fri ' },
  { id: 2, customer: 'GZ-889', name: 'Gyoza SS', address: 'Second Street 3421 Geneva', deliveryDays: 'Tue, Thu, Sat ' },

];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  activeMenu: boolean = false;

  displayedColumns: string[] = [ 'customer', 'name', 'address', 'deliveryDays'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor(
  )
  { }

  ngOnInit(): void {

  }

  showMenu(): void {
    this.activeMenu = !this.activeMenu
  }

}
