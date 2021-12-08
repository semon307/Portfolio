import s from "./Main.module.css"
import common from "../Common/Styles/CommonStyles.module.css"
import {Title} from "../Common/Components/Title/Title";
export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={common.container}>
            <div className={s.greetingText}>
                <span className={s.secondText}>Hi There</span>
                <h2 className={s.firstText}>I am Semen Kozhin</h2>

                <p className={s.secondText}>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    )
}