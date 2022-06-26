import { Component, OnInit } from '@angular/core';
import {News} from "../shared/data-models/newsDataModel";
import {NewsService} from "../services/news.service";
import {NavigationExtras, Router} from "@angular/router";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.page.html',
  styleUrls: ['./news-view.page.scss'],
})
export class NewsViewPage implements OnInit {
  news: News = new News();
  like=false;
  constructor(private newService: NewsService,
              private navigation: NavigationService,
              private router: Router,) { }

  ngOnInit() {
    this.news = this.newService.getSingleNews().getValue();
  }

  onDelete() {
    this.newService.deleteNews(this.news);
    this.navigation.back();
  }
  isLiked(){
    return this.like;
  }

  onEdit() {
    const navigationExtras: NavigationExtras = {
      state: {
        news: this.news
      }
    };
    this.router.navigate(['/home/tabs/news/news-view/edit-news'], navigationExtras);
  }
  onLike() {
    if (this.like) {
      this.news.likes = this.news.likes - 1;
    } else {
      this.news.likes = this.news.likes + 1;
    }
    this.like = !this.like;
  }
  onMessage() {
    this.router.navigate(['/home/tabs/social']);
  }

}
