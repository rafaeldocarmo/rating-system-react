import './App.css';
import Avaliacao from './first-card'
import Rating from './Rating'
import Thanks from './thanks'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {React, useState, createContext, useContext} from "react";
import { GradeContext } from './useContext';

function App() {
  const [nota, setNota] = useState("0");
  return(
    <GradeContext.Provider value={[nota, setNota]}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Avaliacao />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </GradeContext.Provider>
  )
}

export default App;

