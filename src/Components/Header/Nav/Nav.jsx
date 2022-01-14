import React from "react";
import s from './Navi.module.scss'
import {Link} from "../../../common/Components/Link/Link";

export const Nav = ({callback, isOpen}) => {


    const linksClassname = `${s.links} ${isOpen ? '' : s.hidden}`
    const iconsClassName = `${s.menuIcon} ${isOpen ? s.activeBtn : ''}`

    return (
        <div className={s.nav}>
            {/*<button className={s.openBtn} onClick={callback}>open</button>*/}
                <div className={iconsClassName} onClick={callback}>
                    <span/>
                </div>
            <div className={linksClassname} onClick={callback}>
                <Link name={'Main'} url={'#main'}/>
                <Link name={'Skills'} url={'#skills'}/>
                <Link name={'Projects'} url={'#projects'}/>
                <Link name={'Contacts'} url={'#contacts'}/>
            </div>
        </div>
    )
}