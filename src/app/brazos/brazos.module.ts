import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrazosPageRoutingModule } from './brazos-routing.module';

import { BrazosPage } from './brazos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrazosPageRoutingModule
  ],
  declarations: [BrazosPage]
})
export class BrazosPageModule {}
