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
