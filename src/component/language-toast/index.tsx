import React from 'react';
import {
    AVAILABLE_LANGUAGES,
    isLanguageAvailable,
    T_AVAILABLE_LANGUAGE_CODE,
} from '@/i18n.ts';

import style from './style.module.scss';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { getLocalStorageItem } from '@/utils/localStorage.ts';

interface LanguageToastProps {
    locale: T_AVAILABLE_LANGUAGE_CODE;
    setLocale: (code: T_AVAILABLE_LANGUAGE_CODE) => void;
}

const LanguageToast: React.FC<LanguageToastProps> = ({ locale, setLocale }) => {
    const [open, setOpen] = React.useState(false);
    const everOpenRef = React.useRef(false);

    React.useEffect(() => {
        const storedLocale =
            getLocalStorageItem<T_AVAILABLE_LANGUAGE_CODE>('locale');
        if (!storedLocale || !isLanguageAvailable(storedLocale)) {
            setOpen(true);
            everOpenRef.current = true;
        }
    }, []);
    const handleLanguageChange = (code: T_AVAILABLE_LANGUAGE_CODE) => {
        setLocale(code);
        setOpen(false);
    };

    if (!everOpenRef.current) {
        return null;
    }

    return (
        <div
            className={classNames(style.toastBody, {
                [style.hide]: !open,
            })}
        >
            <h1 className={style.title}>
                <FormattedMessage id="langToast.select.title" />
            </h1>
            <p className={style.description}>
                <FormattedMessage id="langToast.select.description" />
            </p>

            <div className={style.languages}>
                {AVAILABLE_LANGUAGES.map(({ code, name, Flag }) => (
                    <button
                        key={code}
                        className={classNames(style.language, {
                            [style.active]: code === locale,
                        })}
                        onClick={() => handleLanguageChange(code)}
                    >
                        <Flag className={style.flag} />
                        <span className={style.name}>{name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageToast;
