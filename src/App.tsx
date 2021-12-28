import React from 'react';
import './App.module.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Remote} from "./Remote/Remote";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import s from "./App.module.css"

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills />
            <Projects/>
            <Remote />
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
