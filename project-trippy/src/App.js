import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Description from './components/Pages/Description';
import ProductView from './components/Pages/ProductView';
import AddProducts from './components/Pages/AddProduct';
import UserView from './components/Pages/UserView.js';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/description' exact Component={Description}/>
            <Route path ='/product-view/:category' exact Component={ProductView}/>
            <Route path='/products' exact Component={AddProducts}/>
            <Route path='/user-view' exact Component={UserView}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
