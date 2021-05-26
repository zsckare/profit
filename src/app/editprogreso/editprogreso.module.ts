import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprogresoPageRoutingModule } from './editprogreso-routing.module';

import { EditprogresoPage } from './editprogreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprogresoPageRoutingModule
  ],
  declarations: [EditprogresoPage]
})
export class EditprogresoPageModule {}
