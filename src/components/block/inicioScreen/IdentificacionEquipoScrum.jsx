import React from 'react';
import { BotonAtras } from '../../botonAtras/BotonAtras';
import { Carta } from '../../carta/Carta';
import { Bblopers } from '../blockScreen/Bblopers';


import "./identificacionEquipoScrum.css"

export const IdentificacionEquipoScrum = () => {
    return (
        <div className="contenedor-scrum-team" >
            <h2 className="title-principal" >Identificacion del Equipo Scrum</h2>

            <h2>ENTRADAS</h2>
            <h3>Product Owner</h3>
            <Carta url={"https://i.pinimg.com/564x/0f/10/e2/0f10e2bdaa2a7e8b7fbb14d702732125.jpg"} nombre={"NAVARRO VICENTE JOSE"} descripcion={"Se optó por elegir a Jose Navarro Vicente como el Product Owner del Equipo Scrum, debido a que presenta un mayor conocimiento de la empresa, así como también conocimiento en el rubro de la salud, además de poseer las habilidades necesarias para poder desempeñarse correctamente en este rol. Él representará a la empresa NUTRI & FIT dentro del equipo y servirá de vínculo con el stakeholder."} />

            <h3>Scrum Master</h3>
            <Carta url={"https://i.pinimg.com/originals/b6/b6/e3/b6b6e30ac8da84228ce4289fb1bef01c.jpg"} nombre={"AYALA PFUTURI MARIA"} descripcion={"Luego de realizar la matriz de disponibilidad y compromiso pudimos concluir que AYALA PFUTURI MARIA es la persona con mejor capacidad para asumir el cargo de SCRUM MASTER del equipo. Gracias a sus habilidades, capacidad de liderazgo y apoyo al equipo."} />

            <h3>Delaracion de la vision del Proyecto</h3>
            <p>Desarrollar una aplicación web que brinde herramientas de ayuda personalizada, para que los pacientes de NUTRI & FIT logren mantener un estilo de vida saludable y balanceado.</p>

            <h3>Requisitos de las personas</h3>
            <img src="https://i.pinimg.com/564x/71/60/05/716005e956b0720bd1598edd6c076d0b.jpg" alt="red" />

            <h3>Disponibilidad y compromiso de las personas</h3>
            <img src="https://i.pinimg.com/originals/26/3d/6d/263d6d9d02695c6d4323ebb675c343e8.jpg" alt="DISPONIBILIDAD" />

            <h3>Matriz de las destrezas requeridas</h3>
            <img src="https://i.pinimg.com/originals/e4/cf/ad/e4cfadba8d34f4924c59f7d0eb29ae65.jpg" alt="Matriz de destresas requeridas jose" />

            <h3>Requerimientos de recursos</h3>
            <img src="https://i.pinimg.com/originals/fd/c7/1a/fdc71a18183a81cc3ba098025cd93436.jpg" alt=" red" />


            <h3>Recomendaciones del Scrum Guidance Body</h3>
            <Carta url={"https://i.pinimg.com/564x/35/20/c8/3520c8736cd3dcbc32d7f248cef8b490.jpg"} nombre={"“Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”"} descripcion={"Nuestro Scrum Guidance Body es el libro “Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”. El Scrum Guidance Body menciona que los miembros ideales del Equipo de Desarrollo deben tener los siguientes criterios para su selección: Independientes, responsables, colaborativos, un equipo capaz de fomentar un ambiente de reflexión independiente y de tomar decisiones, esto con el fin de extraer los mayores beneficios de la estructura."}  especial={"libro"} />


            <h2>HERRAMIENTAS</h2>
            <h3>Seleccion del equipo Scrum</h3>
            <img src="https://i.pinimg.com/originals/a6/e2/27/a6e227c38ca1181efeef03e93bec2c6f.jpg" alt="sELECCION DEL EQUIPO ( jose)" />

            <h3>Costos de recursos</h3>
            <img src="https://i.pinimg.com/564x/c8/30/62/c83062b2330462cabbb886b3e78e28d9.jpg" alt=" yoo " />

            <h2>SALIDAS</h2>
            <h3>Equipo de Desarrollo</h3>
            < Bblopers/>

            <h3>Plan de colaboracion</h3>
            <h5>1.	Herramientas</h5>    
            <img src="https://i.pinimg.com/originals/fd/c7/1a/fdc71a18183a81cc3ba098025cd93436.jpg" alt=" red" />


            <h5>2.   Técnicas</h5>
            <h5>Tablero Kanban</h5>
            <p>El tablero Kanban es la herramienta para mapear y visualizar su flujo de trabajo.<br/>											
                Cada columna visualiza una fase de su proceso y las filas representan diferentes tipos de actividades específicas (diseño, errores, deuda técnica, etc.).				
                Al mismo tiempo, cada tarea que entra en su flujo de trabajo aparece en el tablero como una tarjeta Kanban. El punto de entrada de cada tarjeta es la columna 
                “Por hacer”.En resumen, cada tablero de Kanban se divide en tres secciones básicas que muestran el estado de sus tareas:<br/>													
                A) Por hacer<br/>													
                B) En proceso<br/>													
                C) Hecho<br/>
            </p>    
            <img src="https://i.pinimg.com/564x/0d/ce/4e/0dce4eaf2cc3cfeeadaa3ea38f813278.jpg" alt="red" />
            <p>as</p>


            <h5>3.	Acuerdos de la Reunion</h5>    
            <img src="https://i.pinimg.com/564x/58/6e/37/586e377a38aca223302610f15440525d.jpg" alt="red" /><p></p>

            <BotonAtras direccion={ "inicio" } />

        </div>
    )
}
