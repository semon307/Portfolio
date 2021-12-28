import s from "./Projects.module.css"
import container from "./../Common/Styles/CommonStyles.module.css"
import {Project} from "./Project/Project";
import {Title} from "../Common/Components/Title/Title";
import todoImage from "./../Assets/Images/todo.png"
import socialNetworkImage from "./../Assets/Images/socialNetwork.png"

export const Projects = () => {
    const socialNetwork = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div id={"Projects"} className={s.projectsBlock}>
            <div className={`${container.container} ${s.projectsContainer}`}>
                <div className={s.content}>
                    <Title title={"My projects"}/>
                    <div className={s.projects}>
                        <Project title={"Social network"}
                                 style={socialNetwork}
                                 description={"some  fdfn js nj njsn fjdsn fjn ffffffffffff df d df d fdf df df df dfdf df  jnjfnsj njns jdsfs desctiption"}/>
                        <Project style={todo} title={"Todo list"} description={"some desctiption"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}