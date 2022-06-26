import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() email = '';
  @Input() password = '';
  isEmailValid = true;
  isPasswordValid = true;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.userService.getUsers().subscribe((users) => {
      users.every((user) => {
        if(user.email === this.email && user.password === this.password) {
          this.isEmailValid = true;
          this.isPasswordValid = true;
          this.userService.onChangeUser(user);
          const navigationExtras: NavigationExtras = {
            state: {
              openPop: true,
              message: 'Login successful.'
            }
          };
          this.router.navigate(['/home/tabs/collection'], navigationExtras);
        } else {
          if(user.email === this.email) {
            this.isEmailValid = true;
          } else {
            this.isEmailValid = false;
          }
          if(user.password === this.password) {
            this.isPasswordValid = true;
          } else {
            this.isPasswordValid = false;
          }
          return false;
        }
      });
    });
  }

  onRegister() {
    this.router.navigate(['/registration']);
  }

}
