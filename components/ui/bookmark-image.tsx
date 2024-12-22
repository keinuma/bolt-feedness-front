"use client";

import { useState } from 'react';
import Image from 'next/image';
import { DEFAULT_BOOKMARK_IMAGE, FALLBACK_IMAGES } from '@/lib/constants';

interface BookmarkImageProps {
  src: string;
  alt: string;
  category: string;
}

export function BookmarkImage({ src, alt, category }: BookmarkImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    // カテゴリに応じたフォールバック画像を使用
    const fallback = FALLBACK_IMAGES[category as keyof typeof FALLBACK_IMAGES] || DEFAULT_BOOKMARK_IMAGE;
    setImgSrc(fallback);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={handleError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}