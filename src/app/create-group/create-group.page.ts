import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../services/navigation.service";
import { Router } from "@angular/router";
import { MessageService } from "../services/message.service";

@Component({
             selector: 'app-create-group',
             templateUrl: './create-group.page.html',
             styleUrls: ['./create-group.page.scss'],
           })
export class CreateGroupPage implements OnInit {
  title: string;
  description: string;
  image?: string;
  logo?: string;
  imageFile?: File;
  logoFile?: File;

  imagePreview: string;
  logoPreview: string;


  constructor(private messageService: MessageService,
              private navigation: NavigationService,
              private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.navigation.back();
  }

  onFileChange(fileChangeEvent) {
    if (fileChangeEvent.target.id === 'image') {
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
    let previousId = this.messageService.getLastIndex();
    this.messageService.addGroup({
                                   id: ++previousId,
                                   profileImage: this.imagePreview,
                                   name: this.title,
                                   amount: 0,
                                   description: this.description,
                                   link: 'dicenet.me/' + this.title,
                                   companions: [
                                     {
                                       id: 2,
                                       firstname: 'Dicenet',
                                       lastname: 'Bot',
                                       birthdate: new Date(1900, 1, 1),
                                       email: 'bot@dicenet.com',
                                       password: '123FuckSkinBags',
                                       career: 'Bot',
                                       city: 'Unknown',
                                       nickname: 'dicenet-bot',
                                       games: 999,
                                       profileImage: 'assets/images/account.svg',
                                       isFriend: true
                                     }
                                   ],
                                   messages: [
                                     {
                                       id: 0,
                                       userId: 0,
                                       text: 'Welcome to your new group: ' + this.title,
                                       isRead: true,
                                       sTime: new Date()
                                     },
                                   ]
                                 });
    this.messageService.getGroups().subscribe((groups) => console.log(groups));
    await this.router.navigate(['/home/tabs/social']);
  }

}
