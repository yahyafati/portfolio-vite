import HiFromDev from '@svg/About.svg?react';
import style from './style.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const About = () => {
    const { formatMessage: intlFmt } = useIntl();

    return (
        <div id="aboutSection" className={style.aboutSectionWrapper}>
            <div className={style.aboutSection}>
                <div className={style.imgContainer}>
                    <HiFromDev className={style.aboutImg} />
                </div>
                <div className={style.aboutText}>
                    <h2>
                        <FormattedMessage
                            id="landing.about.title.base"
                            defaultMessage=""
                            values={{
                                love: (
                                    <span className={style.love}>
                                        {intlFmt({
                                            id: 'landing.about.title.love',
                                            defaultMessage: '',
                                        })}
                                    </span>
                                ),
                                code: (
                                    <span className={style.code}>
                                        {intlFmt({
                                            id: 'landing.about.title.code',
                                            defaultMessage: '',
                                        })}
                                    </span>
                                ),
                            }}
                        />
                    </h2>
                    <p className={style.about}>
                        <FormattedMessage
                            id="landing.about.body.base"
                            values={{
                                enthusiastic: (
                                    <span className={style.passionate}>
                                        {intlFmt({
                                            id: 'landing.about.body.enthusiastic',
                                            defaultMessage: '',
                                        })}
                                    </span>
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
