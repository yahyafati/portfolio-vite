import HiFromDev from '@svg/About.svg?react';
import style from './style.module.scss';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <div id="about" className={style.aboutSectionWrapper}>
            <div className={style.aboutSection}>
                <div className={style.imgContainer}>
                    <HiFromDev className={style.aboutImg} />
                </div>
                <div className={style.aboutText}>
                    <h2>
                        <FormattedMessage id="landing.about.body.base" />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default About;
