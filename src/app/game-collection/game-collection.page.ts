import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../shared/data-models/gameModel';
import { Subscription } from 'rxjs';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-game-collection',
  templateUrl: './game-collection.page.html',
  styleUrls: ['./game-collection.page.scss'],
})
export class GameCollectionPage implements OnInit, OnDestroy, OnChanges {

  games: Game[] = [];
  subscription: Subscription;
  popoverMessage = 'hello';
  isPopoverOpen = false;


  constructor(private router: Router,
              private gameService: GameService) { }

  ngOnInit() {
    this.subscription = this.gameService.findElement('all')
      .subscribe((games) => {
        this.games = games;
      });
    this.resetBadgeCount();
    this.getNavigationExtras();
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  nextPage() {
    this.router.navigate(['/home/tabs/social']);
  }

  previousPage() {
    this.router.navigate(['/home/tabs/news']);
  }

  getNavigationExtras() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.isPopoverOpen = this.router.getCurrentNavigation().extras.state.openPop;
      this.popoverMessage = this.router.getCurrentNavigation().extras.state.message;
    }
  }

  resetBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications().then(r => console.log(r));
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
