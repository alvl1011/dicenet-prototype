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
      category: 'Events',
      newsTitle: 'Tournament “Z-10 Adventure”',
      // eslint-disable-next-line max-len
      newsContent: 'Last week the tournament "Z-10 Adventure" took place in Karlsruhe, in which 10 D&D teams from Baden-Württemberg took part. The prize fund was 1000 €. Details in future posts.' +
        // eslint-disable-next-line max-len
        'The last time such tournaments were held in Stuttgart, but recently a huge number of board game fans have appeared in Karlsruhe. Every 3 resident, according to statistics for 2022, has at least a “Monopoly” at home.',
      imagePreview: 'assets/images/newspic.png',
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
        profileImage: 'assets/images/avatar.png',
        isFriend: true
      },
      createdAt: new Date(),
      likes: 15,
      views: 51
    },
    {
      id: 1,
      category: 'Tabletop',
      newsTitle: 'Monopoly - new trend',
      // eslint-disable-next-line max-len
      newsContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePreview: 'assets/images/monopoly.png',
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
        profileImage: 'assets/images/avatar.png',
        isFriend: true
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

  public addNews(newsTitle: string, newsContent: string, user: User, imagePreview: string, category: string) {
    let index = this.getLastIndex();
    const news: News = {
      id: ++index,
      category,
      newsTitle,
      newsContent,
      user,
      imagePreview,
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
    this.news[index] = singleNews;
  }

  public deleteNews(news: News) {
    this.news.forEach((value, index) => {
      if(value.id === news.id) {
        this.news.splice(index, 1);
      }
    });
  }
}
