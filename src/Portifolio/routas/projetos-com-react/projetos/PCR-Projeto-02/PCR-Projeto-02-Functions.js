import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";





export const Counter = () => {
  const [count, setCount] = useState(0);
  var styler = "";
  
  
  function Decrease(){
    setCount((prevCount) => prevCount - 1);
  }
    if(count < 0) styler = "red";
    
  function Reset(){
    setCount(0);
  }
  if(count === 0) styler = "black";
  
  function Increase(){
    setCount((prevCount) => prevCount + 1);
  }
  if(count > 0) styler = "green";
  
  
  
  return (
    <Fragment>
     <span style={{color: styler}}>{count}</span>
     
    <div id="BTNDiv">
     <button className="btnP2 btn" onClick={Decrease}>
     Decrease</button> 
     <button className="btnP2 btn" onClick={Reset}>
     Reset</button> 
     <button className="btnP2 btn" onClick={Increase}>
     Increase</button>
     </div>
    </Fragment>
    )
}