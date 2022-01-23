import React, {useState} from "react";
import {Element} from 'react-scroll';

import s from './Contacts.module.scss'
import containerStyles from '../../assets/styles/container.module.scss'
import {AnimatedButton} from '../../common/Components/AnimatedButton/AnimatedButton';
import {SubHeader} from '../../common/Components/SubHeader/SubHeader';
import {postData} from '../../api/api';


const processErrors = (name, contacts, message, setErrors) => {
    let errors = {}
    if (!name) {
        errors = {...errors, name: 'Please, enter your name'}
    }
    if (!contacts) {
        errors = {...errors, contacts: 'Please, enter your contacts'}
    }
    if (!message) {
        errors = {...errors, message: 'Please, enter your message'}
    }
    setErrors(errors)
}


export const Contacts = () => {
    const [name, setName] = useState('')
    const [contacts, setContacts] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState(null)

    const nameChangeHandle = e => {
        setName(e.currentTarget.value)
        if (errors) setErrors(null)
    }
    const contactsChangeHandle = e => {
        setContacts(e.currentTarget.value)
        if (errors) setErrors(null)
    }
    const messageChangeHandle = e => {
        setMessage(e.currentTarget.value)
        if (errors) setErrors(null)
    }

    const submitHandle = e => {
        e.preventDefault()
        if (!name || !contacts || !message) {
            processErrors(name, contacts, message, setErrors)
            return
        }
        sendMessage()
    }

    const sendMessage = () => {
        const response = postData('http://localhost:3010/send', {name, contacts, message})
    }

    return (
        <Element name='Contacts' className={s.contacts}>
            <div className={containerStyles.container + ' ' + s.container}>
                <SubHeader title={'Contacts'}/>
                <div className={s.formWrapper}>
                    <form className={s.messageForm} action="" onSubmit={submitHandle}>
                        <div className={s.field}>
                            <input type="text" placeholder='Your name' value={name} onChange={nameChangeHandle}/>
                            <span className={s.errorSpan}>{errors && errors.name}</span>
                        </div>
                        <div className={s.field}>
                            <input type="text" placeholder='Your contacts' value={contacts}
                                   onChange={contactsChangeHandle}/>
                            <span className={s.errorSpan}>{errors && errors.contacts}</span>
                        </div>
                        <div className={s.field}>
                            <textarea placeholder='Your message' value={message} onChange={messageChangeHandle}/>
                            <span className={s.errorSpan}>{errors && errors.message}</span>
                        </div>
                        <div className={s.btn}>
                            <AnimatedButton text={'Send message'}/>
                        </div>
                    </form>
                </div>
            </div>
        </Element>
    )
}