import hereAreServices from '@svg/Services.svg';

import ServiceCard from './ServiceCard';

import style from './style.module.scss';
import FlickeringBold from '../../flickering-bold';

const Services = () => {
    return (
        <div id="servicesSection">
            <div className={style.servicesSection}>
                <h2>
                    Here are the{' '}
                    <FlickeringBold
                        texts={[{ text: 'Services', className: style.strong }]}
                        delay={100}
                    />{' '}
                    that I offer
                </h2>
                <div className={style.services}>
                    <div className={style.cardContainer}>
                        <div className={style.col1Container}>
                            <ServiceCard
                                type="design"
                                body="Design sweet UI with amazing detail to user
                            experience"
                                title="Design"
                                detail={
                                    "I'm a UI/UX designer with a passion for creating beautiful and intuitive designs." +
                                    'I have experience in designing websites, mobile apps, and other digital products.' +
                                    'I can help you create a design that will make your product stand out and attract users.'
                                }
                                className={style.notBigScreen}
                            />
                            <ServiceCard
                                type="mobile"
                                body="Build highly interactive and intuitive mobile
                                apps"
                                title="Mobile Development"
                                detail={
                                    "I'm a mobile app developer with experience in building apps for both iOS and Android." +
                                    'I can help you create an app that will engage users and provide value to your business.'
                                }
                            />
                            <ServiceCard
                                type="web"
                                body="Develop Solid, Reliable, Secure and Scalable
                                Websites from scratch"
                                title="Web Development"
                                detail={
                                    "I'm a web developer with experience in building websites for a variety of clients." +
                                    'I can help you create a website that will attract users and help you achieve your business goals.'
                                }
                            />
                        </div>
                        <ServiceCard
                            type="design"
                            body="Design sweet UI with amazing detail to user
                            experience"
                            title="Design"
                            className={style.bigScreen}
                            detail={
                                "I'm a UI/UX designer with a passion for creating beautiful and intuitive designs." +
                                'I have experience in designing websites, mobile apps, and other digital products.' +
                                'I can help you create a design that will make your product stand out and attract users.'
                            }
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
        </div>
    );
};

export default Services;
