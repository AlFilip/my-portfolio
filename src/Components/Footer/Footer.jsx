import React from 'react'
import s from './Footer.module.css'
import containerStyles from "../styles/container.module.css";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.name}>Aleksey Filippov</div>
                <div className={s.links}>
                    <a href="">link</a>
                    <a href="">link</a>
                    <a href="">link</a>
                    <a href="">link</a>
                </div>
                <div className={s.copyRights}>@ 2021 All Rights Reserved</div>
            </div>
        </div>
    )
}