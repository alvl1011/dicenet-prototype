import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'event-view',
    loadChildren: () => import('../event-view/event-view.module').then( m => m.EventViewPageModule)
  },
  {
    path: 'add-new-event',
    loadChildren: () => import('../add-new-event/add-new-event.module').then( m => m.AddNewEventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
