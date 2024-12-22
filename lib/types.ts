export interface Bookmark {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}