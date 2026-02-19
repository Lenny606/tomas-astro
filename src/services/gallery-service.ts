import type { Gallery, GalleryItem } from '../types/gallery';
import { imageService } from './image-service';
import localGalleries from '../data/galleries.json';

// Set to true to use API, false to use local JSON structure
const USE_API = false;

export const galleryService = {
    /**
     * Get all galleries
     */
    async getGalleries(): Promise<Gallery[]> {
        if (USE_API) {
            // If the API supports multiple galleries/tenants as folders/categories
            // For now, let's assume API returns image data and we might need to group them.
            // This is a placeholder for actual API logic once the backend has gallery concepts.
            // For now we'll stick to local or a hybrid.
            return localGalleries as Gallery[];
        }
        return localGalleries as Gallery[];
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
