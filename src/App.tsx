import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/landingPage/LandingPage';
import Header from './component/header/Header';
import ContactPage from './component/contact/ContactPage';

import './style/app/App.scss';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    return (
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
    );
};

export default App;
