import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InventoryState } from '../reducers/inventory.reducer';

export const selectInventoryState = createFeatureSelector<InventoryState>('inventory');

export const selectInventoryStatus = createSelector(
  selectInventoryState,
  (state) => state.status
);

export const selectInventoryLoading = createSelector(
  selectInventoryState,
  (state) => state.loading
);

export const selectInventoryError = createSelector(
  selectInventoryState,
  (state) => state.error
);
