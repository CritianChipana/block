import React from 'react';
// import { calendario } from '../../../../data/calendario';
import { BotonAtras } from '../../../botonAtras/BotonAtras';
// import { Silder } from '../../../slider/Silder';
import { SliderCard } from '../../../sliderCard/SliderCard';

export const ComprometerHistoriaUsuario3 = () => {
    return (
        
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"planificacionestimacion3"} /> 

            <h2 className="title-principal" >COMPROMETER HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            
            <h3>Historias del usuario estimadas</h3>
            <img src="https://i.pinimg.com/originals/f8/a7/08/f8a708799ae63e1eccedb40a98a53a32.jpg" alt="jose" />
            {/* <img src="https://i.pinimg.com/originals/e3/dc/5c/e3dc5c737959d451ab5c6918908a25fc.jpg" alt="jose" />    */}
            <h3>Duracion del sprint</h3>
            <img src="https://i.pinimg.com/originals/69/d7/24/69d724a52db43ff3e742198629be3104.jpg" alt="duracion del sprint" />
            {/* <Silder  elemtos={ calendario }/> */}


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/OJsPUzYuieg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>SALIDAS</h2>
            <h3>Historias de usuario comprometidas</h3>
            <p>De acuerdo a la cantidad necesaria de trabajo que puede ofrecer el equipo de desarrollo, se le preguntó al equipo de desarrollo la cantidad de trabajo que puedes realizar, siendo el puntaje estimado de 115 puntos que puedes llegar a avanzar. Es así como seleccionamos las HU para este primer Sprint.</p>
            <img src="https://i.pinimg.com/originals/6a/e1/3a/6ae13a3dbf5c2916acad13630ff5a3a9.jpg" alt="nose cualpa  mia" />
        <BotonAtras direccion={"planificacionestimacion3"} /> 

        </div>
        
    )
}
