import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../services/navigation.service";
import {Router} from "@angular/router";
import {User} from "../shared/data-models/userDataModel";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.page.html',
  styleUrls: ['./edit-news.page.scss'],
})
export class EditNewsPage implements OnInit {
  id: number;
  newsTitle: string;
  newsContent: string;
  image?: string;
  user?: User;
  createdAt: Date;
  imagePreview?: string;
  likes?: number;
  views?: number;
  imageFile: string;

  constructor(private newsService: NewsService,
              private navigation: NavigationService,
              private router: Router) { }

  ngOnInit() {
    this.getNavigationExtras();
  }
  getNavigationExtras() {

    if (this.router.getCurrentNavigation().extras.state) {
      this.id = this.router.getCurrentNavigation().extras.state.news.id;
      this.user = this.router.getCurrentNavigation().extras.state.news.user;
      this.newsTitle = this.router.getCurrentNavigation().extras.state.news.newsTitle;
      this.newsContent = this.router.getCurrentNavigation().extras.state.news.newsContent;
      this.image = this.router.getCurrentNavigation().extras.state.news.image;
      this.createdAt = this.router.getCurrentNavigation().extras.state.news.createdAt;
      this.imagePreview = this.router.getCurrentNavigation().extras.state.news.imagePreview;
      this.user =  this.router.getCurrentNavigation().extras.state.news.user;
      this.likes = this.router.getCurrentNavigation().extras.state.news.likes;
      this.views = this.router.getCurrentNavigation().extras.state.news.views;
      this.imageFile = this.router.getCurrentNavigation().extras.state.news.imageFile;
    }
  }
  /**
  onFileChange(fileChangeEvent) {
    if(fileChangeEvent.target.id === 'image') {
      this.imageFile = fileChangeEvent.target.files[0];
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
        };

        reader.readAsDataURL(this.imageFile);
      }
    } else {
      this.logoFile = fileChangeEvent.target.files[0];
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.logoPreview = e.target.result;
        };

        reader.readAsDataURL(this.logoFile);
      }
    }
  }**/

  async submitForm() {
    this.newsService.editNews({
      id: this.id,
      user: this.user,
      newsTitle: this.newsTitle,
      newsContent: this.newsContent,
      createdAt: new Date(),
      imagePreview: this.imagePreview,
      image: this.image,
      likes: this.likes,
      views: this.views
    });
    this.newsService.getNews().subscribe((news) => console.log(news));
    await this.router.navigate(['/home/tabs/news']);
  }

  onBack() {
    this.navigation.back();
  }

}
