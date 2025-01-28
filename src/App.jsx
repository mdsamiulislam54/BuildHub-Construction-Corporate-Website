

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componats/Navbar/Navbar';
import Banner from './Banner/Banner';

function App() {


  return (
   <>
      
   
          <Routes>
            <Route path="/" element={
             <>
               <Navbar/>
               <Banner/>
             </>

            } />
         </Routes>

 
   </>
  )
}

export default App
