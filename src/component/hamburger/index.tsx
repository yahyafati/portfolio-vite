import React from "react";

import * as style from "./style.module.scss"
import classNames from "classnames";

const Hamburger = ({className, onClick, menuVisible, expanded}) => {
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
