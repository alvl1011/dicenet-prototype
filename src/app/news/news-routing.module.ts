import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
  {
    path: 'news-view',
    loadChildren: () => import('../news-view/news-view.module').then( m => m.NewsViewPageModule)
  },
  {
    path: 'create-news',
    loadChildren: () => import('../create-news/create-news.module').then( m => m.CreateNewsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
