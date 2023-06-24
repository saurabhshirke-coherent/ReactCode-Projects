import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp.js';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/services' exact Component={Services}/>
            <Route path='/products' exact Component={Products}/>
            <Route path='/sign-up' exact Component={SignUp}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
