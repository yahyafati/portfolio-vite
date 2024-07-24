import React from "react";
import {SiAndroid, SiVisualstudiocode} from "react-icons/si";
import {FaPaintBrush} from "react-icons/fa";

import * as style from "./style.module.scss"
import classNames from "classnames";

const servicesMap = {
    // card-icon mobile
    mobile: <SiAndroid className={classNames(style.mobile, style.cardIcon)}/>,
    web: <SiVisualstudiocode className={classNames(style.web, style.cardIcon)}/>,
    design: <FaPaintBrush className={classNames(style.design, style.cardIcon)}/>
};

const ServiceCard = ({type, title, body, className}) => {
    return (
        <div className={classNames(style.card, className)}>
            {servicesMap[type]}
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default ServiceCard;
