import hereAreServices from '@svg/Services.svg';

import ServiceCard from './ServiceCard';

import style from './style.module.scss';
import FlickeringBold from '../../flickering-bold/InternationalizedBold.tsx';
import { FormattedMessage, useIntl } from 'react-intl';

const Services = () => {
    const { formatMessage: intlFmt } = useIntl();
    return (
        <div id="servicesSection" className={style.servicesSection}>
            <h2>
                <FormattedMessage
                    id="landing.service.title.base"
                    values={{
                        services: (
                            <FlickeringBold
                                text="Services"
                                className={style.strong}
                                delay={100}
                            />
                        ),
                    }}
                />
            </h2>
            <div className={style.services}>
                <div className={style.cardContainer}>
                    <div className={style.col1Container}>
                        <ServiceCard
                            type="design"
                            body={intlFmt({
                                id: 'landing.service.services.design.body',
                            })}
                            title={intlFmt({
                                id: 'landing.service.services.design.title',
                            })}
                            detail={intlFmt({
                                id: 'landing.service.services.design.details',
                            })}
                            className={style.notBigScreen}
                        />
                        <ServiceCard
                            type="mobile"
                            body={intlFmt({
                                id: 'landing.service.services.mobile.body',
                            })}
                            title={intlFmt({
                                id: 'landing.service.services.mobile.title',
                            })}
                            detail={intlFmt({
                                id: 'landing.service.services.mobile.details',
                            })}
                        />
                        <ServiceCard
                            type="web"
                            body={intlFmt({
                                id: 'landing.service.services.web.body',
                            })}
                            title={intlFmt({
                                id: 'landing.service.services.web.title',
                            })}
                            detail={intlFmt({
                                id: 'landing.service.services.web.details',
                            })}
                        />
                    </div>
                    <ServiceCard
                        type="design"
                        body={intlFmt({
                            id: 'landing.service.services.design.body',
                        })}
                        title={intlFmt({
                            id: 'landing.service.services.design.title',
                        })}
                        detail={intlFmt({
                            id: 'landing.service.services.design.details',
                        })}
                        className={style.bigScreen}
                    />
                </div>

                <div className={style.imgContainer}>
                    <img
                        className={style.servicesImg}
                        src={hereAreServices}
                        alt="Illustration of women pointing at the services"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
