import s from './SkillCard.module.scss';
import React, {useRef} from "react";
import {useOpacityAnimate} from '../../../utils/helpers';

export const SkillCard = ({title, description, icon}) => {
    const ref = useRef(null)

    const cardStyle = useOpacityAnimate(ref)

    return (
        <div ref={ref} className={s.skillsItemCard} style={cardStyle}>
            <div className={s.icon}>{icon ? <img src={icon} alt='icon'/> : 'icon'}</div>
            <h3 className={s.name}>{title}</h3>
            <span className={s.text}>{description}</span>
        </div>
    )
}
