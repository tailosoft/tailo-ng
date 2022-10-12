import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyPipeDemoComponent } from './currency-pipe-demo/currency-pipe-demo.component';

const routes: Routes = [{path: '', component: CurrencyPipeDemoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyPipeDemoRoutingModule { }
