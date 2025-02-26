import { Link } from 'react-router-dom';

import style from './style.module.scss';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useScrollY } from '@/hooks';

const Home = () => {
    const { formatMessage: intlFmt } = useIntl();
    const scrollY = useScrollY();
    const HIDE_SCROLL_DOWN_BTN_Y_THRESHOLD = 30;

    const fullName =
        intlFmt({
            id: 'landing.home.firstName',
            defaultMessage: 'Yahya',
        }) +
        ' ' +
        intlFmt({
            id: 'landing.home.lastName',
            defaultMessage: 'Haji',
        });
    return (
        <div id="home" className={style.homeSection}>
            <div className={style.mainContent}>
                <p className={style.hi}>
                    <FormattedMessage
                        id="landing.home.hi"
                        defaultMessage="Hi, I'm "
                    />
                </p>
                <h1 className={style.name}>{fullName}</h1>
                <h2 className={style.work}>
                    <FormattedMessage
                        id="landing.home.work"
                        defaultMessage="Consultant, Developer, and Designer"
                    />
                </h2>
                <div className={style.ctaContainer}>
                    <button className={classNames(style.cta, style.primary)}>
                        <Link to="/contact">
                            <FormattedMessage
                                id="landing.home.contactMe"
                                defaultMessage="Contact Me"
                            />
                        </Link>
                    </button>
                    <button className={style.cta}>
                        <Link to="/Resume.pdf" target="_blank">
                            <FormattedMessage
                                id="landing.home.getResume"
                                defaultMessage="Get Resume"
                            />
                        </Link>
                    </button>
                </div>
            </div>

            <button
                className={classNames(style.cta, style.scrollDownBtn, {
                    [style.scrollDownBtnHidden]:
                        scrollY > HIDE_SCROLL_DOWN_BTN_Y_THRESHOLD,
                })}
                onClick={() => {
                    document
                        .getElementById('about')
                        ?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <FormattedMessage
                    id="landing.home.scrollDown"
                    defaultMessage={'Scroll Down'}
                />
                <FaAngleDoubleDown />
            </button>
        </div>
    );
};

export default Home;
