import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { SliderCard } from '../../../sliderCard/SliderCard';

export const DemostrarValidaSprint3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"revision3"} /> 

        <h2 className="title-principal" >DEMOSTRAR Y VALIDAR EL SPRINT</h2>

        <h2>ENTRADAS</h2>
        <h3>Equipo Principal de Scrum</h3>
        <SliderCard elemtos={"as"} />
{/* 
        <h3>Entregables del sprint</h3>
        <p>tenemos</p> */}

        <h3>Sprint Backlog</h3>
        <img src="https://i.pinimg.com/originals/4c/97/fa/4c97fa0fd0e133e08ff7b34e956094b1.jpg" alt="jose" />

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
        <img src="https://i.pinimg.com/originals/ce/3c/53/ce3c53c885ce42dd3d64b2ada991e7fe.jpg" alt="jose" />
        <img src="https://i.pinimg.com/originals/82/0c/c9/820cc98436b334e7c6419d38e489eb1f.jpg" alt="jose" />

        <h2>HERRAMIENTAS</h2>
        <h3>Reunion de revision del Sprint</h3>
        <iframe width="790" height="450" src="https://www.youtube.com/embed/QhgI3is68FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2>SALIDAS</h2>
        <h3>Entregables aceptados</h3>
        <img src="https://i.pinimg.com/originals/2c/bc/1d/2cbc1d1399e0d5176fe8fa4d3250326d.jpg" alt="Jose" />

        <h3>Riesgos actualizados</h3>
        <img src="https://i.pinimg.com/originals/a4/cd/c5/a4cdc5b9be4848f7d964d040310496b7.jpg" alt="jean" />
        
        <BotonAtras direccion={"revision3"} /> 

        </div>
    )
}
