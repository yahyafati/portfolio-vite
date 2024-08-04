import { useEffect, useState } from 'react';
import StandingManSVG from '@svg/Home.svg?react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';

const MY_TITLES_LENGTH = 4;
const Home = () => {
    const { formatMessage: intlFmt } = useIntl();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(1);

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
            <div className={style.introText}>
                <div className={style.hiContainer}>
                    <FormattedMessage
                        id="landing.home.heroText"
                        values={{
                            name: (
                                <span className={style.name}>Yahya Fati</span>
                            ),
                        }}
                    />
                </div>
                <p className={style.work}>
                    {MY_TITLE[currentWordIndex].slice(0, currentLetterIndex)}
                </p>
                <div className={style.buttons}>
                    <Link
                        to={'/contact'}
                        className={classNames(style.button, style.primary)}
                    >
                        {intlFmt({ id: 'landing.home.contactMe' })}
                    </Link>
                    <a
                        href={'/Resume.pdf'}
                        target={'_blank'}
                        className={classNames(style.button)}
                    >
                        {intlFmt({ id: 'landing.home.getResume' })}
                    </a>
                </div>
            </div>
            <StandingManSVG className={style.introImg} />
        </div>
    );
};

export default Home;
