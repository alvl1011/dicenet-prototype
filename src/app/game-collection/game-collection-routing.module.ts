import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameCollectionPage } from './game-collection.page';

const routes: Routes = [
  {
    path: '',
    component: GameCollectionPage
  },
  {
    path: 'game-view',
    loadChildren: () => import('../game-view/game-view.module').then( m => m.GameViewPageModule)
  },
  {
    path: 'add-new-game',
    loadChildren: () => import('../create-game/create-game.module').then( m => m.CreateGamePageModule)
  },
  {
    path: 'rents',
    loadChildren: () => import('../rents/rents.module').then( m => m.RentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameCollectionPageRoutingModule {}
