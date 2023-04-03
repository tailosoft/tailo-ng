import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-currency-input-demo',
  templateUrl: './currency-input-demo.component.html',
  styleUrls: ['./currency-input-demo.component.scss']
})
export class CurrencyInputDemoComponent implements OnInit {

  code = 'CHF'

  form = this.fb.group({
    value1: [],
    value2: [12399],
    value3: ['string']
  });

  value1?: number;
  value2 = '12399';
  value3 = 'string';

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
