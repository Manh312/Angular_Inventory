import { InventoryStatus } from '../inventory-status.model';
import { InventoryStatusResponseDto } from './inventory-status-response.dto';

export function mapToInventoryStatus(dto: InventoryStatusResponseDto): InventoryStatus {
  return {
    available: dto['available'] ?? 0,
    notAvailable: dto['Not Available'] ?? 0, // key có khoảng trắng & chữ hoa
    peric: dto['peric'] ?? 0,
    pending: dto['pending'] ?? 0,
    sold: dto['sold'] ?? 0
  };
}
