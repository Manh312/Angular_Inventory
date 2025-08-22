import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Button } from '../button/button';

@Component({
  selector: 'app-error-message',
  imports: [CommonModule, MatIconModule, Button],
  templateUrl: './error-message.html',
  styleUrl: './error-message.scss'
})
export class ErrorMessage {
  @Input() message: string = 'An error occurred while loading inventory data.';
  @Output() retry = new EventEmitter<void>();
}
