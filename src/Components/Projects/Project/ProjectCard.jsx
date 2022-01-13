import React from "react";
import s from './ProjectCard.module.scss'

export const ProjectCard = (props) => {
    const uniqueCircleClassName = props.title.split(' ').join('')

    const mouseOverHandle = (e) => {
        const circle = document.querySelector(`.${uniqueCircleClassName}`)
        const element = e.currentTarget
        circle.style.left = e.pageX - element.offsetLeft + 'px'
        circle.style.top = e.pageY - element.offsetTop + 'px'
    }
    const mouseLeaveHandle = (e) => {
        const circle = document.querySelector(`.${uniqueCircleClassName}`)
        const element = e.currentTarget
        circle.style.left = e.pageX - element.offsetLeft + 'px'
        circle.style.top = e.pageY - element.offsetTop + 'px'
    }


    return (
        <div className={s.projectItemCard}>
            <div className={s.photo} style={props.style}
                 onMouseEnter={mouseOverHandle}
                 onMouseLeave={mouseLeaveHandle}
            >
                <span className={s.circle + ' ' + uniqueCircleClassName}/>
                <div className={s.descWrapper}>
                    <div className={s.description}>
                        <span className={s.name}>{props.title}</span>
                        <span className={s.text}>{props.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}