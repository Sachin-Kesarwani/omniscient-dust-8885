import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Home from './Admin/Home';
import { AllRoutes } from './Pages/AllRoutes';

function App() {

  return (
    <div className="App">
  
      <h1>hello lenskart</h1>
      <AllRoutes/>
      <Home/>
    </div>
  );
}

export default App;
