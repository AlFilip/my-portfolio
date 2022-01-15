import s from './Projects.module.scss'
import containerStyles from "../../assets/styles/container.module.scss";
import React from "react";
import photo1 from '../../assets/images/photo1.jfif'
import photo2 from '../../assets/images/photo2.jpeg'
import Masonry from 'react-masonry-css';
import {ProjectCard} from './Project/ProjectCard';
import {SubHeader} from '../../common/Components/SubHeader/SubHeader';

const projects = [
    {
        style: {backgroundImage: `url(${photo1})`},
        title: 'TodoList',
        description: 'бла бла про TodoList'
    },
    {
        style: {
            backgroundImage: `url(${photo2})`,
            minHeight: 600,
        },
        title: 'Social Network',
        description: 'бла бла про Social Network'
    },
    {
        style: {
            backgroundImage: `url(${photo2})`,
            minHeight: 500,
        },
        title: 'Social Network2',
        description: 'бла бла про Social Network'
    },
    {
        style: {backgroundImage: `url(${photo2})`},
        title: 'Social Network3',
        description: 'бла бла про Social Network'
    },
]


export const Projects = () => {
    const breakpointColumnsObj = {
        default: 2,
        700: 1
    };

    return (
        <div className={s.sectionProjects} id='projects'>
            <div className={containerStyles.container + ' ' + s.container}>
                {/*<div className={s.title}>*/}
                {/*    Projects*/}
                {/*</div>*/}
                <SubHeader title={'Projects'}/>
                <Masonry className={s.projectsItems}
                         breakpointCols={breakpointColumnsObj}
                         columnClassName={s.columns}
                >
                    {
                        projects.map(project => (
                            <ProjectCard key={project.title}
                                         style={project.style}
                                         title={project.title}
                                         description={project.description}
                            />
                        ))
                    }
                </Masonry>
            </div>
        </div>

    )
}