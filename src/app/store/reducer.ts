export interface State {
  customersState: [];
  menuState: boolean;
}

const initialState: State = {
  customersState: [],
  menuState: false,
}

export const reducer = ( state = initialState, action: any): State => {
  switch (action.type) {
    case "CUSTOMERS_STATE":
     return {
       ...state,
       customersState: action.customersState
     }
    case "MENU_STATE":
      return {
        ...state,
        menuState: action.menuState
      }
    default: return state;
  }
}

