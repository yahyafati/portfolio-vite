import React from 'react';
import Home from '@/component/landing-page/home';
import About from '@/component/landing-page/about';
import Services from '@/component/landing-page/services';
import Projects from '@/component/landing-page/projects';
import Testimonial from '@/component/landing-page/testimonial';
import ShallWe from '@/component/landing-page/shallWe';
import Contact from '@/component/landing-page/contact';

import style from './style.module.scss';
import LineOfContent from '@/component/landing-page/line-of-content';

const DISABLE_TESTIMONIAL =
    import.meta.env.VITE_REACT_APP_DISABLE_TESTIMONIALS === 'true';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
    return (
        <div id="AppContainer" className={style.page}>
            <LineOfContent />
            <Home />
            <About />
            <Services />
            <Projects />
            {!DISABLE_TESTIMONIAL && <Testimonial />}
            <ShallWe />
            <Contact />
        </div>
    );
};

export default LandingPage;
