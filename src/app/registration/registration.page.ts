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

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/login']);
  }

  async createAccount() {
    let previousId = this.userService.getLastIndex();
    const password = this.password === this.repeatPassword ? this.password: null;
    this.userService.addUser({
                               id: ++previousId,
                               firstname: this.firstname,
                               lastname: this.lastname,
                               email: this.email,
                               password
                             });
    this.userService.getUsers().subscribe((users) => console.log(users));
    await this.router.navigate(['/congratulations']);
  }

  onLoginPage() {
    this.router.navigate(['/login']);
  }

}
