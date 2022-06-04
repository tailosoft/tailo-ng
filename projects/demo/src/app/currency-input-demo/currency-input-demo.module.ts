import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyInputDemoRoutingModule } from './currency-input-demo-routing.module';
import { CurrencyInputDemoComponent } from './currency-input-demo/currency-input-demo.component';

import { CurrencyInputModule } from '../../../../currency-input/src/lib/currency-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrencyInputDemoComponent
  ],
  imports: [
    CommonModule,
    CurrencyInputDemoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyInputModule
  ]
})
export class CurrencyInputDemoModule { }
