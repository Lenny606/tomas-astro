export const languages = {
    cz: 'Čeština',
    en: 'English',
};

export const defaultLang = 'cz';

export const ui = {
    cz: {
        'nav.home': 'Domů',
        'nav.about': 'O mně',
        'nav.work': 'Práce',
        'nav.galleries': 'Galerie',
        'hero.title': 'Digitální zážitky s precizním kódem',
        'hero.subtitle': 'Full-stack webový vývojář se zaměřením na výkon, minimalistický design a moderní technologie jako Astro a React.',
        'hero.cta': 'Moje projekty',
        'about.agency_text_1': 'Momentálně vedu ',
        'about.agency_text_agency': '360 digitální agenturu',
        'about.agency_text_specialising': ' specializující se na marketing a design.',
        'about.agency_text_2': ' Prostřednictvím své agentury, nebo jako „fractional marketing leader“, jsem pomohl korporátním klientům i malým firmám transformovat jejich značky. Věřím v hnutí ',
        'about.agency_text_tiny': 'tiny product',
        'about.agency_text_3': ', takže také vedu řadu bootstrapped startupů a projektů v oblastech ',
        'about.agency_text_4': ' dat a výzkumu.',
        'about.involvement_title': 'Tady je pár věcí, na kterých momentálně pracuji:',
        'capabilities.title': 'Capabilities',
        'capabilities.seo': 'Enterprise SEO',
        'capabilities.ads': 'Paid Advertising',
        'capabilities.design': 'Design',
        'capabilities.strategy': 'Marketing Strategy',
        'capabilities.dev': 'Web Development',
        'capabilities.ooh': 'OOH Advertising',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.work': 'Work',
        'nav.galleries': 'Galleries',
        'hero.title': 'Digital experiences built with precision',
        'hero.subtitle': 'Full-stack web developer specializing in high-performance web applications, minimalist design, and modern technologies.',
        'hero.cta': 'View Projects',
        'about.agency_text_1': 'I currently run a ',
        'about.agency_text_agency': '360 digital agency',
        'about.agency_text_specialising': ' specialising in marketing & design.',
        'about.agency_text_2': ' Through my agency, or as a fractional marketing leader, I\'ve helped enterprise customers & small businesses transform their brands. I\'m a believer in the ',
        'about.agency_text_tiny': 'tiny product',
        'about.agency_text_3': ' movement so I\'m also running a number of bootstrapped startups and projects in the ',
        'about.agency_text_4': ' data & research spaces.',
        'about.involvement_title': 'Here\'s a few things I\'m involved in right now:',
        'capabilities.title': 'Capabilities',
        'capabilities.seo': 'Enterprise SEO',
        'capabilities.ads': 'Paid Advertising',
        'capabilities.design': 'Design',
        'capabilities.strategy': 'Marketing Strategy',
        'capabilities.dev': 'Web Development',
        'capabilities.ooh': 'OOH Advertising',
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
