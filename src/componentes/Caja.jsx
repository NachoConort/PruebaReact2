import React from 'react'
import '../estilos/caja.css'

function Caja(){
    return(<div className='contenedortexto'>
            <img className='contendorImagen' src={require('../imagenes/molina.png')} alt='mbappe'/>
        <h2 className='contenedorTitulo'>
            Molina de Racing
        </h2>
    </div>
    )
}

export default Caja