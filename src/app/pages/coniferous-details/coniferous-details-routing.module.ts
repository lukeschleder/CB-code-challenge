import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConiferousDetailsPage } from './coniferous-details.page';

const routes: Routes = [
  {
    path: '',
    component: ConiferousDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConiferousDetailsPageRoutingModule {}
