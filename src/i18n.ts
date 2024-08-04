import enMessages from '@locales/en.json';
import trMessages from '@locales/tr.json';
import React from 'react';
import { US, TR } from 'country-flag-icons/react/3x2';

const flattenMessages = (nestedMessages: any, prefix = '') => {
    return Object.keys(nestedMessages).reduce((messages: any, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
};

export const messages = {
    en: flattenMessages(enMessages),
    tr: flattenMessages(trMessages),
} as const;

export type T_AVAILABLE_LANGUAGE_CODE = keyof typeof messages;

export type Language = {
    code: T_AVAILABLE_LANGUAGE_CODE;
    name: string;
    Flag: React.ElementType;
};
export const AVAILABLE_LANGUAGES: Language[] = [
    { code: 'en', name: 'English', Flag: US },
    { code: 'tr', name: 'Türkçe', Flag: TR },
];
