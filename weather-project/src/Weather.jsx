import React from "react";
import"./Weather.css";
import CLEARCLOUDS from "./images/clearclouds.jpg"




export default function  Weather(){

return(
    <div className="Weather">
        <div className="container weather-wrapper">
       
       <form >
        <input type="text" className=" " />
        <input type="submit" value="Search" />
       </form>
        <ul >
            <div className="row text-white">
                <div className="col-12">
                    <a href=""></a>
                
                    <img src="./src/maninsnow.jpg" alt="j" />
                    12
                   </div> 
                
                <li >description</li>
                <li>City</li>
                <li>Date</li>
                <li><span>feels like</span>{" "}|{" "} <span>time</span></li>
                

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