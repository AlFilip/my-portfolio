import React, {useEffect} from "react";
import s from './PopUp.module.scss'

export const PopUp = ({
                          closePopUp,
                          message
                      }) => {


    useEffect(() => {
        let id
        if (message) {
            id = setTimeout(closePopUp, 4000)
        }
        return () => {
            if (id) {
                window.clearTimeout(id)
            }
        }
    }, [message, closePopUp])

    const popUpStyle = {
        bottom: message ? '' : -60
    }


    return (
        <div className={s.popUp} style={popUpStyle}>
            <span className={s.close} onClick={closePopUp}>&#10006;</span>
            <div className={s.message}>{message}</div>
        </div>
    )
}