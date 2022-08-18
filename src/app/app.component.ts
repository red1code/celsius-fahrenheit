import { Component } from '@angular/core';
import { ConvertService } from './services/convert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  c!: number | null;
  f!: number | null;

  constructor(private convertService: ConvertService) {
    this.c = 0;
    this.f = this.convertService.convertToFahrenheit(this.c.toString());
  }

  onCelsiusInput(value: string) {
    this.f = this.convertService.convertToFahrenheit(value);
  }

  onFahrenheitInput(value: string) {
    this.c = this.convertService.convertToCelsius(value);
  }

  get year() {
    return new Date().getFullYear()
  }

}
