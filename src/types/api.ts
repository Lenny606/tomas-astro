export interface ImageData {
    id?: string;
    filename: string;
    title: string;
    description?: string;
    medium?: string;
    year?: string;
    tags?: string[];
    status?: 'available' | 'sold';
    created_at?: string;
    updated_at?: string;
    tenant?: string;
    url?: string;
    thumbnail_url?: string;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    status: number;
}
