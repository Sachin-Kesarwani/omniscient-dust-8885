
import './App.css';
import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Products from './Pages/Products/Products';


function App() {

  return (
    <div className="App">
  
      <h1>hello lenskart</h1>
     <Products/>
 
    </div>
  );
}

export default App;
