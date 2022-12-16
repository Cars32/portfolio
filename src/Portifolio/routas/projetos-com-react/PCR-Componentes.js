import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import './style/PCJS-Style.css'
import {Conteudo, } from './../../P-Functions.js'
//########## IMAGES ##########//
import ColorFlipper from './images/ColorFlipperImg.jpg'
import Contador from './images/ContadorImg.jpg'
import Carrosel from './images/CarrosselImg.jpg'
import Birthday from './images/BirthdayImg.png'



//########## MAIN COMPONENTS ##########//
export function PCR_MainComponent(){
  return (
    <Fragment>
     
     <Conteudo 
      id="ColorFlipperImg"
      detalhes="Projeto 01"
      infor="trocador de cor de fundo aleatório"
      backImg={ColorFlipper}
      link="/projetos-com-react/projeto-01" />
      
     <Conteudo
      id="ContadorImg" 
      detalhes="Projeto 02"
      infor="Contador"
      backImg={Contador}
      link="/projetos-com-react/projeto-02" />
      
      <Conteudo
      id="BirthdayImg" 
      detalhes="Projeto 03"
      infor="lembretes de aniversário"
      backImg={Birthday}
      link="/projetos-com-react/projeto-03" />
     
    </Fragment>
    )
}
