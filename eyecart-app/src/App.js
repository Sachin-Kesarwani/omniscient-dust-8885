import logo from './logo.svg';
import './App.css';
import Cart from './Cart_pages/Cart';

import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"

import Home from './Admin/Home';
import AllRoutes from './frontend/Pages/AllRoutes';
import { Navbar } from './frontend/Navbar/Navbar';




function App() {
function handleClick(){
  window.open("http://localhost:3000/admin","_blank","noreferrer")
}

//This for to remove navbar and footer
let url = document.URL;
let param = url.includes("admin");

  return (
    <div className="App">


   {!param&& <Navbar/>}
    
   <AllRoutes/>
     {!param&&<button onClick={handleClick}>Clickme</button>}
     


    </div>
  );
}

export default App;
