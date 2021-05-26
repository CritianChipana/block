import React from 'react';
import { calendarioFestivo } from '../../../data/calendarioFestivo';
import { calendarioLanzamiento } from '../../../data/calendarioLanzamiento';
import { BotonAtras } from '../../botonAtras/BotonAtras';
import { Carta } from '../../carta/Carta';
import { Silder } from '../../slider/Silder';
import { SliderCard } from '../../sliderCard/SliderCard';
import { calendario} from './../../../data/calendario';

export const PlanificacionDelLanzamiento = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
        <h2 className="title-principal" >REALIZAR LA PLANIFICACION DEL LANZAMIENTO</h2>

        <h2>ENTRADAS</h2>
        <h3>Equipo Principal de Scrum</h3>
        <SliderCard elemtos={"as"} />
        

        <h3>Stakeholder</h3>
        <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />

        <h3>Declaracion de la vision del proyecto</h3>
        <p>Desarrollar una aplicación web que brinde herramientas de ayuda personalizada, para que los pacientes de NUTRI & FIT logren mantener un estilo de vida saludable y balanceado.</p>

        
        <h3>Backlog Priorizado del Producto</h3>
        <img src="https://i.pinimg.com/originals/71/bb/ea/71bbea84fa66308d20f84de77cbd5abe.png" alt="maria mala" />

        <h3>Criterios de  terminado</h3>
        <ul>
                <li><p>Todas las pruebas unitarias y funcionales son correctas.</p></li>
                <li><p>Todos los criterios de aceptación se cumplen.</p></li>
                <li><p>Ok del equipo: Desarrolladores, Product Owner, etc.</p></li>
                <li><p>Pruebas de rendimiento pasadas</p></li>
                <li><p>Se han corregido todos los bugs.</p></li>
                <li><p>Entorno preparado para la subida a producción.</p></li>
            </ul>

        {/* <h3>Requerimientos del negocio</h3> */}

        <h3>Calendario de dias festivos</h3>
        <Silder  elemtos={ calendarioFestivo }/> {/* //alvaro */}

        <h3>Recomendaciones del Scrum Guidance Body</h3>
        <Carta url={"https://i.pinimg.com/564x/35/20/c8/3520c8736cd3dcbc32d7f248cef8b490.jpg"} nombre={"“Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”"} descripcion={"“Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM” Nuestro Scrum Guidance Body es el libro “Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”. El Scrum Guidance Body en esta sección nos indicó las actividades a realizar, a la misma vez que nos dio opciones e ideas para realizar dichas actividades."} especial={"libro"} />
        

        <h2>HERRAMIENTAS</h2>
        <h3>Sesiones de planificacion del lanzamiento</h3>
        <iframe width="789" height="444" src="https://www.youtube.com/embed/OJsPUzYuieg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <p>red-tabla poner aqui video</p> */}


        <h3>Metodo de priorizacion del lanzamiento</h3>
        <p>Los métodos de priorización del lanzamiento se utilizan para desarrollar un plan del lanzamiento. Estos métodos son específicos a la industria y organización, y generalmente son determinados por la alta gerencia de la organización.</p>

        <h2>SALIDAS</h2>
        <h3>Cronograma de Planificacion del lanzamiento</h3>
        <Silder  elemtos={ calendarioLanzamiento }/>
        {/* <p>JEAN</p> */}

        <h3>Duracion del sprint</h3>
        <p>Con base en las diversas entradas, incluyendo los requerimientos del negocio y el cronograma de planificación del lanzamiento, el Product Owner y el Equipo Scrum deciden la duración del sprint para el proyecto. Una vez determinada, la duración del sprint generalmente permanece igual durante el proyecto. Las actividades tendrán duración de 12 semanas, es decir, cada Sprint se presentará cada 3 semanas.</p>
        <Silder  elemtos={ calendario }/>


        <h3>Clientes meta para el lanzamiento</h3>
        <p>El plan de lanzamiento está enfocado en nuestro Stakeholders Piero Zevallos Cáceres y los pacientes que pertenecen a la clínica NUTRI&FIT.</p>

        <BotonAtras direccion={"inicio"} /> 

        </div>
    )
}

// EAFFE2