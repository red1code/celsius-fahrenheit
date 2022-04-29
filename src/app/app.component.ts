import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  c!: number | null;
  f!: number | null;

  constructor() { }

  ngOnInit(): void {
    this.c = 0;
    this.f = this.convertToFahrenheit(this.c.toString());
  }

  // listening to keyup event
  onKeyupCinput = (value: string) => this.f = this.convertToFahrenheit(value);

  onKeyupFinput = (value: string) => this.c = this.convertToCelsius(value);

  // converting methods. Formula: (10°C × 9/5) + 32 = 50°F
  convertToFahrenheit(celsiusValue: string): number | null {
    if (!celsiusValue) return null;
    const cNumber = parseInt(celsiusValue, 10);
    return +((cNumber * 9 / 5) + 32).toFixed(1);
  }

  convertToCelsius(fahrenheitValue: string): number | null {
    if (!fahrenheitValue) return null;
    const fNumber = parseInt(fahrenheitValue, 10);
    return +((fNumber - 32) * 5 / 9).toFixed(1);
  }

}
