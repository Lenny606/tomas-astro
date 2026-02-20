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
        'hero.view_work': 'Vybrané projekty',
        'work.title': 'Vybrané projekty',
        'work.view_all': 'Zobrazit vše',
        'category.web': 'Webový vývoj',
        'category.design': 'Design',
        'category.marketing': 'Marketing',
        'about.agency_text_1': 'Momentálně vedu ',
        'about.agency_text_agency': '360 digitální agenturu',
        'about.agency_text_specialising': ' specializující se na marketing a design.',
        'about.agency_text_2': ' Prostřednictvím své agentury, nebo jako „fractional marketing leader“, jsem pomohl korporátním klientům i malým firmám transformovat jejich značky. Věřím v hnutí ',
        'about.agency_text_tiny': 'tiny product',
        'about.agency_text_3': ', takže také vedu řadu bootstrapped startupů a projektů v oblastech ',
        'about.agency_text_4': ' dat a výzkumu.',
        'about.involvement_title': 'Tady je pár věcí, na kterých momentálně pracuji:',
        'galleries.title': 'Galerie',
        'galleries.subtitle': 'Objevte různé kolekce fotografií, digitálního umění a architektonických studií.',
        'galleries.view_collection': 'Zobrazit kolekci',
        'galleries.back': '← Zpět do galerií',
        'item.medium': 'Médium',
        'item.year': 'Rok',
        'item.status': 'Stav',
        'item.sold': 'Prodáno',
        'item.available': 'K dispozici',
        'item.inquire': 'Dotaz na toto dílo',
        'item.back': '← Zpět do',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.work': 'Work',
        'nav.galleries': 'Galleries',
        'hero.title': 'Digital experiences built with precision',
        'hero.subtitle': 'Full-stack web developer specializing in high-performance web applications, minimalist design, and modern technologies.',
        'hero.cta': 'View Projects',
        'hero.view_work': 'View Selected Work',
        'work.title': 'Selected Work',
        'work.view_all': 'View All',
        'category.web': 'Web Development',
        'category.design': 'Design',
        'category.marketing': 'Marketing',
        'about.agency_text_1': 'I currently run a ',
        'about.agency_text_agency': '360 digital agency',
        'about.agency_text_specialising': ' specialising in marketing & design.',
        'about.agency_text_2': ' Through my agency, or as a fractional marketing leader, I\'ve helped enterprise customers & small businesses transform their brands. I\'m a believer in the ',
        'about.agency_text_tiny': 'tiny product',
        'about.agency_text_3': ' movement so I\'m also running a number of bootstrapped startups and projects in the ',
        'about.agency_text_4': ' data & research spaces.',
        'about.involvement_title': 'Here\'s a few things I\'m involved in right now:',
        'galleries.title': 'Galleries',
        'galleries.subtitle': 'Explore different collections of photography, digital art, and architectural studies.',
        'galleries.view_collection': 'View Collection',
        'galleries.back': '← Back to Galleries',
        'item.medium': 'Medium',
        'item.year': 'Year',
        'item.status': 'Status',
        'item.sold': 'Sold',
        'item.available': 'Available',
        'item.inquire': 'Inquire about this piece',
        'item.back': '← Back to',
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
