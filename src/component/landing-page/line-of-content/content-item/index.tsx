import * as React from 'react';

import style from './style.module.scss';
import type { IconType } from 'react-icons';
import classNames from 'classnames';

interface ContentItemProps {
    Icon: IconType;
    title: string;
    showLabel?: boolean;
    href?: string;
}

const ContentItem: React.FC<ContentItemProps> = ({
    Icon,
    title,
    href,
    showLabel,
}) => {
    return (
        <a className={style.item} href={href}>
            <span
                className={classNames(style.title, {
                    [style.show]: showLabel,
                })}
            >
                {title}
            </span>
            <Icon className={style.icon} />
        </a>
    );
};

export default ContentItem;
