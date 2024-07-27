import React from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

interface TextProps {
    text: string;
    className?: string;
}

interface FlickeringBoldProps {
    texts: TextProps[];
    delay: number;
    disabled?: boolean;
}

const FlickeringBold: React.FC<FlickeringBoldProps> = ({
    texts,
    delay,
    disabled,
}) => {
    let count = 0;
    const totalDelay = texts.reduce((acc, { text }) => {
        return acc + text.length;
    }, 0);

    if (disabled) {
        return (
            <>
                {texts.map(({ text, className: textClassName }, index) => {
                    return (
                        <span
                            key={`text-${index}`}
                            className={classNames(textClassName)}
                        >
                            {text}
                        </span>
                    );
                })}
            </>
        );
    }

    return (
        <>
            {texts.map(({ text, className: textClassName }, index) => {
                return (
                    <span
                        key={`text-${index}`}
                        className={classNames(
                            textClassName,
                            styles.flickeringBold
                        )}
                    >
                        {text.split(' ').map((word, index) => {
                            return (
                                <span
                                    key={`${index}-${word}`}
                                    className={styles.word}
                                >
                                    {word.split('').map((char, charIndex) => {
                                        count++;
                                        return (
                                            <span
                                                key={`${charIndex}-${char}`}
                                                className={classNames(
                                                    styles.flickeringChar
                                                )}
                                                style={{
                                                    animationDelay: `${count * delay}ms`,
                                                    animationDuration: `${totalDelay * delay}ms`,
                                                }}
                                            >
                                                {char}
                                            </span>
                                        );
                                    })}
                                </span>
                            );
                        })}
                    </span>
                );
            })}
        </>
    );
};

export default FlickeringBold;
