import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresosPage } from './progresos.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresosPageRoutingModule {}
