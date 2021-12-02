import s from './SkillCard.module.scss';
import React from "react";

export const SkillCard = ({title, description, icon}) => {
    debugger
    return (
        <div className={s.skillsItemCard}>
            <div className={s.icon}>{icon ? <img src={icon} alt='icon'/> : 'icon'}</div>
            <h3 className={s.name}>{title}</h3>
            <span className={s.text}>{description}</span>
        </div>
    )
}