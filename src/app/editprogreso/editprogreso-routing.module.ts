import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprogresoPage } from './editprogreso.page';

const routes: Routes = [
  {
    path: '',
    component: EditprogresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprogresoPageRoutingModule {}
