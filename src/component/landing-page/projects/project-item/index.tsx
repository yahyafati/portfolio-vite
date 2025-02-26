import React from 'react';
import { AiFillChrome, AiFillGithub } from 'react-icons/ai';

import style from './style.module.scss';

interface ProjectItemProps {
    icon: string;
    title: string;
    href: string;
    link?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
    icon,
    title,
    href,
    link,
}) => {
    return (
        <div className={style.projectItemContainer}>
            <div className={style.projectItem}>
                <img
                    className={style.projectIcon}
                    src={icon}
                    alt="People browsing through articles over a giant screen"
                />
                <div className={style.titleContainer}>
                    <h5 className={style.title}>{title}</h5>
                    <a className={style.icon} href={href}>
                        <AiFillGithub />
                    </a>
                    {link && (
                        <a className={style.icon} href={link}>
                            <AiFillChrome />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
