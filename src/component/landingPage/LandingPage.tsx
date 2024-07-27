import React from 'react';
import Home from './home/Home';
import About from './about/About';
import Services from './service/Services';
import Projects from './project/Projects';
import ShallWe from './shallWe/ShallWe';
import Contact from './contact/Contact';
import Testimonial from './testimonial/Testimonial.jsx';

const DISABLE_TESTIMONIAL =
    import.meta.env.VITE_REACT_APP_DISABLE_TESTIMONIALS === 'true';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
    return (
        <div id="AppContainer">
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
