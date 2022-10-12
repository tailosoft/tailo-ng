import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'currency-input',
    loadChildren: () => import('./currency-input-demo/currency-input-demo.module').then(m => m.CurrencyInputDemoModule)
  },
  {
    path: 'currency-pipe',
    loadChildren: () => import('./currency-pipe-demo/currency-pipe-demo.module').then(m => m.CurrencyPipeDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
