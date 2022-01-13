import './App.css';
import {Header} from "./Components/Header/Header";
import React from "react";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {AnimatedButton} from './common/Components/AnimatedButton/AnimatedButton';

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

