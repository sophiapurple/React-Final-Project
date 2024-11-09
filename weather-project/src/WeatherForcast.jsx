import React from "react";
import axios from "axios";


  export default function WeatherForcast(props){
    let apiKey="93cf0a589b1befff9b43f05fbt79bo02"
    let latitude= props.coordinates.latitude;
    let longitude= props.coordinates.longitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
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

