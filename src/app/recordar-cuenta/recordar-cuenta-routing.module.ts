import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordarCuentaPage } from './recordar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: RecordarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordarCuentaPageRoutingModule {}
