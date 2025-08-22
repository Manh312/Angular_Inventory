import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

// Định nghĩa các màu sắc tương tự buttonColors trong React
const buttonColors = {
  primary: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
  success: { bg: 'bg-green-600', hover: 'hover:bg-green-700' },
  warning: { bg: 'bg-yellow-600', hover: 'hover:bg-yellow-700' },
  danger: { bg: 'bg-red-600', hover: 'hover:bg-red-700' },
} as const;

// Sử dụng interface CustomButtonProps làm kiểu cho inputs
interface CustomButtonProps {
  variantKey?: keyof typeof buttonColors; // 'primary' | 'success' | 'warning' | 'danger'
  to?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  [key: string]: any; // Cho phép truyền các props khác
}

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './button.html', // Sửa tên file template
})
export class Button {
  @Input() variantKey: CustomButtonProps['variantKey'] = 'primary';
  @Input() to: CustomButtonProps['to'];
  @Input() disabled: CustomButtonProps['disabled'];
  @Input() size: CustomButtonProps['size'] = 'medium';

  get buttonClasses(): string {
    const { bg, hover } = buttonColors[this.variantKey ?? 'primary'];
    const sizeClasses = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    }[this.size ?? 'medium'];
    return `${bg} ${hover} text-white rounded-lg transition-all duration-200 shadow-none hover:shadow-md hover:opacity-90 ${sizeClasses} ${this.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  }
}