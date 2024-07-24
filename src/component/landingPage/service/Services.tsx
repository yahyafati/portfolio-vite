import React from "react";
import hereAreServices from "@svg/Services.svg";

import ServiceCard from "./ServiceCard";

import * as style from "./style.module.scss"

const Services = ({_ref}) => {
    return (
        <div ref={_ref} id="servicesSection" className={style.servicesSection}>
            <h2>
                Here are the <strong>Services</strong> that I offer
            </h2>
            <div className={style.services}>
                <div className={style.cardContainer}>
                    <div className={style.col1Container}>
                        <ServiceCard
                            type="design"
                            body="Design sweet UI with amazing detail to user
                            experience"
                            title="Design"
                            className={style.notBigScreen}
                        />
                        <ServiceCard
                            type="mobile"
                            body="Build highly interactive and intuitive mobile
                                apps"
                            title="Mobile Development"
                        />
                        <ServiceCard
                            type="web"
                            body="Develop Solid, Reliable, Secure and Scalable
                                Websites from scratch"
                            title="Web Development"
                        />
                    </div>
                    <ServiceCard
                        type="design"
                        body="Design sweet UI with amazing detail to user
                            experience"
                        title="Design"
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
