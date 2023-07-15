import React, {useState} from "react";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";

export const LoginPage = () => {
    const [currentState, setCurrentState] = useState('login');
    const toggleForm = (formName) => {
        setCurrentState(formName);
    }
    return(
        <div className="App">
            {
                currentState === 'login' ? <Login onFormSwitch= {toggleForm}/>: <Register onFormSwitch= {toggleForm}/>
            }
        </div>
    )
}