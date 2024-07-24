import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPhone,
} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai";

const SocialMediaIcons = () => {
    return (
        <div className="icons">
            <a href={"https://github.com/yahyafati"}>
                <FaGithub className="icon"/>
            </a>
            {/* <a href={"https://www.twitter.com"}>
                <FaTwitter className="icon" />
            </a> */}
            <a href={"https://www.linkedin.com/in/yahya-haji"}>
                <FaLinkedinIn className="icon"/>
            </a>
            <a href={"https://www.facebook.com/yfati87"}>
                <FaFacebookF className="icon"/>
            </a>
            <a href={"https://www.instagram.com/yahyafati8"}>
                <AiFillInstagram className="icon"/>
            </a>
            <a href={"mailto:yfati037@gmail.com"}>
                <MdEmail className="icon"/>
            </a>
            <a href={"tel:+905394909673"}>
                <FaPhone className="icon"/>
            </a>
        </div>
    );
};

export default SocialMediaIcons;
