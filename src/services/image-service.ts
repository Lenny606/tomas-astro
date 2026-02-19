import { api } from '../utils/api-client';
import type { ImageData } from '../types/api';

export const imageService = {
    /**
     * Get all images, optionally filtered by tenant.
     */
    async getImages(tenant?: string): Promise<ImageData[]> {
        const query = tenant ? `?tenant=${tenant}` : '';
        return api.get<ImageData[]>(`/images${query}`);
    },

    /**
     * Get a specific image by ID.
     */
    async getImage(id: string): Promise<ImageData> {
        return api.get<ImageData>(`/images/${id}`);
    },

    /**
     * Get the newest entry for each unique filename for a specific tenant.
     */
    async getLatestByFilename(tenant: string): Promise<ImageData[]> {
        return api.get<ImageData[]>(`/images/latest?tenant=${tenant}`);
    },

    /**
     * Save or update image metadata.
     */
    async saveImageMetadata(data: ImageData): Promise<ImageData> {
        return api.post<ImageData>('/images', data);
    }
};
