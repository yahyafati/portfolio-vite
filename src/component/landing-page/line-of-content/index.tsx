import * as React from 'react';
import ContentItem from '@/component/landing-page/line-of-content/content-item';
import { FaHome, FaInfoCircle, FaProjectDiagram } from 'react-icons/fa';
import { MdEmail, MdMiscellaneousServices } from 'react-icons/md';
import { FaHandsClapping } from 'react-icons/fa6';

import styles from './style.module.scss';

interface LineOfContentProps {
    currentSection: string;
}

const items = [
    {
        Icon: FaHome,
        title: 'Home',
        id: 'home',
    },
    {
        Icon: FaInfoCircle,
        title: 'About',
        id: 'about',
    },
    {
        Icon: MdMiscellaneousServices,
        title: 'Services',
        id: 'services',
    },
    {
        Icon: FaProjectDiagram,
        title: 'Projects',
        id: 'projects',
    },
    {
        Icon: FaHandsClapping,
        title: 'Testimonials',
        id: 'testimonials',
    },
    {
        Icon: MdEmail,
        title: 'Contact',
        id: 'contact',
    },
];

const LineOfContent: React.FC<LineOfContentProps> = ({ currentSection }) => {
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
                <ContentItem
                    key={index}
                    {...item}
                    showLabel={hovered}
                    current={currentSection === item.title.toLowerCase()}
                />
            ))}
        </div>
    );
};

export default LineOfContent;
