import React from "react";

function TodoItem(props){

/*
    const fBorra = (msg)=>{
       alert(`Tarea ${msg} borrada`) 
    }
*/

    return(
        <li>
        <img src={require(props.completed ? "./palomita.png":"./palomita2.png")} onClick={props.completala}/>    
        {props.desc}
        <img src={require("./tache.png")} onClick={props.borrale}/>
        </li>
    )
}

export {TodoItem}