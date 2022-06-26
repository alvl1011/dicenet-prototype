import { Component, Input, OnInit } from '@angular/core';
import { Dialog, Group } from "../shared/data-models/messageDataModel";
import { MessageService } from "../services/message.service";
import { UserService } from "../services/user.service";
import { User } from '../shared/data-models/userDataModel';
import { Router } from "@angular/router";

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.page.html',
  styleUrls: ['./message-view.page.scss'],
})
export class MessageViewPage implements OnInit {

  @Input() text = '';
  dialog?: Dialog;
  companion?: User;
  user: User;
  group?: Group;

  isGroup = false;


  constructor(private messageService: MessageService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.dialog = this.messageService.getDialog().getValue();
    this.group = this.messageService.getGroup().getValue();
    this.getNavigationExtras();
    this.getUser();
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.isGroup = this.router.getCurrentNavigation().extras.state.isGroup;
      this.user = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  getUser() {
    this.companion = this.userService.findUserById(this.dialog.companionId);
    this.user = this.userService.getUser().getValue();
  }

  onMessage() {
    this.messageService.getDialog().subscribe((dialog) => {
      if(this.text !== '') {
        let lastIndex = dialog.messages[dialog.messages.length - 1] !== undefined ? dialog.messages[dialog.messages.length - 1].id : 0;
        dialog.messages.push({
                               id: ++lastIndex,
                               userId: this.user.id,
                               text: this.text,
                               isRead: false,
                               sTime: new Date()
                             });
      }
      });
    this.text = '';
    this.dialog = this.messageService.getDialog().getValue();
  }

  onGroupMessage() {
    this.messageService.getGroup().subscribe((dialog) => {
      if(this.text !== '') {
        let lastIndex = dialog.messages[dialog.messages.length - 1] !== undefined ? dialog.messages[dialog.messages.length - 1].id : 0;
        dialog.messages.push({
                               id: ++lastIndex,
                               userId: this.user.id,
                               text: this.text,
                               isRead: false,
                               sTime: new Date()
                             });
      }
    });
    this.text = '';
    this.group = this.messageService.getGroup().getValue();
  }

}
