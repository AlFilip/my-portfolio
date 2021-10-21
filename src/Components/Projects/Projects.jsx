import s from '../Projects/Projects.module.css'
import containerStyles from "../styles/container.module.css";
import React from "react";
import {ProjectCard} from "./Project/ProjectCard";


export const Projects = () => {
    return (
        <div className={s.sectionProjects}>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.title}>
                    Projects
                </div>
                <div className={s.projectsItems}>
                    <ProjectCard title={'Social Network'}
                                 description={'JavaScript development'}/>
                    <ProjectCard title={'Todo list'}
                                 description={'Lorem'}/>
                </div>
            </div>
        </div>

    )
}