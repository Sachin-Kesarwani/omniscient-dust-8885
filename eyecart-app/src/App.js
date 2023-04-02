import './App.css';
import AllRoutes from './frontend/Pages/AllRoutes';
import { Navbar } from './frontend/Navbar/Navbar';
import NewProduct from './frontend/Pages/Products_Component/NewProduct/ProductList';
import SingleProduct from './frontend/Pages/Products_Component/NewProduct/SingleProduct';






function App() {
function handleClick(){
  window.open("http://localhost:3000/admin","_blank","noreferrer")
}

//This for to remove navbar and footer
let url = document.URL;
let param = url.includes("admin");

  return (
    <div className="App">


   {!param && <Navbar/>}
    
   <AllRoutes/>
   
     {!param&&<button onClick={handleClick}>Clickme</button>}
     


    </div>
  );
}

export default App;
