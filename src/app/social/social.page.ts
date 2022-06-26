import { Component, OnInit } from '@angular/core';
import { Dialog, Group } from '../shared/data-models/messageDataModel';
import { MessageService } from "../services/message.service";
import { UserService } from "../services/user.service";
import { NavigationExtras, Router } from "@angular/router";
import { User } from "../shared/data-models/userDataModel";
import { IonRouterOutlet } from "@ionic/angular";

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {


  dialogs: Dialog[] = [];
  groups: Group[] = [];
  user: User;

  isActiveChats = true;
  isActiveGroups = false;

  constructor(private messageService: MessageService,
              private userService: UserService,
              private router: Router,
              public routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.getDialogs();
    this.getGroups();
    this.user = this.userService.getUser().getValue();
    this.user = this.userService.getUser().getValue();
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  changeState() {
    this.isActiveGroups = this.isActiveChats;
    this.isActiveChats = !this.isActiveGroups;
  }

  getDialogs() {
    this.messageService.getDialogs().subscribe((dialogs) => {
      this.dialogs = dialogs;
    });
  }

  getGroups() {
    this.messageService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  createGroup() {
    this.router.navigate(['/home/tabs/social/create-group']);
  }

  public getUser(id: number) {
    return this.userService.findUserById(id);
  }

  toMessage(dialog: Dialog) {
    dialog.messages.forEach((message) => {
      if(!message.isRead && message.userId !== this.user.id) {
        message.isRead = true;
      }
    });
    this.messageService.onChangeDialog(dialog);
    this.router.navigate(['/home/tabs/social/message-view']);
  }

  toFriendView(user: User) {
    const navigationExtras: NavigationExtras = {
      state: {
        user,
        isAdd: false
      }
    };
    this.router.navigate(['/home/tabs/social/friend-view'], navigationExtras);
  }

  toGroupView(group: Group) {
    const navigationExtras: NavigationExtras = {
      state: {
        group
      }
    };
    this.router.navigate(['/home/tabs/social/group-view'], navigationExtras);
  }

  toGroupMessage(group: Group) {
    if(group.messages) {
      group.messages.forEach((message) => {
        if(!message.isRead && message.userId !== this.user.id) {
          message.isRead = true;
        }
      });
    }
    const navigationExtras: NavigationExtras = {
      state: {
        isGroup: true,
        user: this.user
      }
    };
    this.messageService.onChangeGroup(group);
    this.router.navigate(['/home/tabs/social/message-view'], navigationExtras);
  }


  nextPage() {
    this.router.navigate(['/home/tabs/events']);
  }

  previousPage() {
    this.router.navigate(['/home/tabs/collection']);
  }
}
