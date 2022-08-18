import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  // Mathematical relation between Celsius & Fahrenheit => (10°C × 9/5) + 32 = 50°F

  convertToFahrenheit(celsiusValue: string): number | null {
    if (!celsiusValue) {
      return null
    }
    else {
      let cNumber = parseInt(celsiusValue, 10);
      return +((cNumber * 9 / 5) + 32).toFixed(1);
    }
  }

  convertToCelsius(fahrenheitValue: string): number | null {
    if (!fahrenheitValue) {
      return null
    }
    else {
      let fNumber = parseInt(fahrenheitValue, 10);
      return +((fNumber - 32) * 5 / 9).toFixed(1);
    }
  }

}
