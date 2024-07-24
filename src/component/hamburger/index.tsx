import React from "react";

import style from "./style.module.scss"
import classNames from "classnames";

interface HamburgerProps {
    className?: string;
    onClick: () => void;
    menuVisible?: boolean;
    expanded?: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({className, onClick, menuVisible, expanded}) => {
    return (
        <div
            className={classNames(style.hamburger, className, {
                [style.close]: menuVisible,
            })}
            onClick={onClick}>
            <div
                className={classNames(style.hamContainer, {
                    [style.close]: expanded,
                    [style.open]: !expanded,
                })}
            >
                <div className={classNames(style.line, style.line1)}/>
                <div className={classNames(style.line, style.line2)}/>
                <div className={classNames(style.line, style.line3)}/>
            </div>
        </div>
    );
};

export default Hamburger;
