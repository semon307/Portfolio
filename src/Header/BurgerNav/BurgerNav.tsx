import s from "./BurgerNav.module.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const BurgerNav = () => {
    return (
        <div className={s.nav}>
            <span><Link activeClass={s.active} to={'Main'} spy={true} smooth={true} offset={-30} duration={500}>Main</Link></span>
            <span><Link activeClass={s.active} to={'Skills'} spy={true} smooth={true} offset={-30} duration={500}>Skills</Link></span>
            <span><Link activeClass={s.active} to={'Projects'} spy={true} smooth={true} offset={-30} duration={500}>Projects</Link></span>
            <span><Link activeClass={s.active} to={'Contacts'} spy={true} smooth={true} offset={-20} duration={500}>Contacts</Link></span>
        </div>
    )
}