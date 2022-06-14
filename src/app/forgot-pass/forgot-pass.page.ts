import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  @Input() email = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSend() {
    if(this.email !== '') {
      this.router.navigate(['/reset-pass']);
    }
  }
}
