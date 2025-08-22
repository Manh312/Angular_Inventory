// src/app/redux/store.ts
import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './reducers/index';
import { InventoryEffects } from './effects/inventory.effects';

export const reduxProviders: ApplicationConfig['providers'] = [
  provideStore(reducers),
  provideEffects([InventoryEffects])
];
