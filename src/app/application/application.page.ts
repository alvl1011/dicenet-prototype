import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EventService } from "../services/event.service";
import { EventModel } from "../shared/data-models/eventDataModel";
import { User } from "../shared/data-models/userDataModel";

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  title: string;
  location: string;
  date: Date;
  description: string;
  image?: string;
  imageFile?: File;

  imagePreview: string;
  event: EventModel = new EventModel();
  user: User = new User();

  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.getNavigationExtras();
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.user = this.router.getCurrentNavigation().extras.state.user;
      this.event = this.router.getCurrentNavigation().extras.state.event;
      this.description = this.router.getCurrentNavigation().extras.state.event.description;
      this.title = this.router.getCurrentNavigation().extras.state.event.title;
      this.location = this.router.getCurrentNavigation().extras.state.event.location;
      this.date = this.router.getCurrentNavigation().extras.state.event.date;
      this.image = this.router.getCurrentNavigation().extras.state.event.image;
      this.imageFile = this.router.getCurrentNavigation().extras.state.event.imageFile;
      this.imagePreview = this.router.getCurrentNavigation().extras.state.event.imagePreview;
    }
  }

  decline(user: User) {
    this.eventService.deleteUserFromEvent(user, this.event);
  }

  applyMembership() {
    this.user.status = 'AWAIT';
    this.event.members.push(this.user);
    this.router.navigate(['/home/tabs/events']);
  }

}
