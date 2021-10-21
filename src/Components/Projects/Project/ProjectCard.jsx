import React from "react";
import s from './ProjectCard.module.css'

export const ProjectCard = (props) => {
    return (
        <div className={s.projectItemCard}>
            <div className={s.photo}>
                <button>Click to watch</button>
            </div>
            <h2 className={s.name}>{props.title}</h2>
            <span className={s.text}>{props.description}</span>
        </div>
    )
}