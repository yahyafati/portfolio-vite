import * as React from 'react';
import ContentItem from '@/component/landing-page/line-of-content/content-item';
import { FaHome, FaInfoCircle, FaProjectDiagram } from 'react-icons/fa';
import { MdEmail, MdMiscellaneousServices } from 'react-icons/md';
import { FaHandsClapping } from 'react-icons/fa6';

import styles from './style.module.scss';

interface LineOfContentProps {}

const items = [
    {
        Icon: FaHome,
        title: 'Home',
        href: '#home',
    },
    {
        Icon: FaInfoCircle,
        title: 'About',
        href: '#about',
    },
    {
        Icon: MdMiscellaneousServices,
        title: 'Services',
        href: '#services',
    },
    {
        Icon: FaProjectDiagram,
        title: 'Projects',
        href: '#projects',
    },
    {
        Icon: FaHandsClapping,
        title: 'Testimonials',
        href: '#testimonials',
    },
    {
        Icon: MdEmail,
        title: 'Contact',
        href: '#contact',
    },
];

const LineOfContent: React.FC<LineOfContentProps> = () => {
    const [hovered, setHovered] = React.useState(false);

    function handleMouseEnter() {
        setHovered(true);
    }

    function handleMouseLeave() {
        setHovered(false);
    }

    return (
        <div
            className={styles.lineOfContent}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {items.map((item, index) => (
                <ContentItem key={index} {...item} showLabel={hovered} />
            ))}
        </div>
    );
};

export default LineOfContent;
