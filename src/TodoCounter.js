import React from "react"
import "./TodoCounter.css"
function TodoCounter({hecho,total}){
    return(
        <h2 className="TodoCounter">{`Llevas ${hecho} de ${total}`}</h2>
    )
}

export {TodoCounter};