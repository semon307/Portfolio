import s from "./Projects.module.css"
import container from "./../Common/Styles/CommonStyles.module.css"
import {Project} from "./Project/Project";
import {Title} from "../Common/Components/Title/Title";
import todoImage from "./../Assets/Images/todo.png"
import cardsImage from "./../Assets/Images/cards.png"
import socialNetworkImage from "./../Assets/Images/socialNetwork.png"

export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const cards = {
        backgroundImage: `url(${cardsImage})`
    }
    return (
        <div id={"Projects"} className={s.projectsBlock}>
            <div className={`${container.container} ${s.projectsContainer}`}>
                <div className={s.content}>
                    <Title title={"My projects"}/>
                    <div className={s.projects}>
                        <Project title={"Social network"}
                                 style={socialNetwork}
                                 description={"Implementing React of 'yesterday': class components, redux-form and using old-fashioned methods of work with React-Redux flow."}
                        link={"https://semon307.github.io/Social_network"}/>
                        <Project style={todo} title={"Todo list"} description={"Implementing React of 'today and tomorrow': hooks, functional components only, modern flow and libraries "} link={"https://semon307.github.io/todolist"}/>
                        <Project style={cards} title={"Cards"} description={"Team work, open-sorce project. Implementing learning-cards project"} link={"https://AleksMaifet.github.io/Cards"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}