import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useScrollY } from '@/hooks';

const MY_TITLES_LENGTH = 4;
const Home = () => {
    const { formatMessage: intlFmt } = useIntl();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(1);
    const scrollY = useScrollY();
    const HIDE_SCROLL_DOWN_BTN_Y_THRESHOLD = 30;

    const MY_TITLE_ALL = Array.from({ length: MY_TITLES_LENGTH }, (_, i) =>
        intlFmt({ id: `landing.home.titles.title${i + 1}`, defaultMessage: '' })
    );

    const MY_TITLE = MY_TITLE_ALL.filter((title) => title !== '');

    if (MY_TITLE.length !== MY_TITLES_LENGTH) {
        throw new Error(
            'The length of the title in the translation file is not equal to MY_TITLES_LENGTH'
        );
    }

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLetterIndex]);

    return (
        <div id="homeSection" className={style.homeSection}>
            <div className={style.mainContent}>
                <p className={style.hi}>Hi, I'm </p>
                <h1 className={style.name}>John Doe</h1>
                <h2 className={style.work}>
                    Consultant, Developer, and Designer
                </h2>
                <button className={classNames(style.primary)}>
                    <Link to="/contact">
                        <FormattedMessage
                            id="landing.home.contactMe"
                            defaultMessage="Contact Me"
                        />
                    </Link>
                </button>
            </div>

            <button
                className={classNames(style.scrollDownBtn, {
                    [style.scrollDownBtnHidden]:
                        scrollY > HIDE_SCROLL_DOWN_BTN_Y_THRESHOLD,
                })}
            >
                Scroll Down <FaAngleDoubleDown />
            </button>
        </div>
    );
};

export default Home;
