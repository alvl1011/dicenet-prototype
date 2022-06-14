import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../shared/data-models/gameModel';
import { NavigationService } from '../services/navigation.service';
import { NavigationExtras, Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.page.html',
  styleUrls: ['./game-view.page.scss'],
})
export class GameViewPage implements OnInit {

  game: Game = new Game();
  isModalOpen = false;

  constructor(private gameService: GameService,
              private navigation: NavigationService,
              private router: Router,
              public routerOutlet: IonRouterOutlet) { }


  ngOnInit() {
    this.game = this.gameService.getGame().getValue();
  }

  onDelete() {
    this.gameService.deleteGame(this.game);
    this.navigation.back();
  }

  onEdit() {
    const navigationExtras: NavigationExtras = {
      state: {
        game: this.game
      }
    };
    this.router.navigate(['/home/tabs/collection/game-view/edit-game'], navigationExtras);
  }

}
