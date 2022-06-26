import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { EventService } from "../services/event.service";
import { EventModel } from "../shared/data-models/eventDataModel";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: EventModel[] = [];

  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
  onClick(event: EventModel) {
    this.eventService.onChangeTitle(event);
    this.router.navigate(['/home/tabs/events/event-view']);
  }

  addEvent() {
    this.router.navigate(['/home/tabs/events/add-new-event']);
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  nextPage() {
    this.router.navigate(['/home/tabs/profile']);
  }

  previousPage() {
    this.router.navigate(['/home/tabs/social']);
  }
}
