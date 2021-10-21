import React from "react";
import s from './Header.module.css'
import containerStyles from '../styles/container.module.css'
import {Nav} from "./Nav/Nav";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={containerStyles.container + ' ' + s.container}>
                <Nav/>
            </div>
        </div>
    )
}