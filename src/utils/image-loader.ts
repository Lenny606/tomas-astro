import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpeg,jpg,png,gif,webp}"
);

export async function getImageAsset(path: string) {
  // Convert public path to asset path
  // e.g., /images/galleries/abstract-cover.jpg -> /src/assets/images/galleries/abstract-cover.jpg
  const assetPath = path.startsWith("/") 
    ? `/src/assets${path}` 
    : `/src/assets/images/${path}`;
  
  const loadImg = images[assetPath];
  
  if (!loadImg) {
    console.warn(`Image not found: ${assetPath}`);
    return null;
  }
  
  return (await loadImg()).default;
}
