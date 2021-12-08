import React from "react";
import s from './Remote.module.css';
import container from "./../Common/Styles/CommonStyles.module.css"
import {Title} from "../Common/Components/Title/Title";
import {Button} from "../Common/Components/Button/Button";

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${container.container} ${s.remoteContainer}`}>
                <div className={s.content}>
                    {/*<h2 className={s.title}>Considering options for remote work</h2>*/}
                    <Title title={"I am ready for remote work"}/>
                    {/*<button className={s.button} onClick={() => alert("Hire Me!")}>*/}
                    {/*    <h2>Hire me!</h2>*/}
                    {/*</button>*/}
                    <Button title={"Hire me!"}/>
                </div>
            </div>

        </div>
    )
}