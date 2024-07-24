import {useEffect, useRef, useState} from "react";

export function useScrollY() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
}

type ScrollDirection = "up" | "down";

export function useScrollDirection(): ScrollDirection {
    const [goingUp, setGoingUP] = useState(false);
    const scrollY = useScrollY();
    const lastScroll = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > lastScroll.current) {
                setGoingUP(false);
            } else {
                setGoingUP(true);
            }
            lastScroll.current = scrollY
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return goingUp ? "up" : "down";
}