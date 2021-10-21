import React from "react";
import s from './Skills.module.css'
import containerStyles from '../styles/container.module.css'
import {SkillCard} from "./SkillCard/SkillCard";


export const Skills = () => {
    return (
        <div className={s.sectionSkills}>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.title}>
                    Skills
                </div>
                <div className={s.skillsItems}>
                    <SkillCard title={'JS'}
                               description={'JavaScript development'}/>
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