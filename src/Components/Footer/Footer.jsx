import React from 'react'
import s from './Footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.info}>
                <div className={s.email}><a href="mailto:t9371100211@gmail.com">t9371100211@gmail.com</a></div>
                <div className={s.phone}><a href="tel:+79600901100">+7 (960) 090 11 00</a></div>
            </div>
            <div className={s.links}>
                <a href="https://t.me/AlekseyNikolaevichF" target='_blank'>
                    <FontAwesomeIcon icon={faTelegram}/>
                </a>
                <a href="https://github.com/AlFilip" target='_blank'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/aleksey-filippov-465218226/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
            {/*<div className={s.copyRights}>@ 2021 All Rights Reserved</div>*/}
            {/*</div>*/}
        </footer>
    )
}