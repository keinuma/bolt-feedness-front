"use client";

import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Select } from './select';
import { Category } from '@/lib/types';
import { getOGPData } from '@/lib/ogp';

interface BookmarkFormProps {
  categories: Category[];
  onSubmit: (data: {
    url: string;
    title: string;
    description: string;
    image: string;
    category: string;
  }) => void;
}

export function BookmarkForm({ categories, onSubmit }: BookmarkFormProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    try {
      const ogpData = await getOGPData(url);
      onSubmit({
        url,
        ...ogpData,
        category: 'default',
      });
      setUrl('');
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <Input
          type="url"
          placeholder="URLを入力"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={loading}>
          {loading ? '追加中...' : '追加'}
        </Button>
      </div>
    </form>
  );
}