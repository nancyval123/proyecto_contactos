import React from 'react';
import './App.css';



import {Busqueda} from './Busqueda';
import ListaContactos from './ListaContactos/Index';
import AgregaContacto from './AgregaContacto';
import Contacto from './Contacto';
import {DirectorioContext, DirectorioProvider} from './Context/DirectorioProvider';


/*let Contactos=[
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

]*/
function App() {
  
  return(
    <DirectorioProvider>
    <DirectorioContext.Consumer>
      {
        ({
ContactosFiltrados,
borrarContacto,
contadorContactos,
modal,
setModal
        }) => (
<React.Fragment>
  
  <h1>DIRECTORIO ({contadorContactos})</h1>
  <Busqueda  />
  <button onClick={()=>{setModal(true)}}> agregar contacto</button>
  <ListaContactos>
    {
      ContactosFiltrados.map((contacto)=>{
        return(
          <Contacto 
          nombre={contacto.nombre}
          correo={contacto.correo}
          telefono={contacto.telefono}
          borrarContacto={()=>{borrarContacto(contacto.nombre)}}
          />
        )
      })
    }
      </ListaContactos>
      {modal && <AgregaContacto/>}
      
</React.Fragment>
    )
  }
</DirectorioContext.Consumer>
</DirectorioProvider>

  );
  }
    
export default App;
