import ContactForm from '@/component/contact/contact-form';
import ContactSVG from '@svg/Contact.svg?react';

import style from './style.module.scss';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const { formatMessage: intlFmt } = useIntl();

    const fullName =
        intlFmt({
            id: 'landing.home.firstName',
            defaultMessage: 'Yahya',
        }) +
        ' ' +
        intlFmt({
            id: 'landing.home.lastName',
            defaultMessage: 'Haji',
        });
    return (
        <div id="contact" className={style.contactSection}>
            <h2 className={style.title}>
                <Link to={'/'}>{fullName}</Link>
            </h2>
            <div className={style.content}>
                <ContactSVG className={style.contactImg} />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
