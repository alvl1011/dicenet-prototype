import { Injectable } from '@angular/core';
import { Dialog, Group } from '../shared/data-models/messageDataModel';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  groups: Group[] = [
    {
      id: 0,
      userId: 0,
      profileImage: 'assets/images/dnd.jpg',
      name: 'D&D',
      isJoin: false,
      amount: 130,
      description: 'A group for those who are ardent fans of D&D',
      link: 'dicenet.me/d&denjoy',
      companions: [
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
        }
      ],
      messages: [
        {
          id: 0,
          userId: 0,
          text: 'Hi, how are u doin?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 1,
          userId: 1,
          text: 'Good. How is by u?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 2,
          userId: 1,
          text: 'Have u done Medienprojekt?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 3,
          userId: 1,
          text: 'I have been waiting of u.',
          isRead: true,
          sTime: new Date()
        }
      ]
    }
  ];
  dialoges: Dialog[] = [
    {
      id: 0,
      userId: 0,
      companionId: 1,
      messages: [
        {
          id: 0,
          userId: 0,
          text: 'Hi, how are u doin?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 1,
          userId: 1,
          text: 'Good. How is by u?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 2,
          userId: 1,
          text: 'Have u done Medienprojekt?',
          isRead: false,
          sTime: new Date()
        },
        {
          id: 3,
          userId: 1,
          text: 'I have been waiting of u.',
          isRead: false,
          sTime: new Date()
        }
      ]
    },
    {
      id: 1,
      userId: 0,
      companionId: 1,
      messages: [
        {
          id: 0,
          userId: 0,
          text: 'Hi, how are u doin?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 1,
          userId: 1,
          text: 'Good. How is by u?',
          isRead: true,
          sTime: new Date()
        },
        {
          id: 2,
          userId: 1,
          text: 'Have u done Medienprojekt?',
          isRead: true,
          sTime: new Date()
        },
      ]
    }
  ];

  private dialog$: BehaviorSubject<Dialog> = new BehaviorSubject<Dialog>(new Dialog());
  private group$: BehaviorSubject<Group> = new BehaviorSubject<Group>(new Group());



  constructor() {}

  public getLastIndex() {
    return this.dialoges[this.dialoges.length - 1] !== undefined ? this.dialoges[this.dialoges.length - 1].id : 0;
  }
  public getLastIndexGroup() {
    return this.groups[this.groups.length - 1] !== undefined ? this.groups[this.groups.length - 1].id : 0;
  }

  public getDialogs() {
    return of(this.dialoges);
  }

  public onChangeDialog(dialog: Dialog) {
    this.dialog$.next(dialog);
  }

  public getDialog() {
    return this.dialog$;
  }

  public addDialog(dialog: Dialog) {
    this.dialoges.push(dialog);
    return this.dialoges[this.getLastIndex()];
  }

  public getGroup() {
    return this.group$;
  }

  public addGroup(group: Group) {
    this.groups.push(group);
    return this.groups[this.getLastIndexGroup()];
  }

  public getGroups() {
    return of(this.groups);
  }

  public onChangeGroup(group: Group) {
    this.group$.next(group);
  }
}
