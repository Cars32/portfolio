//########## IMPORTS ##########//
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Router, Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import './style/FEM-Style.css'
//########## IMAGES ##########//
import Perfume from './images/Perfume-desafio-01.png'
import QRCode from './images/QR-Code-desafio-02.png'
import NFT from './images/NFT-desafio-03.png'




//########## HEADER COMPONENTES ##########//
export function FEM_HeaderComponent(){
  return (
    <Fragment>
     
     
    </Fragment>
   )
}


//########## MAIN COMPONENTES ##########//
export function FEM_MainComponent(){
  return (
    <Fragment>
       <div className="mainDiv" id="PerfumeImg"
        style={{ backgroundImage: `url(${Perfume})` }}
       >
        <p className="mainP">
        Desafio 01</p>
        
        <a href="https://www.frontendmentor.io/solutions/display-flex-t4ec1mollZ">
         <button className="mainButton">Abrir</button>
        </a>
       </div>
       
       <div className="mainDiv" id="QRCodeImg" 
        style={{ backgroundImage: `url(${QRCode})` }}
       >
         <p className="mainP">
         Desafio 02</p>
         
         <a href="https://www.frontendmentor.io/solutions/pagina-mais-ou-menos-responsiva-usando-display-flex-kkkk-fFQDR5bUSH">
          <button className="mainButton">Abrir</button>
         </a>
       </div>
       
       <div className="mainDiv" id="NFTImg" 
        style={{ backgroundImage: `url(${NFT})` }}>
         <p className="mainP">
         Desafio 03</p>
         
         <a href="https://www.frontendmentor.io/solutions/bl-D9YE6Q1ObP">
          <button className="mainButton">Abrir</button>
         </a>
       </div>
    </Fragment>
   )
}

