import React, {useState} from 'react';
import s from './AnimatedButton.module.scss'
import {getCircleSpanStyle} from '../../../utils/helpers';


export const AnimatedButton = ({
                                   text = 'hover me',
                                   callback,
                               }) => {

    const [spanStyle, setSpanStyle] = useState({})

    const mouseEventsHandle = event => {
        const style = getCircleSpanStyle(event)
        setSpanStyle(style)
    }

    const touchEventsHandle = event => {
        const style = getCircleSpanStyle(event)
        setSpanStyle(style)
    }

    return (
        <button className={s.btn}
                onMouseEnter={mouseEventsHandle}
                onMouseLeave={mouseEventsHandle}
                onTouchStart={touchEventsHandle}
                onClick={callback}
        >
            <span className={s.circle} style={spanStyle}/>
            <span className={s.text}>{text}</span>
        </button>
    )
}


