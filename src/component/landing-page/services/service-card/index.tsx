import React from 'react';
import { SiAndroid, SiVisualstudiocode } from 'react-icons/si';
import { FaPaintBrush } from 'react-icons/fa';

import style from './style.module.scss';
import classNames from 'classnames';

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
    screen?: 'big-only' | 'unless-big';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    type,
    title,
    body,
    detail,
    className,
    screen,
}) => {
    return (
        <div
            className={classNames(style.card, {
                [style.hideOnSmallScreen]: screen === 'big-only',
                [style.hideOnWideScreen]: screen === 'unless-big',
            })}
        >
            <div className={classNames(style.frontside, className)}>
                {servicesMap[type]}
                <h3 className={style.title}>{title}</h3>
                <p className={style.body}>{body}</p>
            </div>
            <div className={style.backside}>
                <h3 className={style.title}>{title}</h3>

                <p className={style.description}>{detail}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
