import React from "react";
import profileSVG from "../../../svg/Profile.svg";

import * as style from "./style.module.scss"

const TestimonialItem = ({body, by, relation}) => {
    return (
        <div className={style.testimonialItem}>
            <img
                className={style.profileImg}
                src={profileSVG}
                alt="Profile Picture Illustration"
            />
            <p className={style.body}>{body}</p>
            <div className={style.credit}>
                <p className={style.by}>{by}</p>
                <p className={style.relation}>{relation}</p>
            </div>
        </div>
    );
};

export default TestimonialItem;
