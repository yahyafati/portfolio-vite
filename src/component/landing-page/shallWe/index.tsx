import { Link } from 'react-router-dom';

import style from './style.module.scss';
import { FormattedMessage } from 'react-intl';

const ShallWe = () => {
    return (
        <div id="shallWeSection" className={style.shallWeSection}>
            <div className={style.content}>
                <hr className={style.hLine} />
                <div className={style.textContainer}>
                    <h4 className={style.shallWe}>
                        <FormattedMessage id="landing.shallWe.title" />
                    </h4>
                    <Link to={'/contact'} className={style.letsGo}>
                        <FormattedMessage id="landing.shallWe.button" />
                    </Link>
                </div>
                <hr className={style.hLine} />
            </div>
        </div>
    );
};

export default ShallWe;
