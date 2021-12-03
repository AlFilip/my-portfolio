import React from "react";
import s from './Main.module.scss'
import containerStyles from '../styles/container.module.scss'
import background from '../../assets/images/mainBackground.jpg'

export const Main = () => {
    const mainStyles = {
        backgroundImage: `url(${background})`
    }
    return (
        <div className={s.main} style={mainStyles} id='main'>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.info}>
                    <div className={s.mainTitle}>
                        <h1>
                            Hello! I’m<br/> <span>Aleksey Filippov</span>,<br/> React Developer.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}