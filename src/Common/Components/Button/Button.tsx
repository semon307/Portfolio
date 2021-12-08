import React from "react";
// import s from "../../../Projects/Project/Project.module.css";
import s from "./Button.module.css"
type ButtonPropsType = {
    title: string
    ref?: string
}
export const Button = ({title, ref}: ButtonPropsType) => {
    return (
        <div  className={s.button}>
            <a href={ref}>
                <h3>{title}</h3>
            </a>
        </div>
    )
}