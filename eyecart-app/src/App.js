import './App.css';
import AllRoutes from './frontend/Pages/AllRoutes';
import { Navbar } from './frontend/Navbar/Navbar';
import Footer from './frontend/Footer/Footer';







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
    
    {/* <div style={{padding:"120px"}}> */}

   <AllRoutes/>
   {!param &&<Footer/>}

    {/* </div> */}
   
    
     


    </div>
  );
}

export default App;
