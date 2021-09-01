import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { MenuState } from "../../../store/actions";

@Injectable({
  providedIn: 'root'
})

export class ShowMenuService {

  constructor( public store: Store ) { }

  changeStateMenu(value: boolean) {
   return this.store.dispatch(MenuState.menuState ({
      menuState: value
    }));
  }
}
