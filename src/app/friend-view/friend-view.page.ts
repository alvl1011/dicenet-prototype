import { Component, OnInit } from '@angular/core';
import { User } from "../shared/data-models/userDataModel";
import { Router } from "@angular/router";
import { Group } from "../shared/data-models/messageDataModel";

@Component({
  selector: 'app-friend-view',
  templateUrl: './friend-view.page.html',
  styleUrls: ['./friend-view.page.scss'],
})
export class FriendViewPage implements OnInit {

  user: User;
  isAdd = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getNavigationExtras();
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.user = this.router.getCurrentNavigation().extras.state.user;
      this.isAdd = this.router.getCurrentNavigation().extras.state.isAdd;
    }
  }

  addFriend() {
    this.user.isFriend = false;
  }

  removeFriend() {
    this.user.isFriend  = true;
  }

}
