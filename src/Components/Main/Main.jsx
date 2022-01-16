import React from "react";
import {Element} from 'react-scroll'

import s from './Main.module.scss'
import containerStyles from '../../assets/styles/container.module.scss'
import background from '../../assets/images/mainBackground.jpg'

export const Main = () => {
    const mainStyles = {
        backgroundImage: `url(${background})`
    }
    return (
        <Element name='Main' className={s.main} style={mainStyles}>
            <div className={containerStyles.container + ' ' + s.container}>
                <div className={s.info}>
                    <div className={s.mainTitle}>
                        <h1>
                            Hello! I’m<br/> <span>Aleksey Filippov</span>,<br/> Frontend Developer.
                        </h1>
                    </div>
                </div>
            </div>
        </Element>
    )
}