import React from "react";
import s from './Skills.module.scss'
import containerStyles from '../../assets/styles/container.module.scss'
import {SkillCard} from "./SkillCard/SkillCard";

import typescriptImg from '../../assets/images/TypeScript.svg'
import js from '../../assets/images/js-brands.svg'
import react from '../../assets/images/react-brands.svg'
import redux from '../../assets/images/redux.svg'
import materialUI from '../../assets/images/material-ui.svg'
import Masonry from 'react-masonry-css';
import {SubHeader} from '../../common/Components/SubHeader/SubHeader';


const skills = [
    {
        title: 'JS',
        description: 'JavaScript development',
        icon: js,
    },
    {
        title: 'Typescript',
        description: 'Loremghgyukgjhkjlkj',
        icon: typescriptImg,
    },
    {
        title: 'React',
        description: 'Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.',
        icon: react,
    },
    {
        title: 'Redux',
        description: 'Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.',
        icon: redux,
    },
    {
        title: 'Material UI',
        description: 'Modern and mobile-ready website that will help you reach all of your\n' +
            '                marketing.',
        icon: materialUI,
    },
]

export const Skills = () => {

    const breakpointColumnsObj = {
        default: 2,
        700: 1
    };

    return (
        <div className={s.sectionSkills} id='skills'>
            <div className={containerStyles.container + ' ' + s.container}>
                <SubHeader title={'Skills'}/>
                <Masonry className={s.skillsItems}
                         breakpointCols={breakpointColumnsObj}
                         columnClassName={s.columns}
                >
                    {
                        skills.map(skill => (
                            <SkillCard key={skill.title}
                                       title={skill.title}
                                       description={skill.description}
                                       icon={skill.icon}
                            />
                        ))
                    }
                </Masonry>
            </div>
        </div>
    )
}