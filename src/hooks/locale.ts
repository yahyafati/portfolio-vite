import {
    T_AVAILABLE_LANGUAGE_CODE,
    AVAILABLE_LANGUAGES,
    isLanguageAvailable,
} from '@/i18n.ts';
import { useEffect, useState } from 'react';
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from '@/utils/localStorage.ts';

export const getBrowserLocale = () => {
    const language = navigator.language.split(/[-_]/)[0];
    return AVAILABLE_LANGUAGES.find((lang) => lang.code === language)?.code;
};

const DEFAULT_LOCALE = 'en';
export const useLocale = () => {
    const [locale, setLocale] =
        useState<T_AVAILABLE_LANGUAGE_CODE>(DEFAULT_LOCALE);

    useEffect(() => {
        const storedLocale =
            getLocalStorageItem<T_AVAILABLE_LANGUAGE_CODE>('locale');

        if (!storedLocale || !isLanguageAvailable(storedLocale)) {
            const browserLocale = getBrowserLocale() || DEFAULT_LOCALE;
            if (isLanguageAvailable(browserLocale)) {
                setLocale(browserLocale);
            } else {
                setLocale(DEFAULT_LOCALE);
            }
        } else {
            setLocale(storedLocale);
        }
    }, []);

    const handleLanguageChange = (code: T_AVAILABLE_LANGUAGE_CODE) => {
        setLocale(code);
        setLocalStorageItem('locale', code);
    };

    return [locale, handleLanguageChange] as const;
};
