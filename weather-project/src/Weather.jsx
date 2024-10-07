import {useState}from "react";

import"./Weather.css";
import CLEARCLOUDS from "./images/clearclouds.jpg"
import axios from "axios";


export default function  Weather(){
    let[weatherInfo, setWeatherInfo]=useState({});
    let[notication, setNotication]=useState(false);


    function formatTime(timeStamp){
       let now = new Date(timeStamp);
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sat"];
    let day = days[now.getDay()];



    let hour = now.getHours();
    if(hour<10){
        hour=`0:${hour}`
    }
    else{
        hour= hour
    }

    let mins = now.getMinutes();
    if(mins < 10){
        mins =`0:${mins}`
    }
    else{
        mins=mins;
    }

    return (`
        ${day} ,${hour}: ${mins}`) 

    }

    function formatMonth(){
        let now = new Date();
        let date = now .getDate();
       let months=["January","Febuary","March","April","May","June",
                "July","August","September","October","November","December"];
        let month = months[now.getMonth()]; 
        let year = now.getFullYear();
        return(`${date},${" "} ${month} ${year}`)
        
    }
    function handleResponse(response){
        console.log(response.data)
        setWeatherInfo({
            temperature:Math.round(response.data.temperature.current),
            city:response.data.city,
            wind: Math.round(response.data.wind.speed),
            cord:response.data.coordinates,
            timeDay:formatTime(response.data.time*1000),
            monthYear:formatMonth(response.data.time*1000),
            description:response.data.condition.description,
            humidity:Math.round(response.data.temperature.humidity),

    
        })
        setNotication(true);
       
        
    }

         if(notication){
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
                            <li className="date-month">{weatherInfo.monthYear}</li>
                            <li className="day-time"></li>
                            <li>Wind:{" "}
                                {`${weatherInfo.wind} km/h`}</li>
                                |
                             <li>{weatherInfo.timeDay}</li>
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
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=uk&key=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);

         }
         return(
            <p>loading..</p>
         )

    

    
        }     

