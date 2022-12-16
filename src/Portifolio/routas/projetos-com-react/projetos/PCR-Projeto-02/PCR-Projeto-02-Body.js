import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {PCR_Projeto_02_Header, PCR_Projeto_02_Main, } from './PCR-Projeto-02-Componentes.js'
import './style/PCR-Projeto-02-Style.css'

//########## PROJECT-02 BODY  ##########//
export const PCR_Projeto_02 = () => {
  return (
   <Fragment>
    <div className="PCR-P02-BodyDiv container-fluid">
     <header className="PCR-P02-Header">
      <PCR_Projeto_02_Header />
      
     </header>
     
     <main className="PCR-P02-Main container">
      <PCR_Projeto_02_Main />
      
     </main>
    </div>
   </Fragment>
    )
}
