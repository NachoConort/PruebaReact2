import React from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../estilos/slider.css'

function Slider2(){
    const images = [
        require('../imagenes/costas.jpg'),
        require('../imagenes/juanfer.jpg'),
        require('../imagenes/martinez.jpg'),
        require('../imagenes/roger.jpg'),
        require('../imagenes/salas.jpg')
    ]
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const carouselStyles = {
        margin: 'auto',
        width: '50%',
        height: 'auto'
    }
    return(
        <div id='slider-container'>
            <h1>Mejores jugadores de Racing Club</h1>
            <Slider {...settings} style={carouselStyles}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="slide" style={{width: '100%', height: '400px', borderRadius: '20px'}}/>
                </div>
            ))}
            </Slider>
        </div>
        
    )
}

export default Slider2