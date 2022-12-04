


import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './Busqueda.css';
import { DirectorioContext } from "../Context/DirectorioProvider";

function Busqueda() {
    
   const {
    textoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);
    function onBusquedaChange(event){
        setTextoBusqueda(event.target.value);
        
    }
    return (
    <React.Fragment>
        <input onChange={onBusquedaChange} value={textoBusqueda}></input>
    </React.Fragment>  
    );
}

export {Busqueda};