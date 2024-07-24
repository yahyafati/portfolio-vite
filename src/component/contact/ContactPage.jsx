import React from "react";
import ContactForm from "./ContactForm";
import ContactSVG from "@svg/Contact.svg";

import * as style from "./style.module.scss";


const ContactPage = () => {
    return (
        <div className={style.contactPage}>
            <img
                className={style.contactImg}
                src={ContactSVG}
                alt={"Contact Us Image"}
            />
            <ContactForm style={style}/>
        </div>
    );
};

export default ContactPage;
