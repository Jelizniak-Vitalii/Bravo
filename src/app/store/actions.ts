import { createAction, props } from '@ngrx/store';

export namespace CustomerState {
  export const customersState = createAction(
    "CUSTOMERS_STATE",
    props<{ customersState: [] }>()
  )
}

export namespace MenuState {
  export const menuState = createAction(
    "MENU_STATE",
    props<{ menuState: boolean }>()
  )
}
