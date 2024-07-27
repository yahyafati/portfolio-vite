import { useEffect, useState } from 'react';
import StandingManSVG from '@svg/Home.svg?react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';
import classNames from 'classnames';

const MY_TITLE = [
    'Full Stack Developer',
    'React Developer',
    'Java Developer',
    'Kotlin Developer',
];
const Home = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(1);

    useEffect(() => {
        const interval = setTimeout(() => {
            const length = MY_TITLE[currentWordIndex].length;
            const buffer = 30;
            if (currentLetterIndex < length + buffer) {
                setCurrentLetterIndex((current) => current + 1);
            } else {
                setCurrentLetterIndex(1);
                setCurrentWordIndex(
                    (current) => (current + 1) % MY_TITLE.length
                );
            }
        }, 125);

        return () => clearTimeout(interval);
    }, [currentLetterIndex]);

    return (
        <div id="homeSection" className={style.homeSection}>
            <div className={style.introText}>
                <p className={style.hi}>Hi, I'm</p>
                <p className={style.name}>Yahya Fati</p>
                <p className={style.work}>
                    {MY_TITLE[currentWordIndex].slice(0, currentLetterIndex)}
                </p>
                <div className={style.buttons}>
                    <Link
                        to={'/contact'}
                        className={classNames(style.button, style.primary)}
                    >
                        Contact Me
                    </Link>
                    <a
                        href={'/Resume.pdf'}
                        target={'_blank'}
                        className={classNames(style.button)}
                    >
                        Get Resume
                    </a>
                </div>
            </div>
            <StandingManSVG className={style.introImg} />
        </div>
    );
};

export default Home;
