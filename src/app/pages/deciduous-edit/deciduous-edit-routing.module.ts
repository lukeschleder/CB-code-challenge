import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeciduousEditPage } from './deciduous-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DeciduousEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeciduousEditPageRoutingModule {}
