import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HombrosespaldaPage } from './hombrosespalda.page';

const routes: Routes = [
  {
    path: '',
    component: HombrosespaldaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombrosespaldaPageRoutingModule {}
