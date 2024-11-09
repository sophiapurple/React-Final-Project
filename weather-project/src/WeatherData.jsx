import React from "react";
import UnitConversion from "./UnitConversion";
import FormattedTime from "./FormattedTime";






export default function weatherData(props){
    console.log(props.data.icon)
    return (
    <div className="WeatherData ">
         <FormattedTime time={props.data.time}/>
            
            {" "} <UnitConversion Celsius={props.data.temperature}/>
            <div className="city">{props.data.city}</div>
  
   <ul>
    <li><img src={props.data.icon} alt={props.data.description} /></li>
    
   <li>Wind:{" "} {`${props.data.wind} km/h`}</li>
   <li>{props.data.description}</li>
   <li>  {`Humidity: ${props.data.humidity}%`}</li>
   </ul>
     

    </div>)
  
}