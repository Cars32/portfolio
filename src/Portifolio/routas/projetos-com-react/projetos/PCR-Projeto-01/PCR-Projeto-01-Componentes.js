import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {Main, Main_Hex} from './PCR-Projeto-01-Functions.js'

//########## HEADER COMPONENTS ##########//
export function PCR_Projeto_01_Header(){
  return (
    <Fragment>
     <p id="CF">Color Flipper</p>
     
     <div id="PCR-P01-HeaderDiv">
      <Link to="/projetos-com-react/projeto-01">
       <p id="Simple">Simple</p>
      </Link>
     
      <Link to="/projetos-com-react/projeto-01/hex">
       <p id="Hex">Hex</p>
      </Link>
     </div>
    </Fragment>
    )
}


//########## MAIN COMPONENTS ##########//
export function PCR_Projeto_01_Main(){
  return (
    <Fragment>
      <Main />
    </Fragment>
    )
}
export function PCR_Projeto_01_Main_Hex(){
  return (
    <Fragment>
      <Main_Hex />
    </Fragment>
    )
}