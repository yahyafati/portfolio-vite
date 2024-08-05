import { Link } from 'react-router-dom';

import style from './style.module.scss';
import { FormattedMessage } from 'react-intl';

const ShallWe = () => {
    return (
        <div id="shallWeSection" className={style.shallWeSection}>
            <hr className={style.hLine} />
            <Link to={'/contact'} className={style.textContainer}>
                <h4 className={style.shallWe}>
                    <FormattedMessage id="landing.shallWe.title" />
                </h4>
                <p className={style.letsGo}>
                    <FormattedMessage id="landing.shallWe.button" />
                </p>
            </Link>
            <hr className={style.hLine} />
        </div>
    );
};

export default ShallWe;
