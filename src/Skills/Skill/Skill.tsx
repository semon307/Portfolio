import s from "./Skill.module.css"

type SkillPropsType = {
    title: string
    description: string
    style?: {backgroundImage: string}
}
export const Skill = ({title, description, style}: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={style}>
                {/*Нашел иконку только от реакта поэтому пришлось колхозить кастомные через картинки*/}
                {/*<FontAwesomeIcon className={s.fontAwesome} icon={faReact}/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.title}>
                    <h3 className={s.skillTitle}>{title}</h3>
                </div>
                <div className={s.description}>
                    <span>{description}</span>
                </div>

            </div>
        </div>
    )
}