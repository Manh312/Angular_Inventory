import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { InventoryStatus } from '../../models/inventory-status.model';
import { selectInventoryError, selectInventoryLoading, selectInventoryStatus } from '../../../redux/selectors/inventory.selectors';
import { loadInventoryStatus } from '../../../redux/actions/inventory.actions';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { EmptyMessage } from '../../../components/common/empty-message/empty-message';
import { Card } from '../../../components/common/card/card';
import { ErrorMessage } from '../../../components/common/error-message/error-message';
import { LoadingSpinner } from '../../../components/common/loading-spinner/loading-spinner';
import { PageLayout } from '../../../components/layout/page-layout/page-layout';
import { Title } from '../../../components/common/title/title';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    Card,
    EmptyMessage,
    ErrorMessage,
    LoadingSpinner,
    PageLayout,
    Title
  ],
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'] // nên là styleUrls
})
export class InventoryListComponent implements OnInit {
  status$: Observable<InventoryStatus | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  cardItems$: Observable<{ label: string; value: number | undefined; color: string; action?: string }[]>;

  constructor(private store: Store) {
    this.status$ = this.store.select(selectInventoryStatus);
    this.loading$ = this.store.select(selectInventoryLoading);
    this.error$ = this.store.select(selectInventoryError);
    this.cardItems$ = this.status$.pipe(
      map(status => status ? [
        { label: 'Sold', value: status.sold, color: '#4caf50' },
        { label: 'Unsold', value: status.notAvailable, color: '#f44336'},
        { label: 'Pending', value: status.pending, color: '#ff9800' },
        { label: 'Available', value: status.available, color: '#2196f3'},
        { label: 'Not Available', value: status.notAvailable, color: '#9e9e9e'},
        { label: 'Peric', value: status.peric, color: '#673ab7'},
      ] : [])
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadInventoryStatus());
  }

  retry() {
    this.store.dispatch(loadInventoryStatus());
  }
}

