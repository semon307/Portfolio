import s from "./Skills.module.css"
import container from "./../Common/Styles/CommonStyles.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import react from "../Assets/Images/react2.png"
import typescript from "../Assets/Images/ts1.png"
import redux from "../Assets/Images/redux.png"


export const Skills = () => {
    const reactImage = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${react})`,
    }
    const tsImage = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${typescript})`,
    }
    const reduxImage = {
        // backgroundImage: 'url(' + "./../Assets/Images/socialNetwork.png" + ')'
        backgroundImage: `url(${redux})`,
    }
    return (
        <div className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={"React"} description={" Lorem ispum dolor sit amet, conscetur adispising eit, sed do eiusmad tempor incididunt ut labore et dolore\n" +
                    "                magna aliqua ut enim"}
                    style={reactImage}/>
                    <Skill title={"TypeScript"} description={" Lorem ispum dolor sit amet, conscetur adispising eit, sed do eiusmad tempor incididunt ut labore et dolore\n" +
                    "                magna aliqua ut enim"}
                           style={tsImage}
                           />
                    <Skill title={"Redux"} description={" Lorem ispum dolor sit amet, conscetur adispising eit, sed do eiusmad tempor incididunt ut labore et dolore\n" +
                    "                magna aliqua ut enim"}
                           style={reduxImage}
                           />

                </div>
            </div>
        </div>
    )
}