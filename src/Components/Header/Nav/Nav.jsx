import React from "react";
import s from './Navi.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" className={s.link}>
                <span className={s.linkMask}>Main</span>
                <span className={s.linkMaskHovered}>Main</span>
            </a>
            <a href="" className={s.link}>
                <span className={s.linkMask}>Skills</span>
                <span className={s.linkMaskHovered}>Skills</span>
            </a>
            <a href="" className={s.link}>
                <span className={s.linkMask}>Projects</span>
                <span className={s.linkMaskHovered}>Projects</span>
            </a>
            <a href="" className={s.link}>
                <span className={s.linkMask}>Contacts</span>
                <span className={s.linkMaskHovered}>Contacts</span>
            </a>
        </div>
    )
}