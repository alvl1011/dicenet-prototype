import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialPage } from './social.page';

const routes: Routes = [
  {
    path: '',
    component: SocialPage
  },
  {
    path: 'message-view',
    loadChildren: () => import('../message-view/message-view.module').then( m => m.MessageViewPageModule)
  },
  {
    path: 'friend-view',
    loadChildren: () => import('../friend-view/friend-view.module').then( m => m.FriendViewPageModule)
  },
  {
    path: 'group-view',
    loadChildren: () => import('../group-view/group-view.module').then( m => m.GroupViewPageModule)
  },
  {
    path: 'create-group',
    loadChildren: () => import('../create-group/create-group.module').then( m => m.CreateGroupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialPageRoutingModule {}
