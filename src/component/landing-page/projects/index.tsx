import ProjectItem from './project-item';
import helio from '@svg/HelioIMS.svg';
import hanan from '@svg/Hanan.svg';
import task from '@svg/Tasks.svg';
import game2048 from '@svg/Game2048.svg';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import style from './style.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const Projects = () => {
    const intl = useIntl();
    return (
        <div id="projects" className={style.projectsContainer}>
            <div className={style.projectSection}>
                <h2 className={style.title}>
                    <FormattedMessage
                        id="landing.projects.title.base"
                        values={{
                            projects: (
                                <strong className={style.strong}>
                                    {intl.formatMessage({
                                        id: 'landing.projects.title.projects',
                                    })}
                                </strong>
                            ),
                        }}
                    />
                </h2>
                {/* <div className="projectList"> */}
                <Carousel
                    className={style.projectList}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    showThumbs={false}
                    emulateTouch={true}
                >
                    <ProjectItem
                        icon={helio}
                        title="Helio IMS"
                        href={'https://github.com/yahyafati/SMS'}
                    />
                    {/* <ProjectItem icon={blog} title="LetMeTalk" /> */}
                    {/* <ProjectItem icon={octopus} title="Octopus" /> */}
                    <ProjectItem
                        icon={hanan}
                        title="Hanan SAT Helper"
                        href={'https://github.com/yahyafati/HananSATHelper'}
                    />
                    <ProjectItem
                        icon={task}
                        title="Task Tracker"
                        href={'https://github.com/yahyafati/task_tracker_react'}
                    />
                    <ProjectItem
                        icon={game2048}
                        title="2048"
                        href={'https://github.com/yahyafati/task_tracker_react'}
                        link={'https://game.yahyafati.com/'}
                    />
                </Carousel>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Projects;
