import { Bookmark, Category } from './types';
import { initialBookmarks, initialCategories } from './initial-data';

// 初期データを使用
let bookmarks: Bookmark[] = [...initialBookmarks];
let categories: Category[] = [...initialCategories];

export const db = {
  bookmarks: {
    getAll: () => bookmarks,
    getByCategory: (categoryId: string) => 
      bookmarks.filter(b => b.category === categoryId),
    add: (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => {
      const newBookmark: Bookmark = {
        ...bookmark,
        id: Math.random().toString(36).slice(2),
        createdAt: new Date(),
      };
      bookmarks = [newBookmark, ...bookmarks];
      return newBookmark;
    },
    delete: (id: string) => {
      bookmarks = bookmarks.filter(b => b.id !== id);
    },
    search: (query: string) => 
      bookmarks.filter(b => 
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.description.toLowerCase().includes(query.toLowerCase())
      ),
  },
  categories: {
    getAll: () => categories,
    add: (category: Omit<Category, 'id'>) => {
      const newCategory: Category = {
        ...category,
        id: Math.random().toString(36).slice(2),
      };
      categories.push(newCategory);
      return newCategory;
    },
    getById: (id: string) =>
      categories.find(c => c.id === id),
  },
};