export const languages = {
    cz: 'Čeština',
    en: 'English',
};

export const defaultLang = 'cz';

export const ui = {
    cz: {
        'nav.home': 'Domů',
        'nav.about': 'O nás',
        'hero.title': 'Budoucnost Astro Projektů',
        'hero.subtitle': 'Jednoduché, rychlé a lokalizované webové aplikace.',
        'hero.cta': 'Začněte nyní',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'hero.title': 'Future of Astro Projects',
        'hero.subtitle': 'Simple, fast, and localized web applications.',
        'hero.cta': 'Get Started',
    },
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
