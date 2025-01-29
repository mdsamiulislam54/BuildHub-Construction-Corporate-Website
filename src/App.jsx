

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componats/Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './Componats/About/About';

function App() {


  return (
   <>
      
   
          <Routes>
            <Route path="/" element={
             <>
               <Navbar/>
               <Banner/>
               <About/>
              
             </>

            } />
         </Routes>

 
   </>
  )
}

export default App
