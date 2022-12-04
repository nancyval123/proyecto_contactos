import React from "react";
import './Contacto.css';


function Contacto(props){
    function borrar (){
        props.borrarContacto();
    }
    return(
        <div class="parrafo">
            <p>{props.nombre}</p>
           <p> {props.correo}</p>
            <p>{props.telefono}</p>
           <button id="borrar" onClick={borrar}>Borrar</button>
        </div>
    )
}
export default Contacto;
