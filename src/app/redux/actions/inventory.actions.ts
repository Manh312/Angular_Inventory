import { createAction, props } from '@ngrx/store';
import { InventoryStatus } from '../../features/models/inventory-status.model';

export const loadInventoryStatus = createAction('[Inventory] Load Status');

export const loadInventoryStatusSuccess = createAction(
  '[Inventory] Load Status Success',
  props<{ status: InventoryStatus }>()
);

export const loadInventoryStatusFailure = createAction(
  '[Inventory] Load Status Failure',
  props<{ error: string }>()
);
