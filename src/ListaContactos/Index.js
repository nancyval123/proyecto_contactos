import React from "react";

function ListaContactos(Props){
    return(
        <div>
            <h2> Mis Contactos</h2>
            {Props.children}
        </div>
    )
}
export default ListaContactos;