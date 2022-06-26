import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";
import { NavigationService } from "../services/navigation.service";
import { Router } from "@angular/router";
import { EventService } from "../services/event.service";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.page.html',
  styleUrls: ['./add-new-event.page.scss'],
})
export class AddNewEventPage implements OnInit {

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
    let previousId = this.eventService.getLastIndex();
    this.eventService.addEvent({
                                 id: ++previousId,
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
