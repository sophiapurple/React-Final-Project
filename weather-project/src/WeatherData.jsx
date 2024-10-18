import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function weatherInfo(props){
    return <div className="WeatherData">
         <ul >
                        <div className="row text-white">
                            <span>
                            <span>
                            <WeatherIcon icons={props.data.icon} size={52}/>
                                
                                <li> < UnitConversion celsius={props.data.temperature}/></li>
                            </span>
                            <span>
                               <img src="" alt="" />
                                </span>
                                </span>
                                
                                
                    
                            <li ></li>
                            <li>{props.data.city}</li>
                            <li className="date-month"></li>
                            <li>Wind:{" "}
                                {`${props.data.wind} km/h`}</li>
                                |
                           <li><FormattedTime time={props.data.time}/></li>
                             <li>{weatherInfo.description}</li>
                             <li>  {`Humidity: ${props.data.humidity}%`}</li>
                            
            </div>
            </ul>
           

    </div>
}