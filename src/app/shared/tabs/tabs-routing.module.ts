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
        loadChildren: () => import('../../game-collection/game-collection.module').then(m => m.GameCollectionPageModule)
      },
      {
        path: 'tournaments',
        loadChildren: () => import('../../game-collection/game-collection.module').then(m => m.GameCollectionPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../game-collection/game-collection.module').then(m => m.GameCollectionPageModule)
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
