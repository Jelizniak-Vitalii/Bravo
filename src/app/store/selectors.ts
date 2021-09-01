
import { createFeatureSelector, createSelector} from "@ngrx/store";
import { State } from './reducer'

export namespace CustomerState {
  const state = createFeatureSelector<State>('state');
  export const customersState = createSelector(state, (state) => state.customersState);

  export const menuState = createSelector(state, (state) => state.menuState)

}
