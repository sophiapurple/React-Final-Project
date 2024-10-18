import React,{useState} from "react";


export default function UnitConversion(props){
    let[unit, setUnit]=useState("celsius");

    function showFahreheit(event){
        event.preventDefault();
        setUnit("fahrehiet");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");

    }

    if(unit ==="celsius"){
    return(
        <div className="unitTemp ">
            <span className="temp fs-1">{props.celsius}°</span>
            <span>{" "} <a href="" onClick={showFahreheit}>F</a> {" "} |</span>
            <span>{" "}C</span>

        </div>
    )
}
else{
    let fahrehiate = Math.round((props.celsius - 32)*5/9)
    return(
        <div className="unitTemp">
<span className="temp fs-1">{fahrehiate}°</span>
            <span>{" "} F{" "} |</span>
            <span>{" "} <a href="" onClick={showCelsius}>C</a> </span>
        </div>
    )
}

}

