import React from "react";
import './AgregaContacto.css';
import {DirectorioContext} from '../Context/DirectorioProvider'
import Contacto from "../Contacto";


function AgregaContacto(){
   const {setModal,guardaContacto}=React.useContext(DirectorioContext);
   const [contact,setContacxt]=React.useState({
          nombre:'',
          correo:'',
          telefono:'',
   })

   function onChangeNombre(event){
   let ContactoTemporal=contact;
   ContactoTemporal.nombre=event.target.value;
   setContacxt(ContactoTemporal);
}

function onChangeCorreo(event){
      let ContactoTemporal=contact;ContactoTemporal.correo=event.target.value;
      setContacxt(ContactoTemporal);
}

function onChangeTelefono(event){
      let ContactoTemporal=contact;
      ContactoTemporal.telefono=event.target.value;
      setContacxt(ContactoTemporal);
}

function modalGuardar(event){
   event.preventDefault();
   guardaContacto(contact);
   setModal(false)
}

function modalCancelar(){
   setModal(false);
}
       return(
         <div >
            <form >
                

      <div  className="contenedor" class=" blockercontenedor" id="contenedor"  >
      <div className="fondo">Nuevo Contacto<br />
      <input typeof="text" placeholder="Nombre"  class="boton2" onChange={onChangeNombre}></input><br />
      <input typeof="text"  placeholder="Correo"   class="boton2" onChange={onChangeCorreo}></input><br />
      <input typeof="text"placeholder="Telefono" class="boton2" onChange={onChangeTelefono}></input><br />
      <input typeof="submit" type="button" value="Guardar" class="guardar" onClick={modalGuardar}></input>
      <input type="button" value="Cancelar" class="cancelar" onClick={modalCancelar}></input>
                         </div>
                    </div>
            </form>
        </div>
       )
}

export default AgregaContacto;