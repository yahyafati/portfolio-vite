import React from "react";
// import "../../../style/contact/contact.scss";
import SocialMediaIcons from "./SocialMediaIcons";

import * as style from "./style.module.scss"

const Contact = ({_ref}) => {
    return (
        <footer ref={_ref} id="contactSection" className={style.contactSection}>
            <h2 className={style.name}>Yahya Fati Haji</h2>
            <SocialMediaIcons/>
            <h6 className={style.credit}>Designed and Developed By Me</h6>
        </footer>
    );
};

export default Contact;
