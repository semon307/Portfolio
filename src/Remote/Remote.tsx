import React from "react";
import s from './Remote.module.css';
import container from "./../Common/Styles/CommonStyles.module.css"
import {Title} from "../Common/Components/Title/Title";
import {Button} from "../Common/Components/Button/Button";
import buttonStyle from "./../Common/Components/Button/Button.module.css"

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${container.container} ${s.remoteContainer}`}>
                <div className={s.content}>
                    <Title title={"I am ready for remote work"}/>
                    <div><a className={buttonStyle.button} href={"https://github.com/semon307"} target={"_blank"}>Hire me</a></div>
                </div>
            </div>

        </div>
    )
}