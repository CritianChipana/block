import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const IdentificarTareas3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion3"} /> 

            <h2 className="title-principal" >IDENTIFICAR TAREAS</h2>
            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Historias del usuario Comprometida</h3>
            <img src="https://i.pinimg.com/originals/0a/32/31/0a3231c0ac996315cfcf1645f6a16775.jpg" alt="nose cualpa  mia" />


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/DdqLd0aScgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Lista de tareas</h3>
            <img src="https://i.pinimg.com/originals/ad/88/c4/ad88c4372c682121b2c4c01586549ee2.jpg" alt="maria" />
        <BotonAtras direccion={"planificacionestimacion3"} /> 

        </div>
    )
}
