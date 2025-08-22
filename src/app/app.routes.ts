import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { InventoryListComponent } from './features/pages/inventory-list/inventory-list.component';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inventory', component: InventoryListComponent },
  { path: '**', component: NotFound }
];
