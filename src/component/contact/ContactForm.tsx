import React from 'react';
import style from './style.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const ContactForm = () => {
    const { formatMessage } = useIntl();
    const handleFormSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={style.contactFormContainer}>
            <h2 className={style.formWelcome}>
                <strong>
                    <FormattedMessage id={'contact.hi'} />
                </strong>
            </h2>
            <form
                className={style.contactForm}
                method={'post'}
                action={'#'}
                onSubmit={handleFormSubmit}
            >
                <input
                    type={'text'}
                    placeholder={formatMessage({ id: 'contact.form.fullName' })}
                    name={'fullName'}
                    required
                    autoCapitalize={'on'}
                    autoFocus={true}
                    autoCorrect={'on'}
                />
                <input
                    type={'email'}
                    placeholder={formatMessage({ id: 'contact.form.email' })}
                    name={'email'}
                    required
                />
                <input
                    type={'tel'}
                    placeholder={formatMessage({ id: 'contact.form.phone' })}
                    name={'phone'}
                />
                <textarea
                    placeholder={formatMessage({ id: 'contact.form.body' })}
                    name={'body'}
                />
                <button className={style.submitButton} type={'submit'}>
                    <FormattedMessage id={'contact.form.send'} />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
