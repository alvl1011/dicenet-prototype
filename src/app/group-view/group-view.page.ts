import { Component, OnInit } from '@angular/core';
import { User } from "../shared/data-models/userDataModel";
import { Router } from "@angular/router";
import { Group } from "../shared/data-models/messageDataModel";

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.page.html',
  styleUrls: ['./group-view.page.scss'],
})
export class GroupViewPage implements OnInit {

  group: Group;
  isJoin = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getNavigationExtras();
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.group = this.router.getCurrentNavigation().extras.state.group;
    }
  }

  joinGroup() {
    this.group.isJoin = false;
  }

  leaveGroup() {
    this.group.isJoin = true;
  }

}
