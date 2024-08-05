import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/landingPage/LandingPage';
import Header from './component/header/Header';
import { messages } from './i18n.ts';

const App = () => {
    const [locale, setLocale] = useLocale();
    const [currentPage, setCurrentPage] = useState('home');
    const [showShiny, setShowShiny] = useState(true);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const handleAnimationEnd = () => {
        setShowShiny(false);
    };

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            {showShiny && <ShinyPage onAnimationEnd={handleAnimationEnd} />}
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
import ShinyPage from '@/component/shine-component/shiny-page';

export default App;
