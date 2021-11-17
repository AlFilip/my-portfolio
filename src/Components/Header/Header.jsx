import React, {useEffect, useState} from "react";
import s from './Header.module.scss'
import containerStyles from '../styles/container.module.scss'
import {Nav} from "./Nav/Nav";

export const Header = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    },[]);

    const headerClassName = `${s.header} ${offset > 860 && s.withBackground}`


    return (
        <div className={headerClassName}>
            <div className={containerStyles.container + ' ' + s.container}>
                <Nav/>
            </div>
        </div>
    )
}