import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {PCR_Projeto_03_Header, PCR_Projeto_03_Main, } from './PCR-Projeto-03-Componentes.js'
import './style/PCR-Projeto-03-Style.css'

//########## PROJECT-03 BODY  ##########//
export const PCR_Projeto_03 = () => {
  return (
   <Fragment>
    <div className="container-fluid PCR-P03-BodyDiv">
     <header className="">
      <PCR_Projeto_03_Header />
      
     </header>
     
     <main className="PCR-P03-Main">
      <PCR_Projeto_03_Main />
      
     </main>
    </div>
   </Fragment>
    )
}