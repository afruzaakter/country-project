import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    // const {area} = props.country;
    return (
        <div className='country'>
          
            {/* step-1  */}
            <h2>Country Name: {props.name} </h2>
            <img src={props.flag} alt="" />
            <p>Region: {props.region}</p>
            <h4>Population: {props.population}</h4>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;

//  {/* <p>Area:{area} </p> 
//              */}
