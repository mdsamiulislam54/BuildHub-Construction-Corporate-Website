

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componats/Navbar/Navbar';

function App() {


  return (
   <>
      
   
          <Routes>
            <Route path="/" element={
              <Navbar/>

            } />
         </Routes>

 
   </>
  )
}

export default App
