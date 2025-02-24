import SocialMediaIcons from './social-media-icons';

import style from './style.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const Contact = () => {
    const intl = useIntl();
    const fullName =
        intl.formatMessage({ id: 'firstName' }) +
        ' ' +
        intl.formatMessage({ id: 'lastName' });
    return (
        <footer id="contactSection" className={style.contactSection}>
            <h2 className={style.name}>{fullName}</h2>
            <SocialMediaIcons />
            <h6 className={style.credit}>
                <FormattedMessage
                    id="landing.footer.credit"
                    values={{
                        designer: intl.formatMessage({ id: 'firstName' }),
                    }}
                />
            </h6>
        </footer>
    );
};

export default Contact;
