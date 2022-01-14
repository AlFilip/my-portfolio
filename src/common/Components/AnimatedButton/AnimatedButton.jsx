import React from 'react';
import s from './AnimatedButton.module.scss'
import {circleAnimate} from '../../../utils/helpers';


export const AnimatedButton = ({
                                   text = 'hover me',
                                   callback,
                               }) => {

    const mouseEventsHandle = event => {
        circleAnimate({
            event,
            circleSelector: `.${s.circle}`,
        })
    }

    const touchEventsHandle = event => {
        circleAnimate({
            event,
            circleSelector: `.${s.circle}`,
            isTouchEvent: true
        })
    }

    return (
        <button className={s.btn}
                onMouseEnter={mouseEventsHandle}
                onMouseLeave={mouseEventsHandle}
                onTouchStart={touchEventsHandle}
                onClick={callback}
        >
            <span className={s.circle}/>
            <span className={s.text}>{text}</span>
        </button>
    )
}


