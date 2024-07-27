import React from 'react';
import { SiAndroid, SiVisualstudiocode } from 'react-icons/si';
import { FaPaintBrush } from 'react-icons/fa';

import style from './style.module.scss';
import classNames from 'classnames';
import FlickeringBold from '../../flickering-bold';

const servicesMap = {
    // card-icon mobile
    mobile: <SiAndroid className={classNames(style.mobile, style.cardIcon)} />,
    web: (
        <SiVisualstudiocode className={classNames(style.web, style.cardIcon)} />
    ),
    design: (
        <FaPaintBrush className={classNames(style.design, style.cardIcon)} />
    ),
};

interface ServiceCardProps {
    type: 'mobile' | 'web' | 'design';
    title: string;
    body: string;
    detail: string;
    className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    type,
    title,
    body,
    detail,
    className,
}) => {
    return (
        <div className={style.card}>
            <div className={classNames(style.frontside, className)}>
                {servicesMap[type]}
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className={style.backside}>
                <FlickeringBold texts={[{ text: title }]} delay={100} />
                <p className={style.description}>{detail}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
