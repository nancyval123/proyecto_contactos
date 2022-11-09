import React from 'react';
import './App.css';



import {Busqueda} from './Busqueda';
import ListaContactos from './ListaContactos/Index';
import AgregaContacto from './AgregaContacto';
import Contacto from './Contacto';


function App() {
let Contactos=[
  {
    nombre:"Guillermo",
    telefono:"123456789",
    correo:"guillermo@gmail.com"
  },
  {
    nombre:"Marcelo",
    telefono:"987654321",
    correo:"Marcelo@gmail.com"
  },
  {
    nombre:"Fabian",
    telefono:"1122334455",
    correo:"Fabian@gmail.com",
  },

]

let [textoBusqueda,setTextoBsuqueda]=React.useState('');
let ContactosFiltrados=[];

if(textoBusqueda.length>0){
  let textoBusquedaLowerCase=textoBusqueda.toLowerCase();
ContactosFiltrados=Contactos.filter((contacto)=>{
  return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
})
}
else{
ContactosFiltrados=Contactos;
}
  return(
<React.Fragment>
  <h1>DIRECTORIO</h1>
  <Busqueda textoBusqueda={textoBusqueda} setTextoBsuqueda={setTextoBsuqueda} />
  <ListaContactos>
    {
      ContactosFiltrados.map((contacto)=>{
        return(
          <Contacto 
          nombre={contacto.nombre}
          correo={contacto.correo}
          telefono={contacto.telefono}
          />
        )

        
      })
    }
    
      </ListaContactos>
      <AgregaContacto/>
</React.Fragment>
  );


  }
    

export default App;
