import React from 'react';
import * as style from "./style.module.scss";

const ContactForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className={style.contactFormContainer}>
            <h2 className={style.formWelcome}><strong>Hi</strong>, there</h2>
            <form className={style.contactForm} method={"post"} action={"#"} onSubmit={handleFormSubmit}>
                <input
                    type={"text"}
                    placeholder={"Full Name"}
                    name={"fullName"}
                    required
                    autoCapitalize={"on"}
                    autoFocus={true}
                    autoCorrect={"on"}
                />
                <input
                    type={"email"}
                    placeholder={"Email"}
                    name={"email"}
                    required
                />
                <input
                    type={"tel"}
                    placeholder={"Phone Number (Optional)"}
                    name={"phone"}
                />
                <textarea
                    placeholder={"How can I be of service?"}
                    name={"body"}
                />
                <button className={style.submitButton} type={"submit"}>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
