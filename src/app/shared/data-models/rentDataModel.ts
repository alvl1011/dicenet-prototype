import { Game } from './gameModel';
import { User } from './userDataModel';

export class Rent {
  id: number;
  game: Game;
  user: User;
  status: string;
  date: Date;
  until: Date;
}
