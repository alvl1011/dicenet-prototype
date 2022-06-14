import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from "../shared/data-models/gameModel";
import { Subscription } from "rxjs";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-game-collection',
  templateUrl: './game-collection.page.html',
  styleUrls: ['./game-collection.page.scss'],
})
export class GameCollectionPage implements OnInit, OnDestroy, OnChanges {

  games: Game[] = [];
  subscription: Subscription;


  constructor(private router: Router,
              private gameService: GameService) { }

  ngOnInit() {
    this.subscription = this.gameService.findElement('all')
      .subscribe((games) => {
        this.games = games;
      });
  }

  ngOnChanges() {
    this.games = this.gameService.getResults();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(game: Game) {
    this.gameService.onChangeTitle(game);
    this.router.navigate(['/home/tabs/collection/game-view']);
  }

  addGame() {
    this.router.navigate(['/home/tabs/collection/add-new-game']);
  }

  toRents() {
    this.router.navigate(['/home/tabs/collection/rents']);
  }

}
