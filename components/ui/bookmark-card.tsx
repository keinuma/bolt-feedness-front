"use client";

import { Bookmark } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, ExternalLink } from 'lucide-react';
import { BookmarkImage } from '@/components/ui/bookmark-image';
import { db } from '@/lib/db';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

interface BookmarkCardProps {
  bookmark: Bookmark;
  onDelete: (id: string) => void;
}

export function BookmarkCard({ bookmark, onDelete }: BookmarkCardProps) {
  const category = db.categories.getById(bookmark.category);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <BookmarkImage
        src={bookmark.image}
        alt={bookmark.title}
        category={bookmark.category}
      />
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg line-clamp-2">{bookmark.title}</h3>
          <Badge variant="secondary" className="shrink-0">
            {category?.name}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {bookmark.description}
        </p>
        <p className="text-xs text-muted-foreground">
          {format(bookmark.createdAt, 'yyyy年MM月dd日', { locale: ja })}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(bookmark.id)}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          削除
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => window.open(bookmark.url, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          開く
        </Button>
      </CardFooter>
    </Card>
  );
}