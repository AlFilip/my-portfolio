import React from "react";
import s from './ProjectCard.module.scss'
import {circleAnimate} from '../../../utils/helpers';


export const ProjectCard = (props) => {
    const uniqueCircleClassName = props.title.split(' ').join('')
    const circleSelector = `.${uniqueCircleClassName}`

    const mouseOverHandle = event => {
        circleAnimate({
            event,
            circleSelector,
        })
    }

    const touchStartHandle = event => {
        circleAnimate({
            circleSelector,
            event,
            isTouchEvent: true,
        })
    }

    return (
        <div className={s.projectItemCard}>
            <div className={s.photo} style={props.style}
                 onMouseEnter={mouseOverHandle}
                 onMouseLeave={mouseOverHandle}
                 onTouchStart={touchStartHandle}
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