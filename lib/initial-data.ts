import { Bookmark, Category } from './types';

export const initialCategories: Category[] = [
  { id: 'dev', name: '開発', description: 'プログラミングや開発に関する記事' },
  { id: 'design', name: 'デザイン', description: 'UIデザインやUXに関する記事' },
  { id: 'tech', name: 'テクノロジー', description: '最新技術トレンドに関する記事' },
  { id: 'news', name: 'ニュース', description: '技術ニュースやブログ記事' },
  { id: 'tools', name: 'ツール', description: '便利なツールやサービス' },
];

export const initialBookmarks: Bookmark[] = [
  {
    id: '1',
    url: 'https://nextjs.org',
    title: 'Next.js - The React Framework',
    description: 'Next.jsは、フルスタックWebアプリケーションを構築するための最適なフレームワークです。',
    image: 'https://nextjs.org/og.png',
    category: 'dev',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    url: 'https://tailwindcss.com',
    title: 'Tailwind CSS',
    description: 'ユーティリティファーストのCSSフレームワークで、モダンなWebサイトを素早く構築できます。',
    image: 'https://tailwindcss.com/og.png',
    category: 'design',
    createdAt: new Date('2024-01-02'),
  },
  {
    id: '3',
    url: 'https://github.com/shadcn-ui/ui',
    title: 'shadcn/ui',
    description: '美しく、カスタマイズ可能なコンポーネントライブラリです。',
    image: 'https://ui.shadcn.com/og.jpg',
    category: 'tools',
    createdAt: new Date('2024-01-03'),
  },
  {
    id: '4',
    url: 'https://www.typescriptlang.org',
    title: 'TypeScript',
    description: 'JavaScriptに型システムを追加した、スケーラブルな開発のための言語です。',
    image: 'https://www.typescriptlang.org/images/branding/og-image.png',
    category: 'dev',
    createdAt: new Date('2024-01-04'),
  },
  {
    id: '5',
    url: 'https://react.dev',
    title: 'React',
    description: 'ユーザーインターフェースを構築するための JavaScript ライブラリ',
    image: 'https://react.dev/images/og-home.png',
    category: 'dev',
    createdAt: new Date('2024-01-05'),
  },
];