import { DEFAULT_BOOKMARK_IMAGE } from './constants';

export async function getOGPData(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    const getMetaContent = (property: string) => {
      const match = html.match(new RegExp(`<meta[^>]*(?:property|name)=["']${property}["'][^>]*content=["']([^"']*)["']`));
      return match?.[1] || '';
    };

    // titleの取得を改善
    const ogTitle = getMetaContent('og:title');
    const title = ogTitle || getMetaContent('title') || url;

    // descriptionの取得を改善
    const ogDescription = getMetaContent('og:description');
    const description = ogDescription || getMetaContent('description') || '';

    // imageの取得を改善
    const ogImage = getMetaContent('og:image');
    const image = ogImage || DEFAULT_BOOKMARK_IMAGE;

    return {
      title,
      description,
      image,
    };
  } catch (error) {
    console.error('Error fetching OGP data:', error);
    return {
      title: url,
      description: '',
      image: DEFAULT_BOOKMARK_IMAGE,
    };
  }
}