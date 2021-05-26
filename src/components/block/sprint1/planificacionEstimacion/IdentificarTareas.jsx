import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const IdentificarTareas = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion"} /> 

            <h2 className="title-principal" >IDENTIFICAR TAREAS</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Historias del usuario Comprometida</h3>
            <img src="https://i.pinimg.com/originals/8f/5b/87/8f5b87f4d14b47a798d7e0b1ac7ed9e9.png" alt="nose cualpa  mia" />
           


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/DdqLd0aScgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Lista de tareas</h3>
            <img src="https://i.pinimg.com/originals/50/f7/66/50f76685d797127cfaaf323b77ee736b.png" alt="maria" />
        <BotonAtras direccion={"planificacionestimacion"} /> 

        </div>
    )
}
