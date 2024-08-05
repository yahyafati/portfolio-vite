import React from 'react';
import ShineComponent, {
    ShineComponentProps,
} from '@/component/shine-component';

import style from './style.module.scss';

interface ShinyPageProps extends ShineComponentProps {}

const ShinyPage: React.FC<ShinyPageProps> = (props) => {
    return (
        <div className={style.page}>
            <ShineComponent
                onAnimationEnd={props.onAnimationEnd}
                animationStyles={props.animationStyles}
            />
        </div>
    );
};

export default ShinyPage;
