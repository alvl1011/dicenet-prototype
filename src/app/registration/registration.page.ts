import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  @Input() firstname = '';
  @Input() lastname = '';
  @Input() email = '';
  @Input() password = '';
  @Input() repeatPassword = '';

  isFirstnameValid = true;
  isLastnameValid = true;
  isEmailValid = true;
  isPasswordValid = true;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/login']);
  }

  async createAccount() {
    if (this.firstname !== '' && this.lastname !== '' && this.email !== '' && this.password !== '' && this.repeatPassword !== '') {
      this.isFirstnameValid = true;
      this.isLastnameValid = true;
      this.isPasswordValid = true;
      this.isEmailValid = true;
      let previousId = this.userService.getLastIndex();
      const password = this.password === this.repeatPassword ? this.password: null;
      this.userService.addUser({
                                 id: ++previousId,
                                 firstname: this.firstname,
                                 lastname: this.lastname,
                                 email: this.email,
                                 isFriend: false,
                                 password
                               });
      this.userService.getUsers().subscribe((users) => console.log(users));
      await this.router.navigate(['/congratulations']);
    } else {
      if(this.firstname !== '') {
        this.isFirstnameValid = true;
      } else {
        this.isFirstnameValid= false;
      }
      if(this.lastname !== '') {
        this.isLastnameValid= true;
      } else {
        this.isLastnameValid = false;
      }
      if(this.email !== '') {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
      }
      if((this.password !== '' || this.repeatPassword !== '') && (this.password === this.repeatPassword)) {
        this.isPasswordValid = true;
      } else {
        this.isPasswordValid = false;
      }
    }
  }

  onLoginPage() {
    this.router.navigate(['/login']);
  }

}
