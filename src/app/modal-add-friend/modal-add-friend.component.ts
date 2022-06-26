import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/data-models/userDataModel';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { NavigationExtras, Router } from '@angular/router';
import { RentsService } from '../services/rents.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modal-add-friend',
  templateUrl: './modal-add-friend.component.html',
  styleUrls: ['./modal-add-friend.component.scss'],
})
export class ModalAddFriendComponent implements OnInit {
  users: User[] = [];

  constructor(public modalCtrl: ModalController,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.filter((user) => user.id !== this.userService.getUser().getValue().id);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onClick(user: User) {
    const navigationExtras: NavigationExtras = {
      state: {
        user,
        isAdd: true
      }
    };
    this.router.navigate(['/home/tabs/social/friend-view'], navigationExtras);
    this.dismiss();
  }

  search(value) {
    console.log(value);
    this.userService.findElement(value).subscribe((users) => {
      console.log(users);
    });
  }
}
