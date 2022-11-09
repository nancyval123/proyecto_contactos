


import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './Busqueda.css';

function Busqueda(props) {
    
   
    function onBusquedaChange(event){
        props.setTextoBusqueda(event.target.value);
        
    }
    return (
    <React.Fragment>
        <input onChange={onBusquedaChange}></input>
    </React.Fragment>  
    );
}

export {Busqueda};