import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './style.module.scss';
import FlickeringBold from '@/component/flickering-bold';

interface LogoProps {
    expanded: boolean;
}

const Logo: React.FC<LogoProps> = ({ expanded }) => {
    return (
        <h1>
            <Link
                to={'/'}
                className={classNames(style.logoTitle, {
                    menuOpen: expanded,
                })}
            >
                <FlickeringBold
                    texts={[
                        {
                            text: 'Yahya Fati',
                        },
                    ]}
                    delay={100}
                    noUnderline
                />
            </Link>
        </h1>
    );
};

export default Logo;
