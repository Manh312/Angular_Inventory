import { ActionReducerMap } from '@ngrx/store';
import { inventoryReducer, InventoryState } from './inventory.reducer';

export interface AppState {
  inventory: InventoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  inventory: inventoryReducer
};
