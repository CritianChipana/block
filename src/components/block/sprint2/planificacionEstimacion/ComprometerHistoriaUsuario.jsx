import React from 'react';
// import { calendario } from '../../../../data/calendario';
import { BotonAtras } from '../../../botonAtras/BotonAtras';
// import { Silder } from '../../../slider/Silder';
import { SliderCard } from '../../../sliderCard/SliderCard';

export const ComprometerHistoriaUsuario2 = () => {
    return (
        
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"planificacionestimacion2"} /> 

            <h2 className="title-principal" >COMPROMETER HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            
            <h3>Historias del usuario estimadas</h3>
            <img src="https://i.pinimg.com/originals/ed/f0/d2/edf0d2b0ee6f52a738463c5d4d8a35d4.jpg" alt="jose" />
            <img src="https://i.pinimg.com/originals/e3/dc/5c/e3dc5c737959d451ab5c6918908a25fc.jpg" alt="jose" />   
            <h3>Duracion del sprint</h3>
            <img src="https://i.pinimg.com/originals/f7/ad/69/f7ad694533ff8a3c215518465c903b6c.jpg" alt="duracion del sprint" />
            {/* <Silder  elemtos={ calendario }/> */}


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/OJsPUzYuieg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>SALIDAS</h2>
            <h3>Historias de usuario comprometidas</h3>
            <p>De acuerdo a la cantidad necesaria de trabajo que puede ofrecer el equipo de desarrollo, se le preguntó al equipo de desarrollo la cantidad de trabajo que puedes realizar, siendo el puntaje estimado de 115 puntos que puedes llegar a avanzar. Es así como seleccionamos las HU para este primer Sprint.</p>
            <img src="https://i.pinimg.com/originals/0a/32/31/0a3231c0ac996315cfcf1645f6a16775.jpg" alt="nose cualpa  mia" />
        <BotonAtras direccion={"planificacionestimacion2"} /> 

        </div>
        
    )
}
