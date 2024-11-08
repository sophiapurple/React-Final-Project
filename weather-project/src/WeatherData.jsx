import React from "react";
import UnitConversion from "./UnitConversion";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";





export default function weatherData(props){
    
    return (
    <div className="WeatherData ">
         <FormattedTime time={props.data.time}/>
            <WeatherIcon icon={props.data.icon} size={52}/>
            {" "} <UnitConversion Celsius={props.data.temperature}/>
            <div className="city">{props.data.city}</div>
  
   <ul>
   <li>Wind:{" "} {`${props.data.wind} km/h`}</li>
   <li>{props.data.description}</li>
   <li>  {`Humidity: ${props.data.humidity}%`}</li>
   </ul>
     

    </div>)
  
}