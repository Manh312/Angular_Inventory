import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thêm CommonModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, RouterModule], // Thêm CommonModule vào đây
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Inventory', link: '/inventory' },
  ];
}