import s from "./Link.module.scss";
import React from "react";
import {Link as ScrollLink} from "react-scroll";

export const Link = ({name, url, callback}) => {


    return (
        <div className={s.link}>
            <ScrollLink activeClass={s.active}
                        to={url}
                        spy={true}
                        smooth={true}
                // offset={-70}
                        duration={100}
            >
                <span className={s.linkMask} onClick={callback}>{name}</span>
                <span>{name}</span>
            </ScrollLink>
        </div>
    )
}