import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { Carta } from './../../../carta/Carta';


export const EnvioEntregables = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"lanzamiento"} /> 

        <h2 className="title-principal" >ENVIAR ENTREGABLES</h2>

        <h2>ENTRADAS</h2>
        <h3>Product Owner</h3>
        <Carta url={"https://i.pinimg.com/564x/0f/10/e2/0f10e2bdaa2a7e8b7fbb14d702732125.jpg"} nombre={"NAVARRO VICENTE JOSE"} descripcion={"Se optó por elegir a Jose Navarro Vicente como el Product Owner del Equipo Scrum, debido a que presenta un mayor conocimiento de la empresa, así como también conocimiento en el rubro de la salud, además de poseer las habilidades necesarias para poder desempeñarse correctamente en este rol. Él representará a la empresa NUTRI & FIT dentro del equipo y servirá de vínculo con el stakeholder."} />
        
        <h3>Stakeholder</h3>
        <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />

        <h3>Entregables Aceptados</h3>
        <img src="https://i.pinimg.com/originals/6e/b1/53/6eb153a5556dd1a8a6e23aad51c0dcc3.jpg" alt="Jose" />

        <h3>Cronograma de planificacion del lanzamiento</h3>
        <p>tenemos</p>
        
        <h2>HERRAMIENTAS</h2>
        <h3>Metodos de desplazamiento organizacional</h3>
        <p>todos</p>

        <h2>SALIDAS</h2>
        <h3>Acuerdo de entregables funcionales</h3>
        <img src="https://i.pinimg.com/originals/3a/fd/ee/3afdeeadb794af88ac13e2d143b5f5d5.jpg" alt="alvaro" />
        <img src="https://i.pinimg.com/originals/ce/42/ec/ce42ec056df6641c1afdb8d69ddaf198.jpg" alt="alvaro" />
        </div>
    )
}
