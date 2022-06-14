import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentsPage } from './rents.page';

const routes: Routes = [
  {
    path: '',
    component: RentsPage
  },
  {
    path: 'rent-view',
    loadChildren: () => import('../rent-view/rent-view.module').then( m => m.RentViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentsPageRoutingModule {}
