import React,{useState} from "react";

export default function unitConversion(props){
    let[Unit, setUnit]=useState("celsius");
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    function showFahreheit(event){
        event.preventDefault();
        setUnit("fahreheit")

    }

    if(Unit === "celsius"){
    return(
        <div className="uniTemp"> 
        <span className="fs-1">{`${props.Celsius}°`}</span>
        <span>
           {""} <a href="" onClick={showFahreheit}>C{" "}</a>
           | {" "}F
        </span>
        
        </div>
        
    )
    }
else{
    let fahrehiate = Math.round((props.Celsius + 32)*5/9);
    return(
        <div className="unitTemp">
        <span className="temp fs-1">{fahrehiate}°</span>
        <span>C</span>
                    <span>{" "}
                    <a href="" onClick={showCelsius}>|F</a> </span>
                </div>
            )

    

}}
