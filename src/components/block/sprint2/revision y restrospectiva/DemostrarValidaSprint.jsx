import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { SliderCard } from '../../../sliderCard/SliderCard';

export const DemostrarValidaSprint2 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"revision2"} /> 

        <h2 className="title-principal" >DEMOSTRAR Y VALIDAR EL SPRINT</h2>

        <h2>ENTRADAS</h2>
        <h3>Equipo Principal de Scrum</h3>
        <SliderCard elemtos={"as"} />
{/* 
        <h3>Entregables del sprint</h3>
        <p>tenemos</p> */}

        <h3>Sprint Backlog</h3>
        <img src="https://i.pinimg.com/originals/21/34/09/21340926ca8503d3090bd3e81815b5b1.jpg" alt="jose" />

        <h3>Criterios de terminado</h3>
        <ul>
                <li><p>Todas las pruebas unitarias y funcionales son correctas.</p></li>
                <li><p>Todos los criterios de aceptación se cumplen.</p></li>
                <li><p>Ok del equipo: Desarrolladores, Product Owner, etc.</p></li>
                <li><p>Pruebas de rendimiento pasadas</p></li>
                <li><p>Se han corregido todos los bugs.</p></li>
                <li><p>Entorno preparado para la subida a producción.</p></li>
            </ul>

        <h3>Criterio de aceptacion de las historias del usuario</h3>
        <img src="https://i.pinimg.com/originals/e2/e5/fb/e2e5fb18f261a63e57fa86a156422c93.jpg" alt="jose" />
        <img src="https://i.pinimg.com/originals/4a/6c/fd/4a6cfd97d0071710f89725fb8e2690c7.jpg" alt="jose" />

        <h2>HERRAMIENTAS</h2>
        <h3>Reunion de revision del Sprint</h3>
        <iframe width="790" height="450" src="https://www.youtube.com/embed/QhgI3is68FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2>SALIDAS</h2>
        <h3>Entregables aceptados</h3>
        <img src="https://i.pinimg.com/originals/6f/18/a4/6f18a46ce001f4dbab3bdab6a4f56a1d.jpg" alt="Jose" />

        <h3>Riesgos actualizados</h3>
        <img src="https://i.pinimg.com/originals/7e/99/3c/7e993cd612c3b3c0bf5aa416817e586b.jpg" alt="jean" />
        
        <BotonAtras direccion={"revision2"} /> 

        </div>
    )
}
