import { Component, OnInit } from '@angular/core';
import { EventModel } from "../shared/data-models/eventDataModel";
import { EventService } from "../services/event.service";
import { NavigationService } from "../services/navigation.service";
import { NavigationExtras, Router } from "@angular/router";
import { User } from "../shared/data-models/userDataModel";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.page.html',
  styleUrls: ['./event-view.page.scss'],
})
export class EventViewPage implements OnInit {

  liked = false;
  event: EventModel = new EventModel();
  user: User = new User();

  constructor(private eventService: EventService,
              private navigation: NavigationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.event = this.eventService.getEvent().getValue();
    this.user = this.userService.getUser().getValue();
  }

  onDelete() {
    this.eventService.deleteEvent(this.event);
    this.navigation.back();
  }

  toMessage() {
    this.router.navigate(['/home/tabs/social']);
  }

  onEdit() {
    const navigationExtras: NavigationExtras = {
      state: {
        event: this.event
      }
    };
    this.router.navigate(['/home/tabs/events/event-view/edit-event'], navigationExtras);
  }

  onApplication() {
    const navigationExtras: NavigationExtras = {
      state: {
        event: this.event,
        user: this.user
      }
    };
    this.router.navigate(['/home/tabs/events/event-view/application'], navigationExtras);
  }

}
