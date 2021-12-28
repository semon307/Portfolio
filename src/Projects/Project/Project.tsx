import s from "./Project.module.css"
import {Button} from "../../Common/Components/Button/Button";
import buttonStyle from "./../../Common/Components/Button/Button.module.css"

type ProjectPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
    link?: string
}
export const Project = ({title, description, style, link}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={style}>
                <div><a href={link} className={buttonStyle.button} target={"_blank"}>View!</a></div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.title}>
                    <h3 className={s.projectTitle} >{title}</h3>
                </div>
                <div className={s.description}>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}