'use client';

import {usePathname, useRouter} from 'next/navigation';
import styles from "./index.module.scss"

interface LanguageSwitcherProps {
    currentLang: string;
}

export default function LanguageSwitcher({currentLang}: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLanguage = (newLang: string) => {
        const segments = pathname.split('/');
        segments[1] = newLang;
        router.push(segments.join('/'));
    };

    return (
        <div className={styles.switcher}>
            <button
                onClick={() => switchLanguage('ru')}
                disabled={currentLang === 'ru'}
            >
                RU
            </button>
            <button
                onClick={() => switchLanguage('en')}
                disabled={currentLang === 'en'}
            >
                EN
            </button>
        </div>
    );
}