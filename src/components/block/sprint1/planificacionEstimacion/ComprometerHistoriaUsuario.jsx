import React from 'react'
import { calendario } from '../../../../data/calendario'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Silder } from '../../../slider/Silder'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const ComprometerHistoriaUsuario = () => {
    return (
        
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"planificacionestimacion"} /> 

            <h2 className="title-principal" >COMPROMETER HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            
            <h3>Historias del usuario estimadas</h3>
            <img className="ACHICAR-IMG" src="https://i.pinimg.com/originals/28/ce/06/28ce06f489db6406b8bc26ed14d7deed.png" alt="Nadie FfF" />
            
            <h3>Duracion del sprint</h3>
            <Silder  elemtos={ calendario }/>


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/OJsPUzYuieg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>SALIDAS</h2>
            <h3>Historias de usuario comprometidas</h3>
            <img src="https://i.pinimg.com/originals/24/32/5e/24325ea012ac21136efd02dad0f06d92.jpg" alt="nose cualpa  mia" />
        <BotonAtras direccion={"planificacionestimacion"} /> 

        </div>
        
    )
}
