import React from 'react'
import { calendario } from '../../../../data/calendario'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Silder } from '../../../slider/Silder'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const CrearSprintBackLog = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion"} /> 

            <h2 className="title-principal" >CREAR SPRINT BACKLOG</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            <h3>Effort Estimated Task List</h3>
            <img src="https://i.pinimg.com/originals/37/7c/24/377c244b978d82ac8735c2d92c5a77f6.jpg" alt="alvaro" />
            <h3>Duracion del sprint</h3>
            <Silder  elemtos={ calendario }/>
            


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/FcaiJ2NxQa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Sprint Backlog</h3>
            <img src="https://i.pinimg.com/originals/d5/ea/3e/d5ea3ee64f7a8f4817a396f6546e9dfa.jpg" alt="Hola mmgvzo" />
            <h3>Sprint Burndown Chart</h3>
            <img src="https://i.pinimg.com/originals/56/da/f6/56daf68ea6901c222232cf9e6d0ccdc2.jpg" alt="jean" />
        <BotonAtras direccion={"planificacionestimacion"} /> 

        </div>
    )
}
