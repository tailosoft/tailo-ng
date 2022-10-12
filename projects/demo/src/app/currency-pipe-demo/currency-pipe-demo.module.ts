import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyPipeDemoRoutingModule } from './currency-pipe-demo-routing.module';
import { CurrencyPipeDemoComponent } from './currency-pipe-demo/currency-pipe-demo.component';

import { CurrencyPipe } from '../../../../currency-pipe/src/lib/currency.pipe';


@NgModule({
  declarations: [
    CurrencyPipeDemoComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipeDemoRoutingModule,
    CurrencyPipe
  ]
})
export class CurrencyPipeDemoModule { }
