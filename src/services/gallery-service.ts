import { GallerySchema, type Gallery, type GalleryItem } from '../types/gallery';
import { imageService } from './image-service';
import localGalleriesJson from '../data/galleries.json';
import { z } from 'zod';

// Set to true to use API, false to use local JSON structure
const USE_API = import.meta.env.PUBLIC_USE_API === 'true';

export const galleryService = {
    /**
     * Get all galleries
     */
    async getGalleries(): Promise<Gallery[]> {
        if (USE_API) {
            // Placeholder for actual API logic
            return z.array(GallerySchema).parse(localGalleriesJson);
        }
        
        // Validate local JSON
        try {
            return z.array(GallerySchema).parse(localGalleriesJson);
        } catch (error) {
            console.error('Failed to validate galleries.json:', error);
            return localGalleriesJson as Gallery[]; // Fallback to unsafe cast if validation fails during dev
        }
    },

    /**
     * Get a specific gallery by slug
     */
    async getGalleryBySlug(slug: string): Promise<Gallery | undefined> {
        const galleries = await this.getGalleries();
        return galleries.find(g => g.slug === slug);
    },

    /**
     * Get a specific item from a gallery
     */
    async getGalleryItem(gallerySlug: string, itemSlug: string): Promise<GalleryItem | undefined> {
        const gallery = await this.getGalleryBySlug(gallerySlug);
        return gallery?.items?.find(i => i.slug === itemSlug);
    },

    /**
     * Sync local items with API data if needed
     */
    async syncWithApi(tenant: string): Promise<void> {
        if (USE_API) {
            const apiImages = await imageService.getLatestByFilename(tenant);
            // Logic to merge or update local structure with API data
            console.log('Synced with API:', apiImages);
        }
    }
};
