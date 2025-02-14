import React from 'react';
import style from './style.module.scss';
import ReCAPTCHA from "react-google-recaptcha"
import { FormattedMessage, useIntl } from 'react-intl';

const SITE_KEY = import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
    const captchaRef = React.useRef<ReCAPTCHA>(null);
    const { formatMessage } = useIntl();

     const handleFormSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();
        const apiGateway = import.meta.env.VITE_REACT_APP_API_GATEWAY_ENDPOINT;
        const token = captchaRef.current?.getValue();
        if (!token) {
            alert('Please complete the captcha');
            return;
        }
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch(`${apiGateway}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, }),
        });

        if (response.ok) {
            alert("Thank you for your message. I'll get back to you soon.");
            form.reset();
        } else {
            alert('Failed to send message');
        }
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
                <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
                <button className={style.submitButton} type={'submit'}>
                    <FormattedMessage id={'contact.form.send'} />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
