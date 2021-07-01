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
        <img src="https://i.pinimg.com/originals/ad/88/c4/ad88c4372c682121b2c4c01586549ee2.jpg" alt="maria" />


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
        <img src="https://i.pinimg.com/originals/b3/9a/40/b39a40bf9a5c61b6e75915319e646569.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/32/a3/80/32a3804045163cf67321a773c23cf10c.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/fd/eb/cb/fdebcbb2bc52863cc0f33d59a4203622.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/b6/f0/96/b6f096fad9abef3eee82d78d2c57ed8e.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/d0/3a/5f/d03a5fcbf11af0702cefe91b62b77dcc.jpg" alt="alvaro" />
        <BotonAtras direccion={"planificacionestimacion3"} /> 

    </div>
    )
}
