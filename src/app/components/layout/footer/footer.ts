import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../common/button/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, Button],
  templateUrl: './footer.html',
  styleUrls: []
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  email: string = '';
  emailError: boolean = false;

  subscribe() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.email)) {
      this.emailError = false;
      console.log('Subscribed:', this.email); // Replace with your subscription logic
      this.email = '';
    } else {
      this.emailError = true;
    }
  }
}