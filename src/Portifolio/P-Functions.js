import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
//########## IMG IMPORTS ##########//
import Sapo from './images/SapoEnsaboado.jpg'
//########## BOOTSTRAP COMPONENTES ##########//
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';




//########## HEADER COMPONENTES ##########//
export function HeaderFunctions(props){
  let Return;
  if(props.return){
    Return = <Fragment><Link to="/"><button id="mainR">Voltar</button></Link></Fragment>
}
  return (
    <Fragment>
     {Return}
     <Link to="/">
     <div style={{ backgroundImage: `url(${Sapo})` }} id="sapoImg" />
     </Link>
    </Fragment>
    )
}

//########## MAIN COMPONENTES ##########//
export function Conteudo(props){
  let ProjetoNumber 
  if(props.p){
   ProjetoNumber = <p className="mainP">{props.p}</p>
  }
  
  let ConteudoInfor
  if(props.infor){
    ConteudoInfor = ['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip>
              <strong id="mainInfor">{props.infor}
              </strong>
            </Tooltip>
          }>
          <p className="mainP">{props.detalhes}</p>
        </OverlayTrigger>
      ))
  }

  return (
    <Fragment>
     <div className="mainDiv" id={props.id} 
     style={{ backgroundImage: `url(${props.backImg})` }}>
      
      {ConteudoInfor}
      
       {ProjetoNumber}
      
      <Link to={props.link}>
       <button className="mainButton">Abrir</button>
      </Link>
     </div>
    </Fragment>
    )
}

//######### ERRO 404 #########//
export function Error404Main_Functions(){
  const [time, setTime] = useState(3)
  const redirect = useNavigate()
  
  
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1)
    }, 1000);
    if(time == 0){redirect("/")}
  })
  
  
  
  return (
    <Fragment>
     <h1>CONTEÚDO NÃO ENCONTRADO</h1>
     <h2>RETORNANDO PARA PAGINA INICIAL EM</h2>
     <p>{time}</p>
    </Fragment>
    )
}