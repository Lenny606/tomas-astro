import { z } from 'zod';

export const GalleryItemSchema = z.object({
    id: z.string(),
    filename: z.string().optional(),
    url: z.string(),
    title: z.string(),
    description: z.string().optional(),
    medium: z.string().optional(),
    year: z.string().optional(),
    status: z.enum(['available', 'sold', 'reserved']).optional(),
    slug: z.string(),
    pageUrl: z.string().optional(),
});

export const GallerySchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
    items: z.array(GalleryItemSchema).optional(),
});

export type GalleryItem = z.infer<typeof GalleryItemSchema>;
export type Gallery = z.infer<typeof GallerySchema>;
