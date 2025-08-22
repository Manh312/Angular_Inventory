import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  imports: [CommonModule, NgIf],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss'
})
export class PageLayout {
  @Input() maxWidth: string = '1200px';
  @Input() elevation: number = 3;
  @Input() padding: { xs: number; sm: number; md: number; lg: number } = { xs: 2, sm: 4, md: 6, lg: 8 };
  @Input() margin: { xs: number; sm: number; md: number } = { xs: 1, sm: 2, md: 3 };
}
