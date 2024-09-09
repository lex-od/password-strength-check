import { Component, Input } from '@angular/core';

type SectionColor = 'gray' | 'red' | 'yellow' | 'green';
type ColorClassMap = Record<SectionColor, string>;

const lettersRegex = /[a-zA-Z]/;
const digitsRegex = /[0-9]/;
const specialCharsRegex = /[^a-zA-Z0-9]/;

@Component({
  selector: 'app-password-strength-meter',
  standalone: true,
  imports: [],
  templateUrl: './password-strength-meter.component.html',
  styleUrl: './password-strength-meter.component.scss',
})
export class PasswordStrengthMeterComponent {
  @Input() value!: string;

  COLOR_CLASS_MAP: ColorClassMap = {
    gray: 'strength-section--gray',
    red: 'strength-section--red',
    yellow: 'strength-section--yellow',
    green: 'strength-section--green',
  };

  get sections(): SectionColor[] {
    const hasLetters = lettersRegex.test(this.value);
    const hasDigits = digitsRegex.test(this.value);
    const hasSpecialChars = specialCharsRegex.test(this.value);
    const strength =
      Number(hasLetters) + Number(hasDigits) + Number(hasSpecialChars);

    if (!this.value.length) {
      return ['gray', 'gray', 'gray'];
    }
    if (this.value.length < 8) {
      return ['red', 'red', 'red'];
    }
    switch (strength) {
      case 3:
        return ['green', 'green', 'green'];
      case 2:
        return ['yellow', 'yellow', 'gray'];
      default:
        return ['red', 'gray', 'gray'];
    }
  }
}
