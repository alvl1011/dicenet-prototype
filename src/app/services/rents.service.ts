import { Injectable } from '@angular/core';
import { Rent } from '../shared/data-models/rentDataModel';
import { of } from 'rxjs';
import { Game } from '../shared/data-models/gameModel';
import { User } from '../shared/data-models/userDataModel';

@Injectable({
  providedIn: 'root'
})
export class RentsService {

  private rents: Rent[] = [
    {
      id: 0,
      game: {
        id: 0,
        title: 'Dungeons & Dragons',
        description: 'Dungeons and Dragons is a role-playing game in which a group of players create and play',
        // eslint-disable-next-line max-len
        longDescription: 'DnD is a collaborative storytelling game where one person plays the narrator and supporting cast while everyone else plays a main character.',
        image: 'assets/images/dnd.jpg',
        logo: 'assets/images/dnd_logo.png',
        createdAt: new Date(2022,3,25)
      },
      user: {
        id: 0,
        firstname: 'Vladimir',
        lastname: 'Alyoshin',
        birthdate: new Date(2000, 12, 13),
        email: 'alvl1011@h-ka.de',
        password: 'password',
        career: 'Student',
        city: 'Karlsruhe',
        nickname: 'vladi',
        games: 2,
        profileImage: 'assets/images/avatar.png',
        isFriend: false
      },
      status: 'OK',
      date: new Date(),
      until: new Date()
    }
  ];

  constructor() { }

  public getLastIndex() {
    return this.rents[this.rents.length - 1] !== undefined ? this.rents[this.rents.length - 1].id : 0;
  }

  public getRents() {
    return of(this.rents);
  }

  public addRent(game: Game, user: User, status: string) {
    let index = this.getLastIndex();
    const rent = {
      id: ++index,
      game,
      user,
      status,
      date: new Date(),
      until: new Date(new Date().getTime() + (1000 * 60 * 60 * 24))
    };
    this.rents.push(rent);
  }

  public deleteRent(rent: Rent) {
    this.rents.forEach((value, index) => {
      if(value.id === rent.id) {
        this.rents.splice(index, 1);
      }
    });
  }
}
