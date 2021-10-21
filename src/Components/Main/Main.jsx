import React from "react";
import s from './Main.module.css'
import containerStyles from '../styles/container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.info}>
                    <h1 className="h-title">
                        Hello, I’m <strong>Aleksey Filippov</strong>, React Developer
                    </h1>
                    <div className="h-subtitle typing-subtitle">
                        <p>I code cool <strong>websites</strong></p>
                        {/*<p>I develop <strong>mobile apps</strong></p>*/}
                        {/*<p>I love <strong>wordpress</strong></p>*/}
                    </div>
                </div>
                <div className={s.photo}>
                    photo
                </div>
            </div>
        </div>
    )
}