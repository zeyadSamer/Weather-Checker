
import WeatherMain from './components/Weather-main';
import SearchAndDetails from './components/Search_Details';
import fetch from 'node-fetch';
import './index.css';
import { useEffect, useState } from 'react';

function App() {


  
  const [city,setCity]=useState('New York');

  useEffect(()=>{

    getWeatherData(baseUrl,apiKey,city);
    
    
    },[city]);

  const [weatherData,setWeatherData]=useState(undefined);
 
  const apiKey='3685b3f8659ce3f81cc381117687b906';
  const baseUrl='https://api.openweathermap.org/data/2.5/weather?';



  
  const getWeatherData=async(url,key,location)=>{
    
    try{
    const response=await fetch(`${baseUrl}q=${location}&appid=${apiKey}&units=metric`);
  
    const data=await response.json();
  
    if(data.cod==="404"){

      return alert('city not found');
    }
    
    setWeatherData(data);  
  
 
  
  
    return data; 
    }catch(err){
      throw err;
    }
  
  }




  const changeCity=(newLocation)=>{
    console.log(`new location:${newLocation}`);
    

    setCity(newLocation);
 
  }




   return (
 
    <div className="App">
     {
      
     
     weatherData!==undefined&& <div className="parent">
        
            <WeatherMain weather={weatherData}/>
            <SearchAndDetails weather={weatherData} changeCity={changeCity}/>
        


        </div>
     }
     
        </div>
  
      
  


   
  );
}

export default App;
