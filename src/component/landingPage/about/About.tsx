import React from "react";
import hiFromDev from "@svg/About.svg";
import * as style from "./style.module.scss"

const About = ({_ref}) => {
    return (
        <div ref={_ref} id="aboutSection" className={style.aboutSection}>
            <div className={style.imgContainer}>
                <img
                    className={style.aboutImg}
                    src={hiFromDev}
                    alt="A sitting developer waving hi."
                />
            </div>
            <div className={style.aboutText}>
                <h2>
                    What can I say! I just <span className={style.love}>love</span> to
                    <span className={style.code}> code</span>.
                </h2>
                <p className={style.about}>
                    Hi, I’m Yahya. I’m the{" "}
                    <strong>Passionate Programmer</strong>. I love builiding
                    stuff (Software stuff obviously). I’m a Fullstack Web
                    Developer and Android Developer with experience in various
                    technologies.
                </p>
            </div>
        </div>
    );
};

export default About;
