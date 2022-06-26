import { Component, OnInit } from '@angular/core';
import { EventService } from "../services/event.service";
import { NavigationService } from "../services/navigation.service";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {

  id: number;
  title: string;
  location: string;
  date: Date;
  description: string;
  image?: string;
  imageFile?: File;

  imagePreview: string;


  constructor(private eventService: EventService,
              private navigation: NavigationService,
              private router: Router) { }

  ngOnInit() {
    this.getNavigationExtras();
  };

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.id = this.router.getCurrentNavigation().extras.state.event.id;
      this.description = this.router.getCurrentNavigation().extras.state.event.description;
      this.title = this.router.getCurrentNavigation().extras.state.event.title;
      this.location = this.router.getCurrentNavigation().extras.state.event.location;
      this.date = this.router.getCurrentNavigation().extras.state.event.date;
      this.image = this.router.getCurrentNavigation().extras.state.event.image;
      this.imageFile = this.router.getCurrentNavigation().extras.state.event.imageFile;
      this.imagePreview = this.router.getCurrentNavigation().extras.state.event.imagePreview;
    }
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
    this.eventService.editEvent({
                                 id: this.id,
                                 title: this.title,
                                 status: 'AWAIT',
                                 location: this.location,
                                 date: this.date,
                                 author: {
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
                                 watches: 0,
                                 members: null,
                                 imagePreview: this.imagePreview,
                                 description: this.description
                               });
    this.eventService.getEvents().subscribe((events) => console.log(events));
    await this.router.navigate(['/home/tabs/events']);
  }
}
