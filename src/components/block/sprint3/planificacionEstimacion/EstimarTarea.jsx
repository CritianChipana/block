import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const EstimarTarea3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion3"} /> 

        <h2 className="title-principal" >ESTIMAR TAREAS</h2>

        <h2>ENTRADAS</h2>
        <h3>Equipo Principal de Scrum</h3>
        <SliderCard elemtos={"as"} />
        <h3>Lista de tareas</h3>
        <img src="https://i.pinimg.com/originals/75/10/b0/7510b0321195dbca8555edce126dc1c6.jpg" alt="maria" />


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
        <img src="https://i.pinimg.com/originals/62/48/23/624823be2b5b1a4de0414874f76e3717.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/fa/e3/b1/fae3b1d1505a53f38722813a56e0b3a4.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/32/39/39/323939e8263cec8c99d087005ff41e10.jpg" alt="alvaro" />
        {/* <img src="https://i.pinimg.com/originals/b6/f0/96/b6f096fad9abef3eee82d78d2c57ed8e.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/d0/3a/5f/d03a5fcbf11af0702cefe91b62b77dcc.jpg" alt="alvaro" /> */}
        <BotonAtras direccion={"planificacionestimacion3"} /> 

    </div>
    )
}
