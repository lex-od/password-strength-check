import { Component, Input } from '@angular/core';

type SectionColor = 'gray' | 'red' | 'yellow' | 'green';
type ColorClassMap = Record<SectionColor, string>;

const colorClassMap: ColorClassMap = {
  gray: 'strength-section--gray',
  red: 'strength-section--red',
  yellow: 'strength-section--yellow',
  green: 'strength-section--green',
};

@Component({
  selector: 'app-password-strength-meter',
  standalone: true,
  imports: [],
  templateUrl: './password-strength-meter.component.html',
  styleUrl: './password-strength-meter.component.scss',
})
export class PasswordStrengthMeterComponent {
  @Input() value!: string;

  get sections(): SectionColor[] {
    return ['red', 'gray', 'gray'];
  }
}
