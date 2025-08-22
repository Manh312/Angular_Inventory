import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // For action navigation

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.html',
})
export class Card {
  @Input() label: string = '';
  @Input() value: number | string = 0;
  @Input() color: string = '#000000'; // Default color
}