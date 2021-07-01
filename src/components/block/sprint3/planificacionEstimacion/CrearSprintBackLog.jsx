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
            <img src="https://i.pinimg.com/originals/b3/9a/40/b39a40bf9a5c61b6e75915319e646569.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/32/a3/80/32a3804045163cf67321a773c23cf10c.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/fd/eb/cb/fdebcbb2bc52863cc0f33d59a4203622.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/b6/f0/96/b6f096fad9abef3eee82d78d2c57ed8e.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/d0/3a/5f/d03a5fcbf11af0702cefe91b62b77dcc.jpg" alt="alvaro" />
            <h3>Duracion del sprint</h3>
            <img src="https://i.pinimg.com/originals/f7/ad/69/f7ad694533ff8a3c215518465c903b6c.jpg" alt="duracion del sprint" />

            {/* <Silder  elemtos={ calendario }/> */}
            


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/FcaiJ2NxQa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Sprint Backlog</h3>
            <img src="https://i.pinimg.com/originals/21/34/09/21340926ca8503d3090bd3e81815b5b1.jpg" alt="Hola mmgvzo" />
            <h3>Sprint Burndown Chart</h3>
            <img src="https://i.pinimg.com/originals/c2/c5/a8/c2c5a8b33dbeb5d3e4b03ee7822f4f1f.jpg" alt="jean" />
        <BotonAtras direccion={"planificacionestimacion3"} /> 

        </div>
    )
}
