import {BrowserRouter, Routes, Route, Router, Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {HeaderFunctions, } from './../../P-Functions.js'
import {FEM_MainComponent, } from './FEM-Componentes.js'



//########## FRONT-END-MENTOR ROUTER ##########//
export const FrontEndMentorRouter = () => {
  return (
    <div className="container-fluid bodyDiv">
      <header className="" id="headerId">
       <HeaderFunctions return="###"/>
      
      </header>
     
      <main className="container" id="mainId">
       <FEM_MainComponent />
       
      </main>
    </div>
    )
}
