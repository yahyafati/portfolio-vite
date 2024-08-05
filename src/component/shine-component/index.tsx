import React, { AnimationEventHandler } from 'react';

import style from './style.module.scss';
import classNames from 'classnames';

type animationCSSProps =
    | 'animationDuration'
    | 'animationTimingFunction'
    | 'animationDelay'
    | 'animationIterationCount'
    | 'animationDirection'
    | 'animationFillMode'
    | 'animationPlayState';

export interface ShineComponentProps {
    onAnimationEnd?: AnimationEventHandler;

    animationStyles?: Pick<React.CSSProperties, animationCSSProps>;
}

const ShineComponent: React.FC<ShineComponentProps> = ({
    onAnimationEnd,
    animationStyles,
}) => {
    const [shiny, setShiny] = React.useState(true);
    const afterAnimate: AnimationEventHandler = (e) => {
        setShiny(false);

        onAnimationEnd?.(e);
    };
    return (
        <div
            style={{
                ...animationStyles,
            }}
            className={classNames({
                [style.shiny]: shiny,
            })}
            onAnimationEnd={afterAnimate}
        ></div>
    );
};

export default ShineComponent;
