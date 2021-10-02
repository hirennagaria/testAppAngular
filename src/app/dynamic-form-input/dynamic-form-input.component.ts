import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() parameter: any;

  @Output() newValueChangeEvent = new EventEmitter<string>();

  changeValue() {
    this.newValueChangeEvent.emit(this.parameter);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
