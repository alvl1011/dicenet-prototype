import { Injectable } from '@angular/core';
import { News } from '../shared/data-models/newsDataModel';
import {BehaviorSubject, of} from 'rxjs';
import { User } from '../shared/data-models/userDataModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news$: BehaviorSubject<News> = new BehaviorSubject<News>(new News());

  private news: News[] = [
    {
      id: 0,
      newsTitle: 'Test',
      newsContent: 'Test Content',
      image: 'assets/images/dnd.jpg',
      user: {
        id: 0,
        firstname: 'Vladimir',
        lastname: 'Alyoshin',
        birthdate: new Date(2000, 12, 13),
        email: 'alvl1011@h-ka.de',
        password: 'password',
        career: 'Student',
        city: 'Karlsruhe',
        nickname: 'vladi',
        games: 2,
        profileImage: 'assets/images/avatar.png'
      },
      createdAt: new Date(),
      likes: 15,
      views: 51
    }
  ];

  constructor() { }

  public getLastIndex() {
    return this.news[this.news.length - 1] !== undefined ? this.news[this.news.length - 1].id : 0;
  }

  public getNews() {
    return of(this.news);
  }

  public addNews(newsTitle: string, newsContent: string, user: User,) {
    let index = this.getLastIndex();
    const news: News = {
      id: ++index,
      newsTitle,
      newsContent,
      user,
      createdAt: new Date('21 Jun 2022 08:14:00 UTC'),
      likes: 0,
      views: 0,
    };
    this.news.push(news);
  }

  public onChangeTitle(news: News) {
    this.news$.next(news);
  }

  public getSingleNews() {
    return this.news$;
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  public editNews(singleNews: News) {
    const updateItem = this.news.find(this.findIndexToUpdate, singleNews.id);
    const index = this.news.indexOf(updateItem);
    this.news$[index] = singleNews;
  }

  public deleteNews(news: News) {
    this.news.forEach((value, index) => {
      if(value.id === news.id) {
        this.news.splice(index, 1);
      }
    });
  }
}
