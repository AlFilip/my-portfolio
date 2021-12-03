import React from "react";
import s from './Skills.module.scss'
import containerStyles from '../styles/container.module.scss'
import {SkillCard} from "./SkillCard/SkillCard";

import typescriptImg from '../../assets/images/TypeScript.svg'
import js from '../../assets/images/js-brands.svg'
import react from '../../assets/images/react-brands.svg'
import redux from '../../assets/images/redux.svg'
import materialUI from '../../assets/images/material-ui.svg'


export const Skills = () => {
    return (
        <div className={s.sectionSkills} id='skills'>
            <div className={containerStyles.container + ' ' + s.container}>
                <h2 className={s.title}>
                    Skills
                </h2>
                <div className={s.skillsItems}>
                    <SkillCard title={'JS'} description={'JavaScript development'} icon={js}/>
                    <SkillCard title={'Typescript'} description={'Lorem'} icon={typescriptImg}/>
                    <SkillCard title={'React'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'}
                    icon={react}/>
                    <SkillCard title={'Redux'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'} icon={redux}/>
                    <SkillCard title={'Redux'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'} icon={redux}/>
                    <SkillCard title={'Redux'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'} icon={redux}/>
                    <SkillCard title={'Material UI'}
                               description={'Modern and mobile-ready website that will help you reach all of your\n' +
                               '                marketing.'} icon={materialUI}/>
                </div>
            </div>
        </div>
    )
}