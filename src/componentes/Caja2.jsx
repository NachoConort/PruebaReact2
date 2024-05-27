import React from 'react'
import '../estilos/caja.css'

function Caja2(){
    return(
        <div className='contenedortexto'>
            <img className='contendorImagen' src={require('../imagenes/estadio.jpg')} alt='mbappe'/>
           <h2>Estadio Presidente Perón</h2>
        </div>
    )
}

export default Caja2