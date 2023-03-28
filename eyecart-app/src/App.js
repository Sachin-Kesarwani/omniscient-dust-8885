import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Home from './Admin/Home';

function App() {

  return (
    <div className="App">
  
      <h1>hello lenskart</h1>
      <Home/>
    </div>
  );
}

export default App;
