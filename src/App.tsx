import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/landingPage/LandingPage';
import Header from './component/header/Header';
import { messages } from './i18n.ts';

const App = () => {
    const [locale, setLocale] = useLocale();
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        document.documentElement.lang = locale;
        console.log('Locale:', locale);
    }, [locale]);

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <BrowserRouter>
                <div>
                    <Header
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <Switch>
                        <Route path={'/contact'} component={ContactPage} />
                        <Route path="/" children={<LandingPage />} exact />
                    </Switch>
                </div>
            </BrowserRouter>
            <LanguageToast locale={locale} setLocale={setLocale} />
        </IntlProvider>
    );
};

import ContactPage from './component/contact/ContactPage';
import './style/app/App.scss';

import { IntlProvider } from 'react-intl';
import { useLocale } from '@/hooks/locale.ts';
import LanguageToast from '@/component/language-toast';

export default App;
