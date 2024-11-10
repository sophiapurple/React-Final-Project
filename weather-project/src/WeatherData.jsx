import React from "react";
import UnitConversion from "./UnitConversion";
import FormattedTime from "./FormattedTime";






export default function weatherData(props){
    
    return (
    <div className="WeatherData ">
         <FormattedTime time={props.data.time}/>
            
            {" "} <UnitConversion Celsius={props.data.temperature}/>
            <div className="city">{props.data.city}</div>
            <div><img src={props.data.icon} alt={props.data.description} /></div>
  
   <ul>

    
   <li>Wind:{" "} {`${props.data.wind} km/h`}</li>
   <li>{props.data.description}</li>
   <li>  {`Humidity: ${props.data.humidity}`}</li>
   </ul>
     

    </div>)
  
}