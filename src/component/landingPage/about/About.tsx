import HiFromDev from '@svg/About.svg?react';
import style from './style.module.scss';
import { useComponentInView } from '@/hooks';
import classNames from 'classnames';
import FlickeringBold from '@components/flickering-bold';

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
                        <FlickeringBold
                            texts={[
                                { text: 'What can I say! I just' },
                                {
                                    text: 'love',
                                    className: style.love,
                                },
                                {
                                    text: ' to',
                                },
                                {
                                    text: ' code',
                                    className: style.code,
                                },
                            ]}
                            delay={50}
                        />
                    </h2>
                    <p className={style.about}>
                        Hi, I’m Yahya. I’m the{' '}
                        <FlickeringBold
                            texts={[
                                {
                                    text: 'Passionate Developer',
                                    className: style.passionate,
                                },
                            ]}
                            delay={60}
                        />
                        . I love builiding stuff (Software stuff obviously). I’m
                        a Fullstack Web Developer and Android Developer with
                        experience in various technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
