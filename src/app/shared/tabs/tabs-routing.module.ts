import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        loadChildren: () => import('../../game-collection/game-collection.module').then(m => m.GameCollectionPageModule)
      },
      {
        path: 'collection',
        loadChildren: () => import('../../game-collection/game-collection.module').then(m => m.GameCollectionPageModule)
      },
      {
        path: 'social',
        loadChildren: () => import('../../social/social.module').then( m => m.SocialPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../../events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../game-collection/game-collection.module').then(m => m.GameCollectionPageModule)
      },
      {
        path: 'error',
        loadChildren: () => import('../../error/error.module').then( m => m.ErrorPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
