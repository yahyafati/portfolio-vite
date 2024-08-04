import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/landingPage/LandingPage';
import Header from './component/header/Header';
import { messages, T_AVAILABLE_LANGUAGE_CODE } from './i18n.ts';

const App = () => {
    const [locale] = useState<T_AVAILABLE_LANGUAGE_CODE>('en');
    const [currentPage, setCurrentPage] = useState('home');

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
        </IntlProvider>
    );
};

import ContactPage from './component/contact/ContactPage';
import './style/app/App.scss';

import { IntlProvider } from 'react-intl';

export default App;
