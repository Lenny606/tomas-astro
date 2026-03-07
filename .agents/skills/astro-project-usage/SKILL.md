---
name: astro-project-usage
description: Guidelines and patterns for working with this specific Astro project (Astro 5, React, Tailwind 4, SSR, i18n).
---

# Astro Project Usage Guide

This skill provides context and patterns for developing in the `tomas-astro` codebase.

## Project Overview

- **Framework**: Astro 5.x
- **Rendering**: SSR (`output: 'server'`) using `@astrojs/node` (standalone mode).
- **Styling**: Tailwind CSS 4.x via `@tailwindcss/vite`.
- **UI Components**: Primarily Astro components, with React integration for interactive parts.
- **i18n**: Supported for `cz` (default) and `en`. Locales are prefix-based (except default).

## Directory Structure

- `src/pages/`: Contains page routes. Locale-specific pages are in `src/pages/[locale]/`. Default locale (`cz`) pages are at the root of `pages/`.
- `src/components/`: Reusable Astro and React components.
- `src/layouts/`: Base layouts (e.g., `BaseLayout.astro`) used across pages.
- `src/services/`: Business logic and data fetching services (e.g., `gallery-service.ts`).
- `src/data/`: Local JSON data files (e.g., `galleries.json`).
- `src/types/`: TypeScript interfaces and types.
- `src/utils/`: Utility functions and clients (e.g., `api-client.ts`).
- `public/`: Static assets like fonts and scripts.

## Core Patterns

### Internationalization (i18n)

- **Routing**: Use prefix-based routing for non-default locales (e.g., `/en/about`).
- **Translations**: Content is largely handled within `.astro` files or through locale-specific page files.
- **Navigation**: Use the `Navigation.astro` component which handles locale switching.

### Data Management

- **Services**: Always use services in `src/services/` to fetch or manipulate data.
- **Local Data**: Primary data currently resides in `src/data/*.json`.
- **API Client**: For external data, use the pre-configured client in `src/utils/api-client.ts`.

### Components & Styling

- **Tailwind**: Use Tailwind 4 utility classes for styling. Custom configurations (if any) are handled via Vite plugins in `astro.config.mjs`.
- **Astro Components**: Preferred for static content and layout.
- **React Components**: Used for client-side interactivity where needed (standard `.tsx` files).

## Common Tasks

### Adding a New Page
1. Create a `.astro` file in `src/pages/` (for CZ) and/or `src/pages/en/` (for EN).
2. Import and use `BaseLayout.astro`.
3. Ensure SEO metadata (title, description) is passed to the layout.

### Modifying Gallery Data
1. Update `src/data/galleries.json`.
2. Ensure images mentioned exist or are reachable via the `image-service`.

## Web Design Showcase Patterns

When creating a "Web Design Showcase" or "Micro-web" demo (e.g., for presenting designs in the web-design gallery):

### 1. Standalone Design & Styles
- The design and styles should be independent of the rest of the website to avoid style leakage.
- CSS should be scoped using a specific class prefix (e.g., `.lpd-root`, `.wd1-root`) or placed directly within the `.astro` file's `<style>` tag.
- If necessary, use `:global(body):has(.your-root-class)` to override global body styles for that specific showcase.

### 2. Device Switcher & Viewport Simulation
- Provide a feature to toggle between **Desktop** and **Mobile** views dynamically on the page.
- **Viewport Frame**: Wrap the showcase content in a container that simulates a device screen.
    - For Mobile: Use a fixed frame (e.g., 390x844px) with a border, rounded corners, and `overflow-y: auto`.
    - For Desktop: Use full width or a standard max-width container.
- **Toggle Logic**: Use a `data-device` attribute on a root wrapper and simple vanilla JavaScript to switch the attribute, which in turn updates the CSS layout.

### 3. Content & Presentation
- **Language**: Content must be in Czech (`cz`).
- **Descriptive Elements**: The content should explicitly describe the design elements (e.g., color palette, typography, conversion principles) to serve as a design presentation.
- **Themes**: Implement specialized themes as requested (e.g., "White & Blue" for product efficiency, "Blue & Gold" for premium elegance).

### 4. Assets & Gallery Integration
- **Thumbnails**: Generate a high-quality 1:1 or 4:3 thumbnail depicting the design.
- **Data**: Link the page in `src/data/galleries.json` under the appropriate gallery section, ensuring the `pageUrl` points to the new `.astro` page.

## Best Practices

- **Strict Typing**: Use TypeScript interfaces from `src/types/` for all data structures.
- **Component Reusability**: Extract repeated UI patterns into `src/components/`.
- **Environment Variables**: Never hardcode sensitive info; use `.env` and access via `import.meta.env`.
