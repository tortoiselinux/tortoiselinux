export interface IRepo {
  id: number;
  name: string;
  description: string | null;
  full_name: string;
}

export interface IComponentContent {
  text?: string;
  children?: string;
}

export interface ICard {
  name: string;
  desc: string;
  imgURL: string;
  link: string;
}
