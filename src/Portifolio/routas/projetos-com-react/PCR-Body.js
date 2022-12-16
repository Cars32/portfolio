import {BrowserRouter, Routes, Route, Router, Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {HeaderFunctions, } from './../../P-Functions.js'
import {PCR_MainComponent, } from './PCR-Componentes.js'



//########## PROJETOS COM JAVASCRIPT ROUTER ##########//
export const PCReactRouter = () => {
  return (
   <div className="container-fluid bodyDiv">
     <header className="" id="headerId">
      <HeaderFunctions return="###" />
      
     </header>
     
     <main className="container" id="mainId">
      <PCR_MainComponent />
      
     </main>
   </div>
    )
}