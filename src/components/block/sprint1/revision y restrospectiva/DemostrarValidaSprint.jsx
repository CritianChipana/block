import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { SliderCard } from '../../../sliderCard/SliderCard';

export const DemostrarValidaSprint = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"revision"} /> 

        <h2 className="title-principal" >DEMOSTRAR Y VALIDAR EL SPRINT</h2>

        <h2>ENTRADAS</h2>
        <h3>Equipo Principal de Scrum</h3>
        <SliderCard elemtos={"as"} />
{/* 
        <h3>Entregables del sprint</h3>
        <p>tenemos</p> */}

        <h3>Sprint Backlog</h3>
        <img src="https://i.pinimg.com/originals/39/cc/21/39cc212cf513e89054cccb4d6358092d.jpg" alt="jose" />
        <img src="https://i.pinimg.com/originals/ba/5b/61/ba5b61a29f352df7e81ddc96859c1e86.jpg" alt="jose" />

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
        <img src="https://i.pinimg.com/originals/80/94/16/809416a5e717bdbf90fd1f1393bdb2f2.jpg" alt="jose" />
        <img src="https://i.pinimg.com/originals/ce/20/89/ce2089b8041c855c2f7e51f602e02612.jpg" alt="jose" />

        <h2>HERRAMIENTAS</h2>
        <h3>Reunion de revision del Sprint</h3>
        <iframe width="790" height="450" src="https://www.youtube.com/embed/QhgI3is68FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2>SALIDAS</h2>
        <h3>Entregables aceptados</h3>
        <img src="https://i.pinimg.com/originals/6e/b1/53/6eb153a5556dd1a8a6e23aad51c0dcc3.jpg" alt="Jose" />

        <h3>Riesgos actualizados</h3>
        <img src="https://i.pinimg.com/originals/fe/01/e5/fe01e5c1bd7f529b8c2ff77171217b60.jpg" alt="jean" />

        </div>
    )
}
