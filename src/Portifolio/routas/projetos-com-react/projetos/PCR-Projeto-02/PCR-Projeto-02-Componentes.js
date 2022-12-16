import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {Counter, } from './PCR-Projeto-02-Functions.js'



//########## HEADER COMPONENTS ##########//
export function PCR_Projeto_02_Header(){
  return (
    <Fragment>
     
     
    </Fragment>
    )
}


//########## MAIN COMPONENTS ##########//
export function PCR_Projeto_02_Main(){
  return (
    <Fragment>
     <h1>Counter</h1>
     
     <Counter />
     
    </Fragment>
    )
}