import React from "react";
import s from './Navi.module.scss'
import {Link} from "../../../common/Components/Link/Link";


export const Nav = ({callback, isOpen}) => {


    const linksClassname = `${s.links} ${isOpen ? '' : s.hidden}`
    const iconsClassName = `${s.menuIcon} ${isOpen ? s.activeBtn : ''}`

    return (
        <div className={s.nav} onClick={callback}>
            {/*<button className={s.openBtn} onClick={callback}>open</button>*/}
            <div className={iconsClassName}>
                <span/>
            </div>
            <div className={linksClassname} onClick={callback}>
                {
                    ['Main', 'Skills', 'Projects', 'Contacts']
                        .map(element => (
                            <Link key={element}
                                  url={element}
                                  name={element}
                                  callback={callback}
                            />))
                }
            </div>
        </div>
    )
}