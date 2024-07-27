import SocialMediaIcons from './SocialMediaIcons';

import style from './style.module.scss';

const Contact = () => {
    return (
        <footer id="contactSection" className={style.contactSection}>
            <h2 className={style.name}>Yahya Fati Haji</h2>
            <SocialMediaIcons />
            <h6 className={style.credit}>Designed and Developed By Me</h6>
        </footer>
    );
};

export default Contact;
