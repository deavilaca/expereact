import React from "react";
import "./TodoSearch.css"

function TodoSearch({estado,setSearchV}){
    // const [Estado,setEstado] = React.useState("");

    const fAlCambiar=(e)=>{
        // console.log(e.target.value)
        setSearchV(e.target.value)
        console.log("Estado",estado)
    }

    return(
        <div>
        <label>Tarea
        <input type='text' className="TodoSearch" placeholder="Escribir tarea" onChange={(e)=>fAlCambiar(e)}/>
        </label>
        <p>{estado}</p>
        </div>
    )
}

export {TodoSearch}