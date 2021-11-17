import React from "react";
import s from './Navi.module.scss'
import {Link} from "../../../common/Components/Link/Link";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link name={'Main'} url={''}/>
            <Link name={'Skills'} url={''}/>
            <Link name={'Projects'} url={''}/>
            <Link name={'Contacts'} url={''}/>
        </div>
    )
}