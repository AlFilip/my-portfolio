import s from "./Link.module.scss";
import React from "react";

export const Link = ({name, url}) => {


    return (
        <div className={s.link}>
            <a href={url}>
                <span className={s.linkMask}>{name}</span>
                <span>{name}</span>
            </a>
        </div>
    )
}