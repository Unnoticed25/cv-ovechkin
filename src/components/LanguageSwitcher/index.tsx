'use client';

import { usePathname, useRouter } from 'next/navigation';
import {MouseEvent, useEffect} from 'react';
import styles from "./index.module.scss"

interface LanguageSwitcherProps {
    currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(()=>{
        document.getElementsByTagName('main')[0].classList.remove('transition');
    })

    const switchLanguage = (e: MouseEvent<HTMLButtonElement>, newLang: string) => {
        const segments = pathname.split('/');
        segments[1] = newLang;
        document.getElementsByTagName('main')[0].classList.add('transition');
        setTimeout(()=> {
            router.push(segments.join('/'));
        }, 300);

        // document.main.classList.remove('transition');
    };

    return (
        <div className={styles.switcher}>
            <button
                onClick={(e) => switchLanguage(e, 'ru')}
                disabled={currentLang === 'ru'}
            >
                RU
            </button>
            <button
                onClick={(e) => switchLanguage(e, 'en')}
                disabled={currentLang === 'en'}
            >
                EN
            </button>
        </div>
    );
}