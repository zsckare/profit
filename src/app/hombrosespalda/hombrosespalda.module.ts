import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombrosespaldaPageRoutingModule } from './hombrosespalda-routing.module';

import { HombrosespaldaPage } from './hombrosespalda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombrosespaldaPageRoutingModule
  ],
  declarations: [HombrosespaldaPage]
})
export class HombrosespaldaPageModule {}
