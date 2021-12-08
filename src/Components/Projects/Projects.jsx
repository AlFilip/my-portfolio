import s from './Projects.module.scss'
import containerStyles from "../styles/container.module.scss";
import React from "react";
import {ProjectCard} from "./Project/ProjectCard";
import photo1 from '../../assets/images/photo1.jfif'
import photo2 from '../../assets/images/photo2.jpeg'


export const Projects = () => {
    const socialStyle = {
        backgroundImage: `url(${photo1})`
    }
    const todoStyle = {
        backgroundImage: `url(${photo2})`
    }
    return (
        <div className={s.sectionProjects} id='projects'>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.title}>
                    Projects
                </div>
                <div className={s.projectsItems}>
                    <ProjectCard style={socialStyle} title={'Social Network'}
                                 description={'JavaScript development'}/>
                    <ProjectCard style={todoStyle} title={'Todo list'}
                                 description={'Lorem'}/>
                    <ProjectCard style={todoStyle} title={'Todo list'}
                                 description={'Lorem'}/>
                </div>
            </div>
        </div>

    )
}