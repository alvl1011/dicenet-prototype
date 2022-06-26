import { User } from './userDataModel';

export class News {
  id: number;
  newsTitle: string;
  newsContent: string;
  image?: string;
  user: User;
  createdAt: Date;
  imagePreview?: string;
  likes: number;
  views: number;
}
