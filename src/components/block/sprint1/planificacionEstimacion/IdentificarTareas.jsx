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
            <img src="https://i.pinimg.com/originals/24/32/5e/24325ea012ac21136efd02dad0f06d92.jpg" alt="nose cualpa  mia" />
           


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/DdqLd0aScgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Lista de tareas</h3>
            <img src="https://i.pinimg.com/originals/1b/c3/80/1bc380a9cf2997358079e2fa83763d3b.jpg" alt="maria" />
        <BotonAtras direccion={"planificacionestimacion"} /> 

        </div>
    )
}
