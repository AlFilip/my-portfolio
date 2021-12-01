import React, {useEffect, useState} from "react";
import s from './Header.module.scss'
import containerStyles from '../styles/container.module.scss'
import {Nav} from "./Nav/Nav";

export const Header = () => {

    const [screenHeight, setScreenHeight] = useState(0);
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
        setScreenHeight(window.innerHeight)

        window.onresize = () => {
            setScreenHeight(window.innerHeight)
            console.log(window.innerHeight)
        }
    }, []);

    const headerClassName = `${s.header} ${offset > screenHeight && s.withBackground}`


    return (
        <header className={headerClassName}>
            <div className={containerStyles.container + ' ' + s.container}>
                <Nav/>
            </div>
        </header>
    )
}