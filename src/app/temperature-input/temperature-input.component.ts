import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.css']
})
export class TemperatureInputComponent implements OnInit {

  @Input() lbl!: string;
  @Input() initialValue!: number | null;

  @Output() newInputValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendNewValue(value: string) {
    this.newInputValue.emit(value)
  }

}
