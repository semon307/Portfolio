import s from "./Project.module.css"
import {Button} from "../../Common/Components/Button/Button";

type ProjectPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}
export const Project = ({title, description, style}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={style}>
                {/*<a className={s.button}>*/}
                {/*   <h3>View</h3>*/}
                {/*</a>*/}
                <Button title={"View"}/>
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