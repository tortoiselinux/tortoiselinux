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
