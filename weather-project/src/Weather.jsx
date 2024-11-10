
import {useState}from "react";

import"./Weather.css";
import WeatherData from "./WeatherData";
import WeatherForcast from "./WeatherForcast";

import CLEARCLOUDS from "./images/clearclouds.jpg"
import axios from "axios";



export default function  Weather(props){

    let[weatherInfo, setWeatherInfo]=useState({notication:false});
    let[city, setCity]=useState(props.city)


    

    function handleResponse(response){
        console.log(response.data)
        setWeatherInfo({
            notication:true,
            temperature:`${Math.round(response.data.temperature.current)}°`,
            icon: response.data.condition.icon_url,
            city:response.data.city,
            wind: Math.round(response.data.wind.speed),
            coordinates:response.data.coordinates,
            time:new Date(response.data.time*1000),
            description:response.data.condition.description,
            humidity:`${Math.round(response.data.temperature.humidity)}%`,
        })   
    }
    
        function search(){
            const apiKey = "93cf0a589b1befff9b43f05fbt79bo02";
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
            
            axios.get(apiUrl).then(handleResponse);
        }

      
        function handleSubmit(event){
            event.preventDefault();
            search();

         } 
         function handleCityChange(event){
            setCity(event.target.value)

        }
        
         
         if(weatherInfo.notication){
            return(
                <div className="Weather text-white">
                    <div className="container weather-wrapper">
                   
                   <form onSubmit={handleSubmit}>
                    <input type="text" className=" rounded mt-3 ps-5" onChange={handleCityChange}  />
                    <input type="submit" value="Search" className="ms-2 rounded" />
                   </form>
                   
                   <div className="weatherdata">
                 <WeatherData data ={weatherInfo}/>
                 <WeatherForcast coordinates={weatherInfo.coordinates}/>

                
                 </div>

            </div>
           
    
        </div>
    
            )
          
         }
         else{
            search();
    

         }
         return(
            <p>loading..</p>
         )

    




    

}
        