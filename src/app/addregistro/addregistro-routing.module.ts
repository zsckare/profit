import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddregistroPage } from './addregistro.page';

const routes: Routes = [
  {
    path: '',
    component: AddregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddregistroPageRoutingModule {}
