import { Component } from '@angular/core';
import { PasswordStrengthMeterComponent } from './common/password-strength-meter/password-strength-meter.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordStrengthMeterComponent, MainLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  password: string = '';
}
