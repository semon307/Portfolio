import React from "react";
import s from "./Footer.module.css";
import container from "./../Common/Styles/CommonStyles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

import {Title} from "../Common/Components/Title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${container.container} ${s.footerContainer}`}>
                <div className={s.content}>
                    {/*<h3 className={s.title}>Semen Kozhin</h3>*/}
                    {/*<Title title={"Semen Kozhin"}/>*/}
                    <div className={s.title}>Semen Kozhin</div>
                    <div className={s.iconBlock}>
                        <div className={s.icon}><a href={"https://github.com/semon307"} target={"_blank"}><FontAwesomeIcon className={s.fontAwesome} icon={faGithub}/></a></div>
                        <div className={s.icon}><a href={"https://www.linkedin.com/in/semen-kozhin-4a1a22127/"} target={"_blank"}><FontAwesomeIcon className={s.fontAwesome} icon={faLinkedin}/></a></div>
                        <div className={s.icon}><a href={"https://t.me/apostol3007"} target={"_blank"}><FontAwesomeIcon className={s.fontAwesome} icon={faTelegram}/></a></div>
                        <div className={s.icon}><a href={"https://www.facebook.com/semonkozhin/"} target={"_blank"}><FontAwesomeIcon className={s.fontAwesome} icon={faFacebook}/></a></div>
                    </div>
                    {/*<h3 className={s.title}>© 2021 All rights reserved</h3>*/}
                    {/*<Title title={"© 2021 All rights reserved"} className={s.title}/>*/}
                    <div className={s.title}>© 2021 All rights reserved</div>
                </div>
            </div>

        </div>
    )
}