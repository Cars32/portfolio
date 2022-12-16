import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {PCR_Projeto_01_Header, PCR_Projeto_01_Main, PCR_Projeto_01_Main_Hex} from './PCR-Projeto-01-Componentes.js'
import './style/PCR-Projeto-01-Style.css'

//########## PROJECT-01 BODY  ##########//
export const PCR_Projeto_01 = () => {
  return (
   <Fragment>
    <div className="container-fluid">
     <header className="PCR-P01-Header">
      <PCR_Projeto_01_Header />
      
     </header>
     
     <main className="PCR-P01-Main container">
      <PCR_Projeto_01_Main />
      
     </main>
    </div>
   </Fragment>
    )
}

//########## PROJECT-01 HEX BODY  ##########//
export const PCR_Projeto_01_Hex = () => {
  return (
    <Fragment>
    <div  className="container-fluid">
     <header className="PCR-P01-Header">
      <PCR_Projeto_01_Header />
     </header>
     <main className="PCR-P01-Main container">
      <PCR_Projeto_01_Main_Hex />
      
     </main>
    </div>
    </Fragment>
    )
}