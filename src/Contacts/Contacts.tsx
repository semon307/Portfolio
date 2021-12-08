import React from "react";
import s from "./Contacts.module.css";
import common from "./../Common/Styles/CommonStyles.module.css"
import {Title} from "../Common/Components/Title/Title";
import {Button} from "../Common/Components/Button/Button";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${common.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                {/*<h2 className={s.title}>Contacts</h2>*/}
                    <Title title={"Contacts"}/>
                <form className={s.form}>
                    <input className={s.input}/>
                    <input className={s.input}/>

                    <textarea className={s.textArea}/>
                </form>
                {/*<button className={common.button} type={"submit"}>*/}
                {/*    <h2>Send</h2>*/}
                {/*</button>*/}
                    <Button title={"Send"}/>
                </div>
            </div>
        </div>
    )
}