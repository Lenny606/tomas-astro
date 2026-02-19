export const languages = {
    cz: 'Čeština',
    en: 'English',
};

export const defaultLang = 'cz';

export const ui = {
    cz: {
        'nav.home': 'Domů',
        'nav.about': 'O mně',
        'hero.title': 'Digitální zážitky s precizním kódem',
        'hero.subtitle': 'Full-stack webový vývojář se zaměřením na výkon, minimalistický design a moderní technologie jako Astro a React.',
        'hero.cta': 'Moje projekty',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About me',
        'hero.title': 'Digital experiences built with precision',
        'hero.subtitle': 'Full-stack web developer specializing in high-performance web applications, minimalist design, and modern technologies.',
        'hero.cta': 'View Projects',
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
