import {React, Fragment, useState, useRef, useEffect} from 'react';
import {Link, useParams, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import data from './data'



//########## MAIN FUNCTIONS ##########//
export function PCR_P03_Main_Functions() {
  const [people, setPeople] = useState(data)
  
  
  return (
    <Fragment>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>
       clear all
      </button>
    </Fragment>
  )
}


const List = ({ people }) => {
  
  return (
    <Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key="id" className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};