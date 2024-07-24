import React from "react";
import {AiFillGithub, AiFillChrome} from "react-icons/ai";

import * as style from "./style.module.scss"

const ProjectItem = ({icon, title, href, link}) => {
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
                    <a className={style.gitIcon} href={href}>
                        <AiFillGithub/>
                    </a>
                    {link && (
                        <a className={style.gitIcon} href={link}>
                            <AiFillChrome/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
