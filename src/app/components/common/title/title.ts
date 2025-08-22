import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() icon?: string;
}
