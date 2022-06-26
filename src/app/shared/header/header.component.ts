import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { NavigationService } from "../../services/navigation.service";
import { GameService } from "../../services/game.service";
import { Game } from "../data-models/gameModel";

interface SearchbarChangeEventDetail {
  value?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isSearchActive = false;

  @Input() title = 'Default';

  @Input() isMainScreen? = true;

  @Input() isMessageView? = false;

  constructor(private navigation: NavigationService,
              private gameService: GameService) { }

  ngOnInit() {}

  onClick(): void {
    this.navigation.back();
  }

  onSearch() {
    this.isSearchActive = !this.isSearchActive;
  }

  search(value) {
    console.log(value);
    this.gameService.findElement(value).subscribe((games) => {
      console.log(games);
    });
  }


}
