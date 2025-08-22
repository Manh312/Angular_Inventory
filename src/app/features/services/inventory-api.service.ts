import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { InventoryStatus } from '../models/inventory-status.model';
import { InventoryStatusResponseDto } from '../models/dto/inventory-status-response.dto';
import { mapToInventoryStatus } from '../models/dto/inventory-status.mapper';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InventoryApiService {
  // TODO: thay endpoint thật của bạn
  private readonly apiUrl = environment.apiUrl + '/inventory';

  constructor(private http: HttpClient) {}

  getInventoryStatus(): Observable<InventoryStatus> {
    return this.http.get<InventoryStatusResponseDto>(this.apiUrl).pipe(
      map(mapToInventoryStatus)
    );
  }
}
