import React, {useRef, useState} from "react";
import s from './ProjectCard.module.scss'
import {getCircleSpanStyle, useOpacityAnimate} from '../../../utils/helpers';


export const ProjectCard = (props) => {
    const [spanStyle, setSpanStyle] = useState({})

    const mouseOverHandle = event => {
        setSpanStyle(getCircleSpanStyle(event))
    }

    const touchStartHandle = event => {
        setSpanStyle(getCircleSpanStyle(event))
    }

    const ref = useRef(null)
    const cardStyle = useOpacityAnimate(ref)

    return (
        <div className={s.projectItemCard} ref={ref} style={cardStyle}>
            <div className={s.photo} style={props.style}
                 onMouseEnter={mouseOverHandle}
                 onMouseLeave={mouseOverHandle}
                 onTouchStart={touchStartHandle}
            >
                <span className={s.circle} style={spanStyle}/>
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