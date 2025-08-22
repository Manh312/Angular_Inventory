import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.scss'
})
export class LoadingSpinner {

}
