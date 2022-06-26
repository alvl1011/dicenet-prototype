import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventViewPage } from './event-view.page';

const routes: Routes = [
  {
    path: '',
    component: EventViewPage
  },
  {
    path: 'edit-event',
    loadChildren: () => import('../edit-event/edit-event.module').then( m => m.EditEventPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('../application/application.module').then( m => m.ApplicationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventViewPageRoutingModule {}
