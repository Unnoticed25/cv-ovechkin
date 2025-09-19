import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

type Translations = {
    [key: string]: any;
};

const translations: Translations = { en, ru };

export function getTranslations(lang: string): any {
    return translations[lang] || translations.en;
}