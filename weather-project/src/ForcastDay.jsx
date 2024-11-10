import React from "react";




export default function ForcastDay(props){
    console.log(props.timestamp)

    function ForcastDay(){
        let now = new Date(props.forcast.time*1000);
        let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let day= days[now.getDay()];
        return day
    }
    

    function maxTemperature(){
        let maxTemp=Math.round(props.forcast.temperature.maximum);
        return `${maxTemp}`
    }

    function minTemperature(){
        let minTemp=Math.round(props.forcast.temperature.minimum);
        return `${minTemp}`
    }
    
    

    return(
        <div> 
    <div className="weather">
        <div className="day">
            
        </div>
        <div className="temp">
            <div className="days">
                {ForcastDay()}

            </div>
          
                <div className="image">image
                    <img src="" alt="" />
                </div>
                <div className="max-min">
                <span className="me-2" >{maxTemperature()}</span>
                <span >{minTemperature()}</span>
                 </div>
        </div>

    </div>
        </div>
    )
}