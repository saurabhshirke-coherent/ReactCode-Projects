import React, {useState} from 'react';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentState, setCurrentState]= useState('login');
  const toggleForm = (formName) => {
    setCurrentState(formName);
  }
  return (
    <div className="App">
      {
        currentState === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch = {toggleForm}/>
      }
    </div>
  );
}

export default App;
