
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
            temperature:Math.round(response.data.main.temp),
            icon: response.data.weather[0].icon,
            city:response.data.name,
            wind: Math.round(response.data.wind.speed),
            coordinates:response.data.coord,
            time:new Date(response.data.dt*1000),
            description:response.data.weather[0].description,
            humidity:Math.round(response.data.main.humidity),
        })   
    }
    
        function search(){
            const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            
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
        