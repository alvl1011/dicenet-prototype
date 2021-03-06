import { Injectable } from '@angular/core';
import { User } from "../shared/data-models/userDataModel";
import { BehaviorSubject, of } from "rxjs";
import { Game } from "../shared/data-models/gameModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(new User());

  private users: User[] = [
    {
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
      isFriend: true
    },
    {
      id: 1,
      firstname: 'Alexander',
      lastname: 'Grischancew',
      birthdate: new Date(1996, 11, 11),
      email: 'gral1031@h-ka.de',
      password: 'password',
      career: 'Student',
      city: 'Karlsruhe',
      nickname: 'alex',
      games: 3,
      profileImage: 'assets/images/avatar.png',
      isFriend: true
    },
    {
      id: 2,
      firstname: 'Dicenet',
      lastname: 'Bot',
      birthdate: new Date(1900, 1, 1),
      email: 'bot@dicenet.com',
      password: '123FuckSkinBags',
      career: 'Bot',
      city: 'Unknown',
      nickname: 'dicenet-bot',
      games: 999,
      profileImage: 'assets/images/account.svg',
      isFriend: true
    }
  ];

  constructor() { }

  public getLastIndex() {
    return this.users[this.users.length - 1] !== undefined ? this.users[this.users.length - 1].id : 0;
  }

  public getUsers() {
    return of(this.users);
  }

  public onChangeUser(user: User) {
    this.user$.next(user);
  }

  public getUser() {
    return this.user$;
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  findElement(value) {
    if(value === 'all') {
      return this.getUsers();
    }
    return of(this.users.filter((user) => value === user.firstname || user.lastname));
  }

  public findUserById(id: number) {
    return this.users.find((user: User) => user.id === id);
  }

  public addUser(user: User) {
    this.users.push(user);
  }

  public editUser(user: User) {
    const updateItem = this.users.find(this.findIndexToUpdate, user.id);
    const index = this.users.indexOf(updateItem);
    this.users[index] = user;
  }
}
