import {useState, useEffect} from "react";
import Hamburger from "../hamburger";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import * as style from "./style.module.scss";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";

const DISABLE_TESTIMONIAL = import.meta.env.VITE_REACT_APP_DISABLE_TESTIMONIALS === "true";
const Header = ({
                    currentPage,
                    setCurrentPage,
                    goingUp,
                    setGoingUP,
                    scrollY,
                    sticky = false,
                }) => {
    const [expanded, setExpanded] = useState(false); // Is Menu Expanded?
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setExpanded(false);
    }, [scrollY]);

    useEffect(() => {
        if (expanded) setHidden(false);
    }, [expanded]);

    // console.log("Sticky: ", sticky);
    const toggleShow = () => {
        setExpanded((current) => !current);
    };

    const linkClicked = (e, value) => {
        // e.preventDefault();
        setExpanded(false);
        setGoingUP(false);
        setCurrentPage(value);
    };

    const handleAnimationEnd = (e) => {
        if (
            e.animationName === "collapse_animation" || e.animationName === "expand_animation"
        ) {
            setHidden(!expanded);
        }
    };

    const getClassName = () => {
        const minScroll = 120;
        if (!sticky) {
            // return scrollY > 0 ? " no-display " : " ";
            // return scrollY > minScroll ? "no-display" : "no-display hide";
            return "";
        }
        if (scrollY <= minScroll) {
            return style.stick;
        }
        let result = style.stick;
        if (goingUp && scrollY > minScroll) {
            // if (scrollY > minScroll) {
            result += ` ${style.show} `;
            // } else {
            // result += " hide ";
            // }
        } else {
            result += ` ${style.hide} `;
        }
        // result +=
        //     goingUp && scrollY > 0
        //         ? // scrollY > originalRef.current.getBoundingClientRect().height
        //           " show "
        //         : " hide ";
        return result;
    };

    return (
        <header className={getClassName()}>

            <h1>
                <Link to={"/"} className={classNames(style.logoTitle, {
                    menuOpen: expanded,
                })}>
                    Yahya Fati
                </Link>
            </h1>

            <OutsideClickHandler onOutsideClick={() => setExpanded(false)}>
                <Hamburger
                    className={style.optionButton}
                    onClick={toggleShow}
                    menuVisible={!hidden}
                    expanded={expanded}
                />
                <div
                    className={classNames(style.navbarLinkContainer, {
                        [style.expanded]: expanded,
                        [style.collapsed]: !expanded,
                        [style.hidden]: hidden,
                    })}
                >
                    <div className={style.menu} onAnimationEnd={handleAnimationEnd}>
                        <ul>
                            <li
                                className={classNames({
                                    [style.active]: currentPage === "home",
                                })}
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "home")}
                                    to={"/#homeSection"}
                                >
                                    Home
                                </HashLink>
                            </li>
                            <li
                                className={classNames({
                                    [style.active]: currentPage === "services",
                                })}
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "services")}
                                    to={"/#servicesSection"}
                                >
                                    Services
                                </HashLink>
                            </li>
                            <li
                                className={classNames({
                                    [style.active]: currentPage === "projects",
                                })}
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "projects")}
                                    to="/#projectSection"
                                >
                                    Works
                                </HashLink>
                            </li>
                            {!DISABLE_TESTIMONIAL && <li
                                className={classNames({
                                    [style.active]: currentPage === "testimonials",
                                })}
                            >
                                <HashLink
                                    onClick={(e) => linkClicked(e, "projects")}
                                    to="/#testimonialSection"
                                >
                                    Testimonials
                                </HashLink>
                            </li>}

                            <li className={style.hireMe} onClick={() => linkClicked(null, "contact")}>
                                <Link
                                    onClick={(e) => linkClicked(e, "contact")}
                                    to={"/contact"}
                                >
                                    Hire Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </OutsideClickHandler>
        </header>
    );
};

export default Header;
