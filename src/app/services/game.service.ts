import { Injectable } from '@angular/core';
import { BehaviorSubject, of} from 'rxjs';
import { Game } from '../shared/data-models/gameModel';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game$: BehaviorSubject<Game> = new BehaviorSubject<Game>(new Game());
  private games$: Game[] = [
    {
      id: 0,
      title: 'Dungeons & Dragons',
      description: 'Dungeons and Dragons is a role-playing game in which a group of players create and play',
      // eslint-disable-next-line max-len
      longDescription: 'DnD is a collaborative storytelling game where one person plays the narrator and supporting cast while everyone else plays a main character.',
      image: 'assets/images/dnd.jpg',
      logo: 'assets/images/dnd_logo.png',
      createdAt: new Date(2022,3,25)
    }, {
      id: 1,
      title: 'Magic: The Gathering',
      description: 'A player in Magic takes the role of a \n' +
        'Planeswalker, a powerful wizard who \n' +
        'can travel ("walk") between dimensions ',
      // eslint-disable-next-line max-len
      longDescription: 'A player in Magic takes the role of a \n' +
        'Planeswalker, a powerful wizard who \n' +
        'can travel ("walk") between dimensions ',
      image: 'assets/images/mtg.jpg',
      logo: 'assets/images/mgt_logo.png',
      createdAt: new Date(2022,3,25)
  }
];

  results: Game[] = [];

  public onChangeTitle(game: Game) {
    this.game$.next(game);
  }

  public getGame() {
    return this.game$;
  }

  public getLastIndex() {
    return this.games$[this.games$.length - 1] !== undefined ? this.games$[this.games$.length - 1].id : 0;
  }

  public getGames() {
    return of(this.games$);
  }

  public deleteGame(game: Game) {
    this.games$.forEach((value, index) => {
      if(value.id === game.id) {
          this.games$.splice(index, 1);
        }
    });
  }

  public addGame(game: Game) {
    this.games$.push(game);
  }

  public editGame(game: Game) {
    const updateItem = this.games$.find(this.findIndexToUpdate, game.id);
    const index = this.games$.indexOf(updateItem);
    this.games$[index] = game;
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  findElement(value) {
    if(value === 'all') {
      return this.getGames();
    }
    return of(this.games$.filter((game) => value === game.title));
  }

  getResults() {
    return this.results;
  }
}
