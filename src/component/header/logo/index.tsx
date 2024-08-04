import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './style.module.scss';
import FlickeringBold from '@/component/flickering-bold';
import { useIntl } from 'react-intl';

interface LogoProps {
    expanded: boolean;
}

const Logo: React.FC<LogoProps> = ({ expanded }) => {
    const { formatMessage } = useIntl();
    const firstName = formatMessage({ id: 'firstName' });
    const lastName = formatMessage({ id: 'lastName' });

    const fullName = `${firstName} ${lastName}`;
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
                            text: fullName,
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
