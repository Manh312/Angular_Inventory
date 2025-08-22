import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as InventoryActions from '../actions/inventory.actions';
import { InventoryApiService } from '../../features/services/inventory-api.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' }) // Đảm bảo injectable ở root
export class InventoryEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.loadInventoryStatus),
      mergeMap(() =>
        this.api.getInventoryStatus().pipe(
          map(status => InventoryActions.loadInventoryStatusSuccess({ status })),
          catchError(err => of(InventoryActions.loadInventoryStatusFailure({ error: String(err?.message || err) })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: InventoryApiService) {}
}