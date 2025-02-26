import React, { useEffect, useRef, useState } from 'react';

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

export function useScrollEffect(
    callback: (scrollY: number) => void,
    deps: React.DependencyList
) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            callback(scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

type ScrollDirection = 'up' | 'down';

export function useScrollDirection(): ScrollDirection {
    const [goingUp, setGoingUP] = useState(false);
    const scrollY = useScrollY();
    const lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > lastScroll.current) {
                setGoingUP(false);
            } else {
                setGoingUP(true);
            }
            lastScroll.current = scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return goingUp ? 'up' : 'down';
}

export function useComponentInView(id: string): boolean {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(id);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [id]);

    return inView;
}
