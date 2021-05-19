import React from 'react';

import { BotonAtras } from '../../botonAtras/BotonAtras';
import { Carta } from '../../carta/Carta';
// import { Todos } from '../blockScreen/Todos';
import { Silder } from '../../slider/Silder';
import { prototipos } from './../../../data/prototipos';

import "./crearBacklogPriorizado.css";
import { SliderCard } from '../../sliderCard/SliderCard';
// import { historiasUsuarios } from '../../../data/historiasUsuarios';

export const CrearBacklogPriorizado = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <h2 className="title-principal" >CREAR EL BACKLOG PRIORIZADO DEL PRODUCTO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />


            <h3>Epicas</h3>
            <img src="https://i.pinimg.com/originals/29/9e/ce/299ecef06166fa23e059a4a3a1c7ebed.jpg" alt="as" />

            <h3>Prototipos</h3>
            <Silder  elemtos={prototipos}/>


            <h3>Stakeholders</h3>
            <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />

            <h3>Declaracion de la vision del proyecto</h3>
            <p>Desarrollar una aplicación web que brinde herramientas de ayuda personalizada, para que los pacientes de NUTRI & FIT logren mantener un estilo de vida saludable y balanceado.</p>

            {/* <h3>Requerimientos del negocion</h3>
            <p>Falta José</p> */}

            <h3>Riesgos Identificados</h3>
            <img src="https://i.pinimg.com/originals/f0/26/95/f026955bd1abd9d78347e1681c356f18.jpg" alt="sato" />

            <h3>Recomendaciones del Scrum Guidance Body</h3>
            <Carta url={"https://i.pinimg.com/564x/35/20/c8/3520c8736cd3dcbc32d7f248cef8b490.jpg"} nombre={"“Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”"} descripcion={"Nuestro Scrum Guidance Body es el libro “Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”. El Scrum Guidance Body en esta sección nos indicó que el Product Owner mantenga reunión con el Stakeholder con la finalidad de poder recolectar épicas, a la misma vez, aconsejar que el Product Owner pueda aplicar un cuestionario para esta reunión. Finalmente organizarlos, y crear Prototipos."} especial={"libro"} />

            <h2>HERRAMIENTAS</h2>
            <h3>Metodos de priorizacion de historias del usuario</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/GophZjBO02k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h3>Talleres de historias del usuario</h3>
            {/* <Silder  elemtos={historiasUsuarios}/> */}
            <img src="https://i.pinimg.com/originals/47/57/01/4757018aa312546b591fa03ecc9a8cc6.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/4a/79/3e/4a793e82792ab4579688debd26eccb8a.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/09/46/2f/09462fad03ce4ad50c1996e9d6d89847.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/e6/c4/fb/e6c4fbc0f3a0a00683c22c8bb7a05ccd.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/18/4a/72/184a72605beaa3c0dc787d13819acd62.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/6b/f5/fe/6bf5fe507302db8fde51ceb258ccac0c.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/df/25/9a/df259a6d82e97e4ea5ecc589e654ca48.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/29/30/e2/2930e2636e63522730e5bcff49c133ab.jpg" alt="on" />
            {/* <p>Falta JOSE</p> */}

            <h3>Metodos de estimacion de historias de usuario</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/OJsPUzYuieg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Backlog Priorizado del Producto</h3>
            <img src="https://i.pinimg.com/originals/78/69/bc/7869bc4122c7eae62b34345631ba4088.png" alt="Maria-no lo hizo" />

            <h3>Criterios de termino</h3>
            <ul>
                <li><p>Todas las pruebas unitarias y funcionales son correctas.</p></li>
                <li><p>Todos los criterios de aceptación se cumplen.</p></li>
                <li><p>Ok del equipo: Desarrolladores, Product Owner, etc.</p></li>
                <li><p>Pruebas de rendimiento pasadas</p></li>
                <li><p>Se han corregido todos los bugs.</p></li>
                <li><p>Entorno preparado para la subida a producción.</p></li>
            </ul>

            <BotonAtras direccion={"inicio"} /> 

        </div>
    )
}
