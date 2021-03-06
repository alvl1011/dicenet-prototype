import { Component, OnInit } from '@angular/core';
import {User} from "../shared/data-models/userDataModel";
import {NavigationExtras, Router} from "@angular/router";
import {NewsService} from "../services/news.service";
import {News} from "../shared/data-models/newsDataModel";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  user: User;
  news: News[] = [];

  isActiveAll= true;
  isActiveTableTop = false;
  isActiveEvents = false;

  constructor(private router: Router,
              private newsService: NewsService) { }

  ngOnInit() {
    this.getNavigationExtras();
    this.newsService.getNews().subscribe((news) => {
      this.news = news;
    });
  }
  public getAge(news: News) {
    // @ts-ignore
    const diffTime = Math.abs(news.createdAt - new Date());
    const diffDays =  Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours =  Math.floor(diffTime / (1000 * 60 * 60));
    if (diffDays === 0){
      return 'Published ' + diffHours.toString() + ' hours ago';
    } else {
      return 'Published ' + diffDays.toString() + ' days ago';
    }

  }
  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.user = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  changeState(category: string) {
    if(category === 'All') {
      this.isActiveAll = true;
      this.isActiveTableTop = false;
      this.isActiveEvents = false;
    } else if(category === 'Tabletop') {
      this.isActiveAll = false;
      this.isActiveTableTop = true;
      this.isActiveEvents = false;
    } else if(category === 'Events') {
      this.isActiveAll = false;
      this.isActiveTableTop = false;
      this.isActiveEvents = true;
    }
  }

  nextPage() {
    this.router.navigate(['/home/tabs/collection']);
  }

  onClick(news) {
    this.newsService.onChangeTitle(news);
    this.router.navigate(['/home/tabs/news/news-view']);
  }

  addNews() {
    this.router.navigate(['/home/tabs/news/create-news']);
  }

}
