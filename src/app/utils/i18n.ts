import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

type Translations = {
    [key: string]: any;
};

const translations: Translations = { en, ru };

export function getTranslations(lang: string): any {
    return translations[lang] || translations.en;
}

export function getLanguageFromPath(pathname: string): string {
    const segments = pathname.split('/');
    const lang = segments[1];
    return translations[lang] ? lang : 'en';
}

export function getTranslationsSafe(lang: string): unknown {
    return translations[lang] || translations.en;
}