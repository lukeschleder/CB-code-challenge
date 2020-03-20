import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeciduousEditPageRoutingModule } from './deciduous-edit-routing.module';

import { DeciduousEditPage } from './deciduous-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeciduousEditPageRoutingModule
  ],
  declarations: [DeciduousEditPage]
})
export class DeciduousEditPageModule {}
