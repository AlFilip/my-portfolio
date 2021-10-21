import s from './SkillCard.module.css';
import React from "react";

export const SkillCard = (props) => {
    return (
        <div className={s.skillsItemCard}>
            <div className={s.icon}>icon</div>
            <h2 className={s.name}>{props.title}</h2>
            <span className={s.text}>{props.description}</span>
        </div>
    )
}