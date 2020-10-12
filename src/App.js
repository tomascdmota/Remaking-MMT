import React from 'react';
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/HomePage/Home";
import Comecando from "./components/pages/Comecando/Comecando";
import Depoimentos from "./components/pages/Depoimentos/Depoimentos";
import Sac from "./components/pages/SAC/Sac";
import Servicos from "./components/pages/Servicos/Servicos";
import Operations from "./components/pages/Operations/Operations";
import './App.css';
import {BrowserRouter as Route, Router, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <Servicos/>
        <Comecando/>
        <Depoimentos/>
        <Operations/>
        <Sac/>
        </div>
  );
}

export default App;
