import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() email = '';
  @Input() password = '';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.userService.getUsers().subscribe((users) => {
      users.forEach((user) => {
        if(user.email === this.email && user.password === this.password) {
          this.userService.onChangeUser(user);
          this.router.navigate(['/home/tabs/news']);
        }
      });
    });
  }

  onRegister() {
    this.router.navigate(['/registration']);
  }

}
