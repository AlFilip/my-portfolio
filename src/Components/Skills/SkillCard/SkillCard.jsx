import s from './SkillCard.module.scss';
import React from "react";

export const SkillCard = (props) => {
    return (
        <div className={s.skillsItemCard}>
            <div className={s.icon}>icon</div>
            <h3 className={s.name}>{props.title}</h3>
            <span className={s.text}>{props.description}</span>
        </div>
    )
}