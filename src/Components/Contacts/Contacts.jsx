import React from "react";
import s from './Contacts.module.css'
import containerStyles from '../styles/container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={containerStyles.container + ' ' + s.container}>
                <h3 className={s.title}>Contacts</h3>
                <form className={s.messageForm} action="">
                    <input type="text" placeholder='Your name'/>
                    <input type="text" placeholder='Your contacts'/>
                    <textArea placeholder='Your message'/>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}