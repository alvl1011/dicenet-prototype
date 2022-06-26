import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsViewPage } from './news-view.page';

const routes: Routes = [
  {
    path: '',
    component: NewsViewPage
  },
  {
    path: 'edit-news',
    loadChildren: () => import('../edit-news/edit-news.module').then( m => m.EditNewsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsViewPageRoutingModule {}
