import { User } from './userDataModel';

export class Dialog {
  id: number;
  userId: number;
  companionId: number;
  messages: Message[];
}

export class Group {
  id: number;
  profileImage: string;
  name: string;
  isJoin?: boolean;
  amount: number;
  description: string;
  link: string;
  userId?: number;
  companions?: User[];
  messages?: Message[];
}

export class Message {
  id: number;
  userId: number;
  text: string;
  isRead: boolean;
  sTime: Date;
}
