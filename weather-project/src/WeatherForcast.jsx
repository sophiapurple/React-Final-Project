import React from "react";
import axios from "axios";


  export default function WeatherForcast(props){
    let apiKey="a867e25f2d83db579421a57fd8e937ec"
    let latitude= props.coordinates.lat;
    let longitude= props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
 axios.get(apiUrl).then(displayForcast);
 

 function displayForcast(response){
    console.log(response.data)
 }


 console.log(latitude)
 console.log(longitude)
 
    
    
    return(
        
        <div className="forcast">forcast
        <div className="forcastTemp">temp</div>
      
        <div className="forcastImg">img</div>
        <div className="forcastgroupTemp">
            <span className="max">max</span>
            <span className="min">max</span>
        </div>
    </div>
    )

    


}

