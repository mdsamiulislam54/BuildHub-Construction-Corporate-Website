

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componats/Navbar/Navbar';
import Banner from './Componats/Banner/Banner';
import About from './Componats/About/About';
import Aboutpage from './Componats/About/About_Page/Aboutpage';
import Ourclients from './Componats/Ourclients/Ourclients';


function App() {


  return (
   <>
      
   
          <Routes>
            <Route path="/" element={
             <>
               <Navbar/>
               <Banner/>
               <About/>
               <Ourclients/>
               
              
             </>
             

            } />
            <Route path="/about" element={<Aboutpage />} />
         </Routes>

 
   </>
  )
}

export default App
