import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, of } from 'rxjs';
import { EventModel } from '../shared/data-models/eventDataModel';
import { User } from '../shared/data-models/userDataModel';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: EventModel[] = [
    {
      id: 0,
      title: 'Warhammer Games Workshop',
      status: 'ACCEPTED',
      location: 'Karlsruhe',
      date: new Date(),
      author: {
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
      watches: 20,
      members: [
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
          isFriend: true,
          status: 'AWAIT'
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
          isFriend: true,
          status: 'AWAIT'
        }
      ],
      imagePreview: 'assets/images/event.png',
      // eslint-disable-next-line max-len
      description: 'Games Workshop is restarting their beginner program following the forced close due to covid restrictions. New players are encouraged to joind a biginner friendly tournament, while more experienced players can join as mentors. Thr prize consists of a few small orc warriors to start of the winners carreer.'
    },
    {
      id: 1,
      title: 'D&D: The Revenge of Raven queen',
      status: 'AWAIT',
      location: 'AstA HKA',
      date: new Date(),
      author: {
        id: 0,
        firstname: 'Vladimir',
        lastname: 'Alyoshin',
        birthdate: new Date(200, 12, 13),
        email: 'alvl1011@h-ka.de',
        password: 'password',
        career: 'Student',
        city: 'Karlsruhe',
        nickname: 'vladi',
        games: 2,
        profileImage: 'assets/images/avatar.png',
        isFriend: true
      },
      watches: 26,
      members: [
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
          isFriend: true,
          status: 'AWAIT'
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
          isFriend: true,
          status: 'AWAIT'
        }
      ],
      imagePreview: 'assets/images/dnd.jpg',
      // eslint-disable-next-line max-len
      description: 'Games Workshop is restarting their beginner program following the forced close due to covid restrictions. New players are encouraged to joind a biginner friendly tournament, while more experienced players can join as mentors. Thr prize consists of a few small orc warriors to start of the winners carreer.'
    },
    {
      id: 2,
      title: 'Magic: The Gathering',
      status: 'FAILED',
      location: 'Pforzheim',
      date: new Date(),
      author: {
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
      watches: 20,
      members: [
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
          isFriend: true,
          status: 'AWAIT'
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
          isFriend: true,
          status: 'AWAIT'
        }
      ],
      imagePreview: 'assets/images/mtg.jpg',
      // eslint-disable-next-line max-len
      description: 'Games Workshop is restarting their beginner program following the forced close due to covid restrictions. New players are encouraged to joind a biginner friendly tournament, while more experienced players can join as mentors. Thr prize consists of a few small orc warriors to start of the winners carreer.'
    }
  ];
  private event$: BehaviorSubject<EventModel> = new BehaviorSubject<EventModel>(new EventModel());

  public onChangeTitle(event: EventModel) {
    this.event$.next(event);
  }

  public getEvent() {
    return this.event$;
  }

  public getLastIndex() {
    return this.events[this.events.length - 1] !== undefined ? this.events[this.events.length - 1].id : 0;
  }

  public getEvents() {
    return of(this.events);
  }

  public deleteEvent(event: EventModel) {
    this.events.forEach((value, index) => {
      if(value.id === event.id) {
        this.events.splice(index, 1);
      }
    });
  }

  public deleteUserFromEvent(user: User, event: EventModel) {
    this.events.forEach((single) => {
      if (single.id === event.id) {
          single.members.forEach((member, index) => {
            if(member.id === user.id)
              {single.members.splice(index, 1);}
          });
          console.log(single.members);
      }
    });
  }

  public addEvent(event: EventModel) {
    this.events.push(event);
  }

  public editEvent(event: EventModel) {
    const updateItem = this.events.find(this.findIndexToUpdate, event.id);
    const index = this.events.indexOf(updateItem);
    this.events[index] = event;
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  findElement(value) {
    if(value === 'all') {
      return this.getEvents();
    }
    return of(this.events.filter((event) => value === event.title));
  }

}
