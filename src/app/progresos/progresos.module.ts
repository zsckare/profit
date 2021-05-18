import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresosPageRoutingModule } from './progresos-routing.module';

import { ProgresosPage } from './progresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresosPageRoutingModule
  ],
  declarations: [ProgresosPage]
})
export class ProgresosPageModule {}
