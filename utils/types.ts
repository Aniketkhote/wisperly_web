export interface IJob {
  id: number;
  company: string;
  title: string;
  description: string;
  tags: string[];
  location: string;
  logo: string;
}

export interface IPod {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  members: number;
}

export interface IUser {
  id: number;
  src: string;
  name: string;
  role: string;
}

export interface IHashtag {
  tag: string;
  postCount: number;
}

export interface IPodPost {
  id: number;
  author: IUser;
  content: string;
  likes: number;
  comments: IComment[];
  createdAt: string;
}

export interface IComment {
  id: number;
  author: IUser;
  content: string;
  createdAt: string;
  replies?: IComment[];
}
