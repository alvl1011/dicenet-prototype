import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewEventPage } from './add-new-event.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewEventPageRoutingModule {}
