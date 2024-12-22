"use client";

import { PageTitle } from '@/components/page-title';
import { BookmarkForm } from '@/components/ui/bookmark-form';
import { BookmarkList } from '@/components/bookmark-list';
import { SearchBar } from '@/components/search-bar';
import { useBookmarks } from '@/hooks/use-bookmarks';
import { db } from '@/lib/db';

export default function Home() {
  const {
    bookmarks,
    searchQuery,
    setSearchQuery,
    addBookmark,
    deleteBookmark,
  } = useBookmarks();

  const categories = db.categories.getAll();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <PageTitle 
          title="ブックマーク管理"
          subtitle="お気に入りのウェブサイトを整理・管理"
        />
        
        <BookmarkForm 
          categories={categories} 
          onSubmit={addBookmark} 
        />
        
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <BookmarkList 
          bookmarks={bookmarks}
          onDelete={deleteBookmark}
        />
      </div>
    </main>
  );
}