import React, {useRef, useEffect} from "react";
import ProjectItem from "./ProjectItem";
import helio from "../../../svg/HelioIMS.svg";
import hanan from "../../../svg/Hanan.svg";
import task from "../../../svg/Tasks.svg";
import game2048 from "../../../svg/Game2048.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

import * as style from "./style.module.scss"

const Projects = ({_ref}) => {
    return (
        <div ref={_ref} id="projectSection" className={style.projectSection}>
            <h2>
                So you wanna see my previous <strong>Projects</strong>
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
                    href={"https://github.com/yahyafati/SMS"}
                />
                {/* <ProjectItem icon={blog} title="LetMeTalk" /> */}
                {/* <ProjectItem icon={octopus} title="Octopus" /> */}
                <ProjectItem
                    icon={hanan}
                    title="Hanan SAT Helper"
                    href={"https://github.com/yahyafati/HananSATHelper"}
                />
                <ProjectItem
                    icon={task}
                    title="Task Tracker"
                    href={"https://github.com/yahyafati/task_tracker_react"}
                />
                <ProjectItem
                    icon={game2048}
                    title="2048"
                    href={"https://github.com/yahyafati/task_tracker_react"}
                    link={"https://game.yahyafati.com/"}
                />
            </Carousel>
            {/* </div> */}
        </div>
    );
};

export default Projects;
