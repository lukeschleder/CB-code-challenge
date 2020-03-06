import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConiferousDetailsPageRoutingModule } from './coniferous-details-routing.module';

import { ConiferousDetailsPage } from './coniferous-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConiferousDetailsPageRoutingModule
  ],
  declarations: [ConiferousDetailsPage]
})
export class ConiferousDetailsPageModule {}
