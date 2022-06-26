import { Component, OnInit } from '@angular/core';
import { User } from "../shared/data-models/userDataModel";
import { NewsService } from "../services/news.service";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { NavigationService } from "../services/navigation.service";

@Component({
             selector: 'app-create-news',
             templateUrl: './create-news.page.html',
             styleUrls: ['./create-news.page.scss'],
           })
export class CreateNewsPage implements OnInit {

  id: number;
  category: string;
  newsTitle: string;
  newsContent: string;
  image?: string;
  user?: User;
  createdAt: Date;
  imagePreview?: string;
  imageFile: File;
  likes?: number;
  views?: number;

  constructor(private newsService: NewsService,
              private router: Router,
              private userService: UserService,
              private navigation: NavigationService) { }

  ngOnInit() {
  }

  onBack() {
    this.navigation.back();
  }

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
    }
  }

  async submitForm() {
    this.newsService.addNews(this.newsTitle, this.newsContent, this.userService.getUser().getValue(), this.imagePreview, this.category);
    this.newsService.getNews().subscribe((games) => console.log(games));
    await this.router.navigate(['/home/tabs/news']);
  }

}
