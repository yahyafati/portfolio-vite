import SocialMediaIcons from './social-media-icons';

import style from './style.module.scss';
import { useIntl } from 'react-intl';
import ShallWe from './shall-we';

const Contact = () => {
    const intl = useIntl();
    const fullName =
        intl.formatMessage({ id: 'firstName' }) +
        ' ' +
        intl.formatMessage({ id: 'lastName' });
    return (
        <div id="contact" className={style.contactSection}>
            <ShallWe />
            <div className={style.content}>
                <h2 className={style.name}>{fullName}</h2>
                <SocialMediaIcons />
            </div>
        </div>
    );
};

export default Contact;
