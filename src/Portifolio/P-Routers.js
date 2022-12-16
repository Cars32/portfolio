//########## IMPORTS ##########//
import {BrowserRouter, Routes, Route, Router, Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {React, Fragment, useState, useRef, useEffect} from 'react';
//########## CSS ##########//
import './style/P-Style.css';
//########## BODY ##########//
import {FrontEndMentorRouter, } from './routas/frontEndMentor-challenges/FEM-Body.js';
import {PCReactRouter, } from './routas/projetos-com-react/PCR-Body.js';
import {PCR_Projeto_01, PCR_Projeto_01_Hex} from './routas/projetos-com-react/projetos/PCR-Projeto-01/PCR-Projeto-01-Body';
import {PCR_Projeto_02, } from './routas/projetos-com-react/projetos/PCR-Projeto-02/PCR-Projeto-02-Body'
import {PCR_Projeto_03, } from './routas/projetos-com-react/projetos/PCR-Projeto-03/PCR-Projeto-03-Body'
//########## COMPONENTES ##########//
import {HeaderComponent, MainComponent} from './P-Componentes';
import {Error404Main_Functions} from './P-Functions';




//########## ROUTERS ##########//
export const Portifolio_Routers = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home />} />
      
      <Route path="/frontendmentor" 
       element={<FrontEndMentorRouter />} />
       
      <Route path="/projetos-com-react" 
       element={<PCReactRouter />} />
      <Route path="/projetos-com-react/projeto-01" element={<PCR_Projeto_01 />} />
      <Route path="/projetos-com-react/projeto-01/hex" element={<PCR_Projeto_01_Hex />} />
      <Route path="/projetos-com-react/projeto-02" element={<PCR_Projeto_02 />} />
      <Route path="/projetos-com-react/projeto-03" element={<PCR_Projeto_03 />} />
      
      <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>
    )
}
//############################//

//########## HOME ##########//
const Home = () => {
  return (
   <div className="container-fluid bodyDiv">
     <header className="" id="headerId">
      <HeaderComponent />
      
     </header>
   
     <main className="container" id="mainId">
      <MainComponent />
      
     </main>
    </div>
    )
}

//########## ERRO 404 ##########//
const NotFound = () => {
  return (
    <Fragment>
     <div className="container-fluid bodyDiv">
     <header className="" id="headerId">
      <HeaderComponent />
      
     </header>
   
     <main className="container" id="Erro404">
      <Error404Main_Functions />
      
     </main>
    </div>
    </Fragment>
    )
}