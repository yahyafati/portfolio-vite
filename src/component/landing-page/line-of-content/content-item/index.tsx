import * as React from 'react';

import style from './style.module.scss';
import type { IconType } from 'react-icons';
import classNames from 'classnames';

interface ContentItemProps {
    Icon: IconType;
    title: string;
    current?: boolean;
    showLabel?: boolean;
    id?: string;
}

const ContentItem: React.FC<ContentItemProps> = ({
    Icon,
    title,
    id,
    showLabel,
    current,
}) => {
    return (
        <a
            className={classNames(style.item, {
                [style.active]: current,
            })}
            href={`#${id}`}
        >
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
