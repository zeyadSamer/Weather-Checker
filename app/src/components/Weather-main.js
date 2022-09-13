
import '../index.css';


const WeatherMain=({weather})=>{

  const date=new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const publishedDate=`${date.getHours()}:${date.getMinutes()}-${days[date.getDay()]}-${date.getDate()},${date.getMonth()},${date.getFullYear()}`


   


    return(
        
        <div className="weather-container">

        <h2>Weather Checker</h2>

        <div className="data-container">
          <div className='temperature'>
             
            <h3>{Math.round(weather.main.temp)}&#176;</h3>
          
          </div>

          <div className='country'>
            
           
           
            <h3>{weather.name}</h3>
 

            <p>{publishedDate}</p>
    

          </div>

          <div className='weather-icon'>

      
           <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='sunny'/>
           <p>{weather.weather[0].description}</p>
        

          </div>
          
        </div>


        </div>




    );

}
export default WeatherMain;