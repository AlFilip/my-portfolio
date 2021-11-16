import React from "react";
import s from './ProjectCard.module.scss'

export const ProjectCard = (props) => {
    return (
        <div className={s.projectItemCard}>
            <div className={s.photo} style={props.style}>
                <button>Click to watch</button>
            </div>
            <h2 className={s.name}>{props.title}</h2>
            <span className={s.text}>{props.description}</span>
        </div>
    )
}