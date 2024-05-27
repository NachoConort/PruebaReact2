import React from 'react'
import '../estilos/caja.css'

function Caja3(){
    return(
        <div className='contenedortexto'>
            <img className='contendorImagen' src={require('../imagenes/escudo.png')} alt='mbappe'/>
            <h2>Racing Club</h2>
        </div>
    )
}

export default Caja3