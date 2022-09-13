import '../index.css';
import SearchCountries from'../components/Search-Countries';
import WeatherDetails from '../components/Weather-Details'
const SearchAndDetails=({weather,changeCity})=>{



return(

<div className="search-details-container">
    
<SearchCountries changeCity={changeCity} />
<hr/>

<WeatherDetails weather={weather}/>

</div> 


    


);




}

export default SearchAndDetails;



