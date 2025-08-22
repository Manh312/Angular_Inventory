import { createReducer, on } from '@ngrx/store';
import * as InventoryActions from '../actions/inventory.actions';
import { InventoryStatus } from '../../features/models/inventory-status.model';

export interface InventoryState {
  status: InventoryStatus | null;
  loading: boolean;
  error: string | null;
}

export const initialState: InventoryState = {
  status: null,
  loading: false,
  error: null
};

export const inventoryReducer = createReducer(
  initialState,
  on(InventoryActions.loadInventoryStatus, (state) => ({ ...state, loading: true, error: null })),
  on(InventoryActions.loadInventoryStatusSuccess, (state, { status }) => ({
    ...state,
    loading: false,
    status
  })),
  on(InventoryActions.loadInventoryStatusFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
