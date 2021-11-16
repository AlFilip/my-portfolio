import s from "../../../Components/Header/Nav/Navi.module.scss";
import React from "react";

const Link = ({}) => {


    return (
        <a href="" className={s.link}>
            <span className={s.linkMask}>Main</span>
            <span className={s.linkMaskHovered}>Main</span>
        </a>
    )
}