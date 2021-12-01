import React from "react";
import s from './Skills.module.scss'
import containerStyles from '../styles/container.module.scss'
import {SkillCard} from "./SkillCard/SkillCard";


export const Skills = () => {
    return (
        <div className={s.sectionSkills}>
            <div className={containerStyles.container + ' ' + s.container}>
                <h2 className={s.title}>
                    Skills
                </h2>
                <div className={s.skillsItems}>
                    <SkillCard title={'JS'} description={'JavaScript development'}/>
                    <SkillCard title={'Typescript'}
                               description={'Lorem'}/>
                    <SkillCard title={'React'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'}/>
                    <SkillCard title={'Redux'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'}/>
                    <SkillCard title={'Material UI'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'}/>
                </div>
            </div>
        </div>
    )
}