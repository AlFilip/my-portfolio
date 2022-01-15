import React from 'react';

import s from './SubHeader.module.scss'


export const SubHeader = ({
                              title
                          }) => {

    return (
        <h2 className={s.title}>{title}</h2>
    )
}