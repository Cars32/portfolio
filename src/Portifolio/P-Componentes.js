//########## IMPORTS ##########//
import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
//########## IMG IMPORTS ##########//
import FrontEndMentor from './images/FrontEndMentor.png'
import JavaScript from './images/JavaScript.png'
import ReactImg from './images/React.png'
//########## COMPONENTES ##########//
import {HeaderFunctions, Conteudo} from './P-Functions.js'






//########## HEADER COMPONENTS ##########//
export function HeaderComponent(){

  return (
    <Fragment>
     <HeaderFunctions />
    </Fragment>
    )
}


//########## MAIN COMPONENTS ##########//
export function MainComponent(){
  return (
    <Fragment>
    
     <Conteudo 
      id="FrontEndMentorImg"
      detalhes="informações"
      infor="Desafios do FrontendMentor"
      backImg={FrontEndMentor}
      link="/frontendmentor" />
      
      
     <Conteudo 
      id="ReactImg"
      detalhes="informações"
      infor="Projetos com React"
      backImg={ReactImg}
      link="/projetos-com-react" />
      
     <Conteudo 
      id="JacaScriptImg"
      detalhes="informações"
      infor="Projetos com JavaScript"
      backImg={JavaScript}
      link="/projetos-com-javaScript" 
      disabled />
    </Fragment>
    )
}