import s from "./Main.module.css"
import common from "../Common/Styles/CommonStyles.module.css"
import Particles from "react-tsparticles"
import ReactTypingEffect from 'react-typing-effect';
import myPhoto from "./../Assets/Images/Semen.jpg"
import Tilt from 'react-parallax-tilt';
const Fade = require('react-reveal/Fade')

const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};
export const Main = () => {

    return (
        <div id={"Main"} className={s.mainBlock}  >
            <div className={s.particlesDiv} style={{ position: "relative" }}>
            <Particles
                id={"particles"}
                className={s.particles}
                params={particlesOptions}/>
            </div>
            <Fade top>
            <div className={common.container}>

                <div className={s.greetingText}>
                    <span className={s.secondText}>Hi There</span>
                    <h2 className={s.firstText}>I am Semen Kozhin</h2>

                    <p className={s.secondText}><ReactTypingEffect  text={"Frontend Developer"} speed={100}/></p>

                </div>
               <Tilt>
                <div className={s.photo}><img className={s.img} src={myPhoto}/></div>
               </Tilt>
            </div>
            </Fade>
        </div>
    )
}