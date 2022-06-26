import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { User } from '../data-models/userDataModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, DoCheck {

  socialCounter: number;
  user: User;

  selectedPath = '';

  constructor(private router: Router,
              private messageService: MessageService,
              private userService: UserService,
              ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  ngDoCheck() {
    this.socialCounter = this.setBadge();
  }

  ngOnInit(): void {
    this.user = this.userService.getUser().getValue();
  }

  setBadge() {
    let counter = 0;
    this.messageService.getDialogs().subscribe((dialogs) => {
      dialogs.forEach((dialog) => {
        dialog.messages.forEach((message) => {
          if(!message.isRead && message.userId !== this.user.id) {
            counter++;
          }
        });
      });
    });
    return counter;
  }

}
