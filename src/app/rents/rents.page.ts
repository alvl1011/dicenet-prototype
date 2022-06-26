import { Component, OnInit } from '@angular/core';
import { User } from "../shared/data-models/userDataModel";
import { NavigationExtras, Router } from "@angular/router";
import { RentsService } from "../services/rents.service";

class Rents {
}

@Component({
  selector: 'app-rents',
  templateUrl: './rents.page.html',
  styleUrls: ['./rents.page.scss'],
})
export class RentsPage implements OnInit {

  user: User;
  rents: Rents[] = [];

  constructor(private router: Router,
              private rentService: RentsService) { }

  ngOnInit() {
    this.getNavigationExtras();
    this.rentService.getRents().subscribe((rents) => {
      this.rents = rents;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.user = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  onClick(rent) {
    const navigationExtras: NavigationExtras = {
      state: {
        rent
      }
    };
    this.router.navigate(['/home/tabs/collection/rents/rent-view'], navigationExtras);
  }
}
