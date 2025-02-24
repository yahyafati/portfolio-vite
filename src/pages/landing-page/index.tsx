import React from "react";
import Home from "@/component/landing-page/home/Home.tsx";
import About from "@/component/landing-page/about/About.tsx";
import Services from "@/component/landing-page/service/Services.tsx";
import Projects from "@/component/landing-page/project/Projects.tsx";
import Testimonial from "@/component/landing-page/testimonial/Testimonial.tsx";
import ShallWe from "@/component/landing-page/shallWe/ShallWe.tsx";
import Contact from "@/component/landing-page/contact/Contact.tsx";

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
