import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' Component={LoginPage}/>
      <Route exact path='/home' Component={HomePage}/>
    </Routes>
   </Router> 
  );
}

export default App;
