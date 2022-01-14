import React from "react";
import s from './Contacts.module.scss'
import containerStyles from '../styles/container.module.scss'
import {AnimatedButton} from '../../common/Components/AnimatedButton/AnimatedButton';

export const Contacts = () => {
    return (
        <div className={s.contacts} id='contacts'>
            <div className={containerStyles.container + ' ' + s.container}>
                <h3 className={s.title}>Contacts</h3>
                <form className={s.messageForm} action="">
                    <input type="text" placeholder='Your name'/>
                    <input type="text" placeholder='Your contacts'/>
                    <textarea placeholder='Your message'/>
                    <div>
                        <AnimatedButton text={'Send message'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}