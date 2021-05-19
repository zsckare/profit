import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddregistroPageRoutingModule } from './addregistro-routing.module';

import { AddregistroPage } from './addregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddregistroPageRoutingModule
  ],
  declarations: [AddregistroPage]
})
export class AddregistroPageModule {}
