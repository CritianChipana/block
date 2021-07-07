import React from 'react'
// import { calendario } from '../../../../data/calendario'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
// import { Silder } from '../../../slider/Silder'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const CrearSprintBackLog3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion3"} /> 

            <h2 className="title-principal" >CREAR SPRINT BACKLOG</h2>
            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            <h3>Effort Estimated Task List</h3>
            <img src="https://i.pinimg.com/originals/62/48/23/624823be2b5b1a4de0414874f76e3717.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/fa/e3/b1/fae3b1d1505a53f38722813a56e0b3a4.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/32/39/39/323939e8263cec8c99d087005ff41e10.jpg" alt="alvaro" />
            <h3>Duracion del sprint</h3>
            <img src="https://i.pinimg.com/originals/69/d7/24/69d724a52db43ff3e742198629be3104.jpg" alt="duracion del sprint" />

            {/* <Silder  elemtos={ calendario }/> */}
            


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/FcaiJ2NxQa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Sprint Backlog</h3>
            <img src="https://i.pinimg.com/originals/f8/a7/08/f8a708799ae63e1eccedb40a98a53a32.jpg" alt="Hola mmgvzo" />
            <h3>Sprint Burndown Chart</h3>
            <img src="https://i.pinimg.com/originals/5a/26/51/5a26519ea6daa2f10f39e344cf3a3e02.jpg" alt="jean" />
        <BotonAtras direccion={"planificacionestimacion3"} /> 

        </div>
    )
}
