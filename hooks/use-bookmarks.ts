"use client";

import { useEffect, useState } from 'react';
import { Bookmark } from '@/lib/types';
import { db } from '@/lib/db';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // 初期データの読み込み
  useEffect(() => {
    setBookmarks(db.bookmarks.getAll());
  }, []);

  const handleAddBookmark = (data: Omit<Bookmark, 'id' | 'createdAt'>) => {
    const newBookmark = db.bookmarks.add(data);
    setBookmarks(db.bookmarks.getAll());
    return newBookmark;
  };

  const handleDeleteBookmark = (id: string) => {
    db.bookmarks.delete(id);
    setBookmarks(db.bookmarks.getAll());
  };

  const filteredBookmarks = searchQuery
    ? db.bookmarks.search(searchQuery)
    : bookmarks;

  return {
    bookmarks: filteredBookmarks,
    searchQuery,
    setSearchQuery,
    addBookmark: handleAddBookmark,
    deleteBookmark: handleDeleteBookmark,
  };
}