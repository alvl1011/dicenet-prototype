import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentViewPage } from './rent-view.page';

const routes: Routes = [
  {
    path: '',
    component: RentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentViewPageRoutingModule {}
