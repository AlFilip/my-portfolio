import React from "react";
import s from './Main.module.scss'
import containerStyles from '../styles/container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.info}>
                    <div className={s.mainTitle}>
                        <h1>
                            Hello! I’m<br/> <span>Aleksey Filippov</span>,<br/> React Developer.
                        </h1>
                    </div>
                </div>
                <div className={s.photo}>
                    photo
                </div>
            </div>
        </div>
    )
}