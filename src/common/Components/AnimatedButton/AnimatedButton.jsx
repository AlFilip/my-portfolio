import React from 'react';
import s from './AnimatedButton.module.scss'


export const AnimatedButton = ({
                                   text='hover me',
                                   callback,
                               }) => {


    const mouseOverHandle = (e) => {
        const circle = document.querySelector(`.${s.circle}`)
        const element = e.currentTarget
        circle.style.left = e.pageX - element.offsetLeft + 'px'
        circle.style.top = e.pageY - element.offsetTop + 'px'
    }
    return (
        <button className={s.btn}
                onMouseOver={mouseOverHandle}
                onClick={callback}
        >
            <span className={s.circle}/>
            <span className={s.text}>{text}</span>
        </button>
    )
}