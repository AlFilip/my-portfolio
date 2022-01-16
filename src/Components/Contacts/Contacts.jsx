import React from "react";
import {Element} from 'react-scroll';

import s from './Contacts.module.scss'
import containerStyles from '../../assets/styles/container.module.scss'
import {AnimatedButton} from '../../common/Components/AnimatedButton/AnimatedButton';
import {SubHeader} from '../../common/Components/SubHeader/SubHeader';

export const Contacts = () => {
    return (
        <Element name='Contacts' className={s.contacts}>
            <div className={containerStyles.container + ' ' + s.container}>
                <SubHeader title={'Contacts'}/>
                <div className={s.formWrapper}>
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
        </Element>
    )
}