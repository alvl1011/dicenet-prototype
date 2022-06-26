import { Component, OnInit } from '@angular/core';
import { User } from "../shared/data-models/userDataModel";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: User;
  isAdd = false;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser().getValue();
  }

  logout() {
    this.router.navigate(['/login']);
  }

  onEdit() {
    this.router.navigate(['/home/tabs/profile/edit-user']);
  }

  previousPage() {
    this.router.navigate(['/home/tabs/events']);
  }

  toSettings() {
    this.router.navigate(['/home/tabs/profile/settings']);
  }
}
