import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiernasgluteosPage } from './piernasgluteos.page';

const routes: Routes = [
  {
    path: '',
    component: PiernasgluteosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiernasgluteosPageRoutingModule {}
