import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";



export function Main(){
 const [color, setColor] = useState("white")
 const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
 
  function getRandomNumber(item){
   const index = Math.floor(Math.random() * item.length)
   return item[index];
}
 
  function BTN(){
  const randomNumber = getRandomNumber(colors)
  
  document.body.style.backgroundColor = randomNumber
  
  setColor(randomNumber)
}

  return (
   <Fragment>
    <span>BackgroundColor:<p className="color"> {color}
    </p>
    </span>
      
    <button onClick={BTN}>Change Color</button>
   </Fragment>
    )
}


//############ HEX ##########//



export function Main_Hex(){
  const [hexValue, setHexValue] = useState("white")
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  
  function BTN_Hex(){
  let hexColor = "#"
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber(hex)]
  }
  
  document.body.style.backgroundColor = hexColor
  setHexValue(hexColor)
}
function getRandomNumber(item){
  return Math.floor(Math.random() * item.length)
}
  

  return (
   <Fragment>
    <span>BackgroundColor: <p className="color"> 
    {hexValue}</p>
    </span>
     
    <button onClick={BTN_Hex}>Change Color</button>
   </Fragment>
    )
}