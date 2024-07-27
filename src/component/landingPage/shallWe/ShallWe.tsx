import { Link } from 'react-router-dom';

import style from './style.module.scss';

const ShallWe = () => {
    return (
        <div id="shallWeSection" className={style.shallWeSection}>
            <hr className={style.hLine} />
            <Link to={'/contact'} className={style.textContainer}>
                <h4 className={style.shallWe}>Shall We Start?</h4>
                <p className={style.letsGo}>Let's Go</p>
            </Link>
            <hr className={style.hLine} />
        </div>
    );
};

export default ShallWe;
