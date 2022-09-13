import '../index.css';
import {useState} from 'react'

const SearchCountries=({changeCity})=>{
 
  const [query,setQuery]=useState('');

  const [ defaultCities,setDefaultCities]=useState({
   'New York':0,
   'California':1,
   'Paris':2,
   'Tokyo':3,

  });
  
  const citiesMenu=['New York','California','Paris','Tokyo'];


  const handleChangeCity=(location)=>{
   changeCity(location);
  }
    
    return(
      <div>
  
        <div className="search-area">


        <input type="text" placeholder='Search Location...' value={query} onChange={(event)=>setQuery(event.target.value)}/>


        <div className='search-tab' onClick={()=>handleChangeCity(query)}>
        <i className=" bi bi-search" ></i>
        </div>
   
   
      </div>
   
      <div className='countries'>
        <ul>
          {
            citiesMenu.map((city)=>{
            

              return(
                <li key={defaultCities[city]} onClick={()=>handleChangeCity(city)}>{city}</li>
              )
              
              
               
            })
          }

         
          </ul>
        </div>
   
      


        </div>
    );


}

export default SearchCountries;
