import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { messages } from './i18n.ts';
import ContactPage from '@/pages/contact-page';
import './style/app/App.scss';

import { IntlProvider } from 'react-intl';
import { useLocale } from '@/hooks/locale.ts';
import LanguageToast from '@/component/language-toast';
import ShinyPage from '@/component/shine-component/shiny-page';
import LandingPage from '@/pages/landing-page';

const shinyPageDisabled =
    import.meta.env.VITE_REACT_APP_DISABLE_SHINY_PAGE === 'true';
const App = () => {
    const [locale, setLocale] = useLocale();
    const [showShiny, setShowShiny] = useState(!shinyPageDisabled);

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
                <Switch>
                    <Route path={'/contact'} component={ContactPage} />
                    <Route path="/" children={<LandingPage />} exact />
                </Switch>
            </BrowserRouter>
            <LanguageToast locale={locale} setLocale={setLocale} />
        </IntlProvider>
    );
};

export default App;
