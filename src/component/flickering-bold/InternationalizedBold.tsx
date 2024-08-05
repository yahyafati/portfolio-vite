import React from 'react';
import OriginalFlickeringBold from './index';

interface FlickeringBoldProps {
    text: string;
    className?: string;
    formatter?: {
        [key: string]: {
            text: string;
            className?: string;
        };
    };
    delay: number;
    disabled?: boolean;
    noUnderline?: boolean;
}

const FlickeringBold: React.FC<FlickeringBoldProps> = ({
    text,
    formatter = {},
    delay,
    disabled,
    noUnderline,
    className,
}) => {
    if (!text) return null;
    const texts = text.split(/({.*?})/g).map((part) => {
        const key = part.replace(/[{}]/g, '');
        const replace = formatter[key];
        if (replace) {
            return {
                text: replace.text,
                className: replace.className,
            };
        }
        return { text: part, className: className };
    });
    return (
        <OriginalFlickeringBold
            texts={texts}
            delay={delay}
            noUnderline={noUnderline}
            disabled={disabled}
        />
    );
};

export default FlickeringBold;
