import { User } from './userDataModel';

export class EventModel {
  id: number;
  title: string;
  status: string;
  location: string;
  date: Date;
  author: User;
  watches: number;
  members?: User[];
  imagePreview: string;
  description: string;
}
