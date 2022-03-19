import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';
const Countries = () => {
 const [countries, setCountries] = useState([]);
//  console.log(countries);

 useEffect ( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

 },[])


    return (
        <div >
            <h2>Hello Hi</h2>
           
            {/* {
                  countries.map(country => console.log(country))
            } */}



            {/* step 1 */}

<div className='contries-container'>
{
countries.map(country => <Country  name={country.name.common} region = {country.region} population = {country.population} area = {country.area} flag = {country.flags.png} key = {country.cca3}>
</Country>)

}
</div>




{/* //short process step-2*/}

            {/* {
         
          countries.map(country =><Country    
            country = {country}
          ></Country> )
            } */}


{/* // step-3  */}

{/* {
                  countries.map(country => <Country country ={country}  ></Country>)
            } */}


        </div>
    );
};

export default Countries;

// flags = {country.flags.png}

  // long process 
            // name={country.name.common} region = {country.region} population = {country.population} area = {country.area} 