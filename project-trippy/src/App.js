import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Description from './components/Pages/Description';
import AddProducts from './components/Pages/AddProduct';
import SignUp from './components/Pages/SignUp.js';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/description' exact Component={Description}/>
            {/* <Route path ='/product-category' exact Component={Category}/> */}
            <Route path='/products' exact Component={AddProducts}/>
            <Route path='/sign-up' exact Component={SignUp}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
