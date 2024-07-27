import HiFromDev from '@svg/About.svg?react';
import style from './style.module.scss';
import { useComponentInView } from '../../../hooks';
import classNames from 'classnames';

const About = () => {
    const isInView = useComponentInView('aboutSection');

    return (
        <div
            id="aboutSection"
            className={classNames(style.aboutSectionWrapper, {
                [style.inView]: isInView,
            })}
        >
            <div className={style.aboutSection}>
                <div className={style.imgContainer}>
                    <HiFromDev className={style.aboutImg} />
                </div>
                <div className={style.aboutText}>
                    <h2>
                        What can I say! I just{' '}
                        <span className={style.love}>love</span> to
                        <span className={style.code}> code</span>.
                    </h2>
                    <p className={style.about}>
                        Hi, I’m Yahya. I’m the{' '}
                        <strong>Passionate Programmer</strong>. I love builiding
                        stuff (Software stuff obviously). I’m a Fullstack Web
                        Developer and Android Developer with experience in
                        various technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
