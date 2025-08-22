import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-empty-message',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './empty-message.html',
  styleUrl: './empty-message.scss'
})
export class EmptyMessage {
  @Input() message: string = 'No data available.';
}
