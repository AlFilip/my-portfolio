import React, {useState} from "react";
import {Element} from 'react-scroll';

import s from './Contacts.module.scss'
import containerStyles from '../../assets/styles/container.module.scss'
import {AnimatedButton} from '../../common/Components/AnimatedButton/AnimatedButton';
import {SubHeader} from '../../common/Components/SubHeader/SubHeader';
import {postData} from '../../api/api';
import {setAppStatus, setPopUpMessage} from "../../reducers/reducer";


const processErrors = (values, setErrors) => {
    const errors = {}
    Object.keys(values).forEach((fieldName) => {
        if (!values[fieldName]) {
            errors[fieldName] = true
        }
    })
    setErrors(errors)
}

export const Contacts = ({
                             dispatch,
                             disabled
                         }) => {
    const [name, setName] = useState('')
    const [contacts, setContacts] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const nameChangeHandle = e => {
        setName(e.currentTarget.value)
        if (errors) setErrors({})
    }
    const contactsChangeHandle = e => {
        setContacts(e.currentTarget.value)
        if (errors) setErrors({})
    }
    const messageChangeHandle = e => {
        setMessage(e.currentTarget.value)
        if (errors) setErrors({})
    }

    const submitHandle = e => {
        e.preventDefault()
        if (!name || !contacts || !message) {
            processErrors({name, contacts, message}, setErrors)
            return
        }
        sendMessage()
    }

    const sendMessage = async () => {
        dispatch(setAppStatus('loading'))
        const {messageStatus} = await postData('http://localhost:3010/send', {name, contacts, message})
        if (messageStatus === 'OK') {
            dispatch(setPopUpMessage('Message has been sent'))
            setName('')
            setContacts('')
            setMessage('')
            return
        }
        dispatch(setPopUpMessage('Something goes wrong'))
    }

    return (
        <Element name='Contacts' className={s.contacts}>
            <div className={containerStyles.container + ' ' + s.container}>
                <SubHeader title={'Contacts'}/>
                <div className={s.formWrapper}>
                    <form className={s.messageForm} action="" onSubmit={submitHandle}>
                        <div className={s.field}>
                            <input type="text"
                                   placeholder='Your name'
                                   value={name}
                                   onChange={nameChangeHandle}
                                   className={errors.name ? s.error : ''}
                                   disabled={disabled}
                            />
                        </div>
                        <div className={s.field}>
                            <input type="text"
                                   placeholder='Your contacts'
                                   value={contacts}
                                   onChange={contactsChangeHandle}
                                   className={errors.contacts ? s.error : ''}
                                   disabled={disabled}
                            />
                        </div>
                        <div className={s.field}>
                            <textarea placeholder='Your message'
                                      value={message}
                                      onChange={messageChangeHandle}
                                      className={errors.message ? s.error : ''}
                                      disabled={disabled}
                            />
                        </div>
                        <div className={s.btn}>
                            <AnimatedButton text={'Send message'} disabled={disabled}/>
                        </div>
                    </form>
                </div>
            </div>
        </Element>
    )
}