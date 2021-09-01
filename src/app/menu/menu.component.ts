import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Store} from "@ngrx/store";
import {CustomerState} from "../store/selectors";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeMenu: boolean;

  constructor(
    private route: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(CustomerState.menuState)
      .subscribe(el => this.activeMenu = el)
  }

  logOut(): void {
    this.route.navigate(['/formRegistration']);
    localStorage.removeItem('token');
  }
}
