// eslint-disable-next-line no-unused-vars
import React from 'react';

import * as S from "./Style/global";

//Components
import Inicio from './Components/Inicio.jsx';


import Projetos from './Components/Projetos.jsx';
import Footer from './Components/Footer.jsx'
import Contato from './Components/Contato.jsx'

import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
    <S.GlobalStyle/>
    <BrowserRouter>
   
    <Footer/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
    
      <Route path="/projetos" element={<Projetos/>}/>
      <Route path="/Contato" element={<Contato/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App