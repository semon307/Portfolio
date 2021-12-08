import s from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={s.nav}>
            <span>Main</span>
            <span>Skills</span>
            <span>Projects</span>
            <span>Contacts</span>
            {/*<a href={""}>Skills</a>*/}
            {/*<a href={""}>Projects</a>*/}
            {/*<a href={""}>Contacts</a>*/}
        </div>
    )
}