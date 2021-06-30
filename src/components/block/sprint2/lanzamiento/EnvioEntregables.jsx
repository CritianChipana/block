import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { Carta } from './../../../carta/Carta';


export const EnvioEntregables2 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"lanzamiento2"} /> 

            <h2 className="title-principal" >ENVIAR ENTREGABLES</h2>

            <h2>ENTRADAS</h2>
            <h3>Product Owner</h3>
            <Carta url={"https://i.pinimg.com/564x/0f/10/e2/0f10e2bdaa2a7e8b7fbb14d702732125.jpg"} nombre={"NAVARRO VICENTE JOSE"} descripcion={"Se optó por elegir a Jose Navarro Vicente como el Product Owner del Equipo Scrum, debido a que presenta un mayor conocimiento de la empresa, así como también conocimiento en el rubro de la salud, además de poseer las habilidades necesarias para poder desempeñarse correctamente en este rol. Él representará a la empresa NUTRI & FIT dentro del equipo y servirá de vínculo con el stakeholder."} />
            
            <h3>Stakeholder</h3>
            <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />

            <h3>Entregables Aceptados</h3>
            <img src="https://i.pinimg.com/originals/6f/18/a4/6f18a46ce001f4dbab3bdab6a4f56a1d.jpg" alt="Jose" />

            <h3>Cronograma de planificacion del lanzamiento</h3>
            <img src="https://i.pinimg.com/originals/f7/ad/69/f7ad694533ff8a3c215518465c903b6c.jpg" alt="nose" />
            
            {/* <h2>HERRAMIENTAS</h2>
            <h3>Metodos de desplazamiento organizacional</h3>
            <p>todos</p> */}

            <h2>SALIDAS</h2>
            <h3>Acuerdo de entregables funcionales</h3>
            <img src="https://i.pinimg.com/originals/13/9e/16/139e169ee023a563a04767b0efb94ef3.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/00/c2/6d/00c26d854ac1960f5471f637740f9366.jpg" alt="alvaro" />
            <BotonAtras direccion={"lanzamiento2"} /> 

        </div>
    )
}
