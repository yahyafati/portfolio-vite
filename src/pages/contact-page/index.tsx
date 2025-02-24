import ContactForm from '@/component/contact/contact-form';
import ContactSVG from '@svg/Contact.svg?react';

import style from './style.module.scss';

const ContactPage = () => {
    return (
        <div className={style.contactPage}>
            <ContactSVG className={style.contactImg} />
            <ContactForm />
        </div>
    );
};

export default ContactPage;
