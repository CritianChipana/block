import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { Carta } from './../../../carta/Carta';

import { Bblopers } from './../../blockScreen/Bblopers';


export const RetrospectivaDelSprint2 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"revision2"} /> 

            <h2 className="title-principal" >RESTROSPECTIVA DEL SPRINT</h2>

            <h2>ENTRADAS</h2>
            <h3>Scrum Master</h3>
            <Carta url={"https://i.pinimg.com/originals/b6/b6/e3/b6b6e30ac8da84228ce4289fb1bef01c.jpg"} nombre={"AYALA PFUTURI MARIA"} descripcion={"Luego de realizar la matriz de disponibilidad y compromiso pudimos concluir que AYALA PFUTURI MARIA es la persona con mejor capacidad para asumir el cargo de SCRUM MASTER del equipo. Gracias a sus habilidades, capacidad de liderazgo y apoyo al equipo."} />

            <h3>Equipo Scrum</h3>
            < Bblopers/>

            <h3>Salidas de Demostrar y validar el sprint</h3>
            <img src="https://i.pinimg.com/originals/6f/18/a4/6f18a46ce001f4dbab3bdab6a4f56a1d.jpg" alt="Jose" />

            <h2>HERRAMIENTAS</h2>
            <h3>Reunion de retrospectiva del sprint</h3>
            <p>La reunión de retrospectiva del sprint es un elemento importante del framework de “inspección-adaptación” 
                de Scrum y es el último paso en un sprint. Todos los miembros del Equipo Scrum asisten a la reunión, 
                misma que organiza y modera el Scrum Master. Se recomienda que asista el Product Owner, aunque no es 
                obligatorio. Un integrante del equipo se desempeña como secretario y documenta las discusiones y los 
                elementos para acciones a futuro. </p>
                <p>1) Las cosas que el equipo necesita seguir haciendo: mejores prácticas</p>
                <p>2) Las cosas que el equipo necesita empezar a hacer: mejoras en el proceso</p>
                <p>3) Las cosas que el equipo necesita dejar de hacer: problemas de proceso y embotellamiento</p>
                <p></p>
            <iframe width="1263" height="702" src="https://www.youtube.com/embed/29b4BAwG3d8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Agreed Actionable improvements</h3>
            <img src="https://i.pinimg.com/originals/0e/c3/80/0ec38068abcbba1bd0c57138fdff367f.jpg" alt="Maria" />
            <BotonAtras direccion={"revision2"} /> 

        </div>
    )
}
