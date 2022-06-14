import { Component, OnInit } from '@angular/core';
import { Rent } from '../shared/data-models/rentDataModel';
import { Router } from "@angular/router";
import { GameService } from "../services/game.service";
import { RentsService } from "../services/rents.service";

@Component({
  selector: 'app-rent-view',
  templateUrl: './rent-view.page.html',
  styleUrls: ['./rent-view.page.scss'],
})
export class RentViewPage implements OnInit {

  rent: Rent;

  constructor(private router: Router,
              private gameService: GameService,
              private rentService: RentsService) { }

  ngOnInit() {
    this.getNavigationExtras();
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.rent = this.router.getCurrentNavigation().extras.state.rent;
    }
  }

  navigateToGame(game) {
    this.gameService.onChangeTitle(game);
    this.router.navigate(['/home/tabs/collection/game-view']);
  }

  delete(rent: Rent) {
    this.rentService.deleteRent(rent);
    this.router.navigate(['/home/tabs/collection/rents']);
  }

}
