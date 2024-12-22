import { BookmarkIcon } from 'lucide-react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-2 py-8">
      <div className="flex items-center gap-3">
        <BookmarkIcon className="w-8 h-8 text-primary animate-pulse" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  );
}