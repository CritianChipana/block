import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const EstimarTarea = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion"} /> 

        <h2 className="title-principal" >IDENTIFICAR TAREAS</h2>

        <h2>ENTRADAS</h2>
        <h3>Equipo Principal de Scrum</h3>
        <SliderCard elemtos={"as"} />
        <h3>Lista de tareas</h3>
        <img src="https://i.pinimg.com/originals/1b/c3/80/1bc380a9cf2997358079e2fa83763d3b.jpg" alt="maria" />


        <h2>HERRAMIENTAS</h2>
        <h3>Reuniones de planificacion del sprint</h3>
        <iframe width="789" height="444" src="https://www.youtube.com/embed/3Ia_v-w0iBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>Metodo de estimacion</h3>
        <p><strong>Planning Poker</strong></p>
        <p>El Planning Poker, conocido también como Estimation Poker, es un derivado de la técnica Wideband 
Delphi. Esta técnica de estimación implementa el consenso para estimar los tamaños relativos de las 
historias de usuario o el trabajo necesario para desarrollarlos.</p>

        <h2>SALIDAS</h2>
        <h3>Effort Estimated Task List</h3>
        <img src="https://i.pinimg.com/originals/5d/eb/4d/5deb4d617ee3f36a0f472d0906bc0123.png" alt="alvaro" />
        <BotonAtras direccion={"planificacionestimacion"} /> 

    </div>
    )
}
