import React from 'react';
import Home from '@/component/landing-page/home';
import About from '@/component/landing-page/about';
import Services from '@/component/landing-page/services';
import Projects from '@/component/landing-page/projects';
import Testimonial from '@/component/landing-page/testimonial';
import Contact from '@/component/landing-page/contact';

import style from './style.module.scss';
import LineOfContent from '@/component/landing-page/line-of-content';
import { useScrollEffect } from '@/hooks';
import Footer from '@/component/landing-page/footer';

const DISABLE_TESTIMONIAL =
    import.meta.env.VITE_REACT_APP_DISABLE_TESTIMONIALS === 'true';

interface LandingPageProps {}

const IDS = [
    'home',
    'about',
    'services',
    'projects',
    'testimonials',
    'contact',
];
const LandingPage: React.FC<LandingPageProps> = () => {
    const [currentSection, setCurrentSection] = React.useState(IDS[0]);
    const timeoutRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        const currentSectionElement = document.getElementById(currentSection);
        if (!currentSectionElement) return;

        timeoutRef.current = window.setTimeout(() => {
            window.location.hash = currentSection;
            currentSectionElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 500);

        return () => {
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        };
    }, [currentSection]);

    useScrollEffect(() => {
        const maxViewableSection = IDS.reduce((acc, id) => {
            const element = document.getElementById(id);
            if (!element) return acc;
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2) return id;
            return acc;
        }, IDS[0]);
        setCurrentSection(maxViewableSection);
    }, []);

    return (
        <div id="AppContainer" className={style.page}>
            <LineOfContent currentSection={currentSection} />
            <Home />
            <About />
            <Services />
            <Projects />
            {!DISABLE_TESTIMONIAL && <Testimonial />}
            {/*<ShallWe />*/}
            <Contact />
            <Footer />
        </div>
    );
};

export default LandingPage;
