import {useState}from "react";
import"./Weather.css";
import FormattedTime from "./FormattedTime";
import CLEARCLOUDS from "./images/clearclouds.jpg"
import axios from "axios";


export default function  Weather(props){
    let[weatherInfo, setWeatherInfo]=useState({notication:false});
    let[city, setCity]=useState(props.city)


    

    function handleResponse(response){
        console.log(response.data)
        setWeatherInfo({
            notication:true,
            temperature:Math.round(response.data.temperature.current),
            city:response.data.city,
            wind: Math.round(response.data.wind.speed),
            cord:response.data.coordinates,
            time:new Date(response.data.time*1000),
            description:response.data.condition.description,
            humidity:Math.round(response.data.temperature.humidity),

    
        })
        
       
        
    }
    

         if(weatherInfo.notication){
            return(
                <div className="Weather">
                    <div className="container weather-wrapper">
                   
                   <form >
                    <input type="text" className=" rounded mt-3 ps-5"  />
                    <input type="submit" value="Search" className="ms-2 rounded" />
                   </form>
                    <ul >
                        <div className="row text-white">
                            <span>
                            <span>
                                <li>{`${weatherInfo.temperature}°`}</li>
                            </span>
                            <span>
                               <img src="" alt="" />
                                </span>
                                </span>
                                
                                
                            
                            
                            <li ></li>
                            <li>{weatherInfo.city}</li>
                            <li className="date-month"></li>
                            <li>Wind:{" "}
                                {`${weatherInfo.wind} km/h`}</li>
                                |
                           <li><FormattedTime time={weatherInfo.time}/></li>
                             <li>{weatherInfo.description}</li>
                             <li>  {`Humidity: ${weatherInfo.humidity}%`}</li>
                            
            </div>
            </ul>
           


                        

               
               
    
            <div className="forcast">forcast
                <div className="forcastTemp">temp</div>
              
                <div className="forcastImg">img</div>
                <div className="forcastgroupTemp">
                    <span className="max">max</span>
                    <span className="min">max</span>
                </div>
            </div>
            </div>
           
          
        </div>
    
            )
          
         }
         else{

            let apiKey="93cf0a589b1befff9b43f05fbt79bo02";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);

         }
         return(
            <p>loading..</p>
         )

    

    
        }     

