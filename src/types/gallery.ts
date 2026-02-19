import type { ImageData } from './api';

export interface GalleryItem extends ImageData {
    slug: string;
}

export interface Gallery {
    id: string;
    title: string;
    slug: string;
    description?: string;
    coverImage?: string;
    items?: GalleryItem[];
}
