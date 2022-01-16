import React, {useEffect, useState} from "react";
import s from './Header.module.scss'
import containerStyles from '../../assets/styles/container.module.scss'
import {Nav} from "./Nav/Nav";


export const Header = () => {
    const [isOpaque, setOpaque] = useState(false)
    const [open, setOpen] = useState(false)
    const onOpenClickHandler = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const scrollListener = () => {
            if (!isOpaque && window.pageYOffset > window.innerHeight) {
                setOpaque(true)
            }
            if (isOpaque && window.pageYOffset < window.innerHeight) {
                setOpaque(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [isOpaque]);

    const headerClassName = `${s.header} ${isOpaque && s.withBackground} ${open ? s.open : ''}`

    return (
        <header className={headerClassName} onClick={onOpenClickHandler}>
            <div className={containerStyles.container + ' ' + s.container}>
                <Nav callback={onOpenClickHandler} isOpen={open}/>
            </div>
        </header>
    )
}