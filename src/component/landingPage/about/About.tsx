import HiFromDev from '@svg/About.svg?react';
import style from './style.module.scss';
import { useComponentInView } from '@/hooks';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import FlickeringBold from '@/component/flickering-bold/InternationalizedBold.tsx';

const About = () => {
    const { formatMessage: intlFmt } = useIntl();
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
                            text={intlFmt({
                                id: 'landing.about.title.base',
                                defaultMessage: '',
                            })}
                            formatter={{
                                love: {
                                    text: intlFmt({
                                        id: 'landing.about.title.love',
                                        defaultMessage: '',
                                    }),
                                    className: style.love,
                                },
                                code: {
                                    text: intlFmt({
                                        id: 'landing.about.title.code',
                                        defaultMessage: '',
                                    }),
                                    className: style.code,
                                },
                            }}
                            delay={50}
                        />
                    </h2>
                    <p className={style.about}>
                        <FormattedMessage
                            id="landing.about.body.base"
                            values={{
                                enthusiastic: (
                                    <FlickeringBold
                                        text={intlFmt({
                                            id: 'landing.about.body.enthusiastic',
                                            defaultMessage: '',
                                        })}
                                        className={style.passionate}
                                        delay={60}
                                    />
                                ),
                            }}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
