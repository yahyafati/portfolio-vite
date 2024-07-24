import React, {useState, useEffect} from "react";
import standingManSVG from "../../../svg/Home.svg";
import {Link} from "react-router-dom";

import * as style from "./style.module.scss";
import classNames from "classnames";

const MY_TITLE = ["Full Stack Developer", "React Developer", "Java Developer", "Kotlin Developer"];
const Home = ({_ref}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animateTyping, setAnimateTyping] = useState(true);

    useEffect(() => {
        setAnimateTyping(true);
    }, [currentWordIndex]);

    const handleAnimationEnd = (e) => {
        if (e.animationName === "slide") {
            setAnimateTyping(false);
            setTimeout(() => {
                setCurrentWordIndex(
                    (current) => (current + 1) % MY_TITLE.length
                );
            }, 3000);
        }
    };

    return (
        <div ref={_ref} id="homeSection" className={style.homeSection}>
            <div className={style.introText}>
                <p className={style.hi}>Hi, I'm</p>
                <p className={style.name}>Yahya Fati</p>
                <p className={style.work} onAnimationEnd={handleAnimationEnd}>
                    <span
                        className={classNames(style.before, {
                            [style.animate]: animateTyping,
                        })}
                        style={{
                            animationTimingFunction: `steps(${MY_TITLE[currentWordIndex].length})`,
                        }}
                    >
                        <span
                            className={classNames(style.after, {
                                [style.animate]: animateTyping,
                            })}
                            style={{
                                animationTimingFunction: `steps(${MY_TITLE[currentWordIndex].length})`,
                            }}
                        ></span>
                    </span>

                    {MY_TITLE[currentWordIndex]}
                </p>
                <div className={style.buttons}>
                    <Link to={"/contact"} className={classNames(style.button, style.primary)}>
                        Contact Me
                    </Link>
                    <a
                        href={"/Resume.pdf"}
                        target={"_blank"}
                        className={classNames(style.button)}
                    >
                        Get Resume
                    </a>
                </div>
            </div>
            <img
                className={style.introImg}
                src={standingManSVG}
                alt="A Man Standing and Using a phone"
            />
        </div>
    );
};

export default Home;
