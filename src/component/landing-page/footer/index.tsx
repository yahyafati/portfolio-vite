import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import style from './styles.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const intl = useIntl();
    return (
        <footer className={style.credit}>
            <FormattedMessage
                id="landing.footer.credit"
                values={{
                    designer: intl.formatMessage({ id: 'firstName' }),
                }}
            />
        </footer>
    );
};

export default Footer;
