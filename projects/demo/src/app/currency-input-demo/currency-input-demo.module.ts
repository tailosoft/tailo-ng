import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyInputDemoRoutingModule } from './currency-input-demo-routing.module';
import { CurrencyInputDemoComponent } from './currency-input-demo/currency-input-demo.component';

import { CurrencyInputDirective } from '../../../../currency-input/src/lib/currency-input.directive';
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
    CurrencyInputDirective
  ]
})
export class CurrencyInputDemoModule { }
