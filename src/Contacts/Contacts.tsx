import React, {FormEvent, useRef, useState} from "react";
import s from "./Contacts.module.css";
import common from "./../Common/Styles/CommonStyles.module.css"
import {Title} from "../Common/Components/Title/Title";
import {Button} from "../Common/Components/Button/Button";
import buttonStyle from "./../Common/Components/Button/Button.module.css"
import emailjs from 'emailjs-com';
type EmailStatusType = "none" | "succeded" | "failed"
const Fade = require('react-reveal/Fade')
export const Contacts = () => {
    const [emailStatus, setEmailStatus] = useState<EmailStatusType>("none")

    const form = useRef();

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('service_f40drjk', 'template_2u6n4qr', e.target, 'user_WVLxYyOZjV4oINEwJY090')
            .then((result) => {
                console.log(result.text);
                setEmailStatus("succeded")
            }, (error) => {
                console.log(error.text);
                setEmailStatus("failed")
            });
        e.currentTarget.reset();

    };

    return (
        <div id={"Contacts"} className={s.contactsBlock}>

            <div className={`${common.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                    <Fade right>
                        <Title title={"Contacts"}/>
                    </Fade>
                    <Fade left>
                        <div className={s.attention}>{emailStatus === "succeded" && "I appreciate your attention and I will contact You as soon as it is possible."}</div>
                        <div className={s.attentionError}>{emailStatus === "failed" && "There are some technical troubles with your request. Please, choose another way to contact me."}</div>

                        <form onSubmit={sendEmail} className={s.form}>
                            <input className={s.input} placeholder={"Your name"} name={"email"}/>
                            <input className={s.input} placeholder={"Your E-mail"} name={"name"}/>
                            <textarea className={s.textArea} placeholder={"Type text here"} name={"message"}/>
                            <input className={buttonStyle.button} type={"submit"} value={"Send"}/>
                        </form>
                    </Fade>
                </div>
            </div>

        </div>
    )
}