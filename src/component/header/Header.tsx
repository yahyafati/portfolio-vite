import React, { useEffect, useState } from 'react';
import Hamburger from '../hamburger';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from './style.module.scss';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import { useScrollDirection, useScrollY } from '@/hooks';
import Logo from '@/component/header/logo';
import { FormattedMessage } from 'react-intl';

const DISABLE_TESTIMONIAL =
    import.meta.env.VITE_REACT_APP_DISABLE_TESTIMONIALS === 'true';

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (value: string) => void;
}

const STICKY_HEADER_THRESHOLD = 240;

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [expanded, setExpanded] = useState(false); // Is Menu Expanded?
    const [hidden, setHidden] = useState(true);
    const scrollY = useScrollY();
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        setExpanded(false);
    }, [scrollY]);

    useEffect(() => {
        if (expanded) setHidden(false);
    }, [expanded]);

    const toggleShow = () => {
        setExpanded((current) => !current);
    };

    const linkClicked = (
        _: React.MouseEvent<HTMLElement, MouseEvent>,
        value: string
    ) => {
        setExpanded(false);
        setCurrentPage(value);
    };

    const handleAnimationEnd: React.AnimationEventHandler = (e) => {
        if (
            e.animationName === 'collapse_animation' ||
            e.animationName === 'expand_animation'
        ) {
            setHidden(!expanded);
        }
    };

    const isSticky = scrollY > STICKY_HEADER_THRESHOLD;

    return (
        <header
            className={classNames(style.headerWrapper, {
                [style.stick]: isSticky,
            })}
        >
            <div
                className={classNames(style.headerInner, {
                    [style.stick]: isSticky,
                    [style.show]: scrollDirection === 'up' && isSticky,
                    [style.hide]: scrollDirection === 'down' && isSticky,
                })}
            >
                <Logo expanded={expanded} />

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
                        <div
                            className={style.menu}
                            onAnimationEnd={handleAnimationEnd}
                        >
                            <ul>
                                <li
                                    className={classNames({
                                        [style.active]: currentPage === 'home',
                                    })}
                                >
                                    <HashLink
                                        onClick={(e) => linkClicked(e, 'home')}
                                        to={'/#homeSection'}
                                    >
                                        <FormattedMessage
                                            id={'navigation.home'}
                                        />
                                    </HashLink>
                                </li>
                                <li
                                    className={classNames({
                                        [style.active]:
                                            currentPage === 'services',
                                    })}
                                >
                                    <HashLink
                                        onClick={(e) =>
                                            linkClicked(e, 'services')
                                        }
                                        to={'/#servicesSection'}
                                    >
                                        <FormattedMessage
                                            id={'navigation.services'}
                                        />
                                    </HashLink>
                                </li>
                                <li
                                    className={classNames({
                                        [style.active]:
                                            currentPage === 'projects',
                                    })}
                                >
                                    <HashLink
                                        onClick={(e) =>
                                            linkClicked(e, 'projects')
                                        }
                                        to="/#projectSection"
                                    >
                                        <FormattedMessage
                                            id={'navigation.projects'}
                                        />
                                    </HashLink>
                                </li>
                                {!DISABLE_TESTIMONIAL && (
                                    <li
                                        className={classNames({
                                            [style.active]:
                                                currentPage === 'testimonials',
                                        })}
                                    >
                                        <HashLink
                                            onClick={(e) =>
                                                linkClicked(e, 'projects')
                                            }
                                            to="/#testimonialSection"
                                        >
                                            <FormattedMessage
                                                id={'navigation.testimonials'}
                                            />
                                        </HashLink>
                                    </li>
                                )}

                                <li
                                    className={style.hireMe}
                                    onClick={(e) => linkClicked(e, 'contact')}
                                >
                                    <Link
                                        onClick={(e) =>
                                            linkClicked(e, 'contact')
                                        }
                                        to={'/contact'}
                                    >
                                        <FormattedMessage
                                            id={'contact.hireMe'}
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        </header>
    );
};

export default Header;
