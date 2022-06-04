import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyInputDemoComponent } from './currency-input-demo/currency-input-demo.component';

const routes: Routes = [{path: '', component: CurrencyInputDemoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyInputDemoRoutingModule { }
