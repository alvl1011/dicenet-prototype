import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  @Input() password = '';
  @Input() repeatPassword = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    const password = this.password === this.repeatPassword ? this.password: null;
    if(password !== null) {
      this.router.navigate(['/login']);
    }
  }

}
