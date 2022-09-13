import '../index.css';

const WeatherDetails=({weather})=>{




    return(
        <div className='details'>
        <h4>Weather Details</h4>
    
      <div className='parent-container'>
        
      <div className='container'>
    
                    <div>Cloudy</div>
                    <div>{weather.clouds.all}%</div>
                    </div>
    
                    <div className='container'>
    
                    <div>Humidity</div>
                    <div>{weather.main.humidity}%</div>
                    </div>
    
                    <div className='container'>
    
                    <div>Wind</div>
                    <div>{weather.wind.speed}km/hr</div>
                    </div>
        </div>
       
      </div>
    
    
    
    )
};


export default WeatherDetails;