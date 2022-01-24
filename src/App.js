import './App.css';
import {Header} from "./Components/Header/Header";
import React, {useCallback, useReducer} from "react";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {PopUp} from "./common/Components/PopUp/PopUp";
import {initState, reducer, setPopUpMessage} from "./reducers/reducer";

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const closePopUp = useCallback(() => {
        dispatch(setPopUpMessage(''))
    }, [])

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts dispatch={dispatch}  disabled={state.appStatus === 'loading'}/>
            <Footer/>
            <PopUp closePopUp={closePopUp} message={state.popUpMessage}/>
        </div>
    );
}

