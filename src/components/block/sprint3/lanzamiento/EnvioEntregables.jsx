import React from 'react';

import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { Carta } from './../../../carta/Carta';


export const EnvioEntregables3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"lanzamiento3"} /> 

            <h2 className="title-principal" >ENVIAR ENTREGABLES</h2>

            <h2>ENTRADAS</h2>
            <h3>Product Owner</h3>
            <Carta url={"https://i.pinimg.com/564x/0f/10/e2/0f10e2bdaa2a7e8b7fbb14d702732125.jpg"} nombre={"NAVARRO VICENTE JOSE"} descripcion={"Se optó por elegir a Jose Navarro Vicente como el Product Owner del Equipo Scrum, debido a que presenta un mayor conocimiento de la empresa, así como también conocimiento en el rubro de la salud, además de poseer las habilidades necesarias para poder desempeñarse correctamente en este rol. Él representará a la empresa NUTRI & FIT dentro del equipo y servirá de vínculo con el stakeholder."} />
            
            <h3>Stakeholder</h3>
            <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />

            <h3>Entregables Aceptados</h3>
            <img src="https://i.pinimg.com/originals/2c/bc/1d/2cbc1d1399e0d5176fe8fa4d3250326d.jpg" alt="Jose" />

            <h3>Cronograma de planificacion del lanzamiento</h3>
            <img src="https://i.pinimg.com/originals/69/d7/24/69d724a52db43ff3e742198629be3104.jpg" alt="nose" />
            
            {/* <h2>HERRAMIENTAS</h2>
            <h3>Metodos de desplazamiento organizacional</h3>
            <p>todos</p> */}

            <h2>SALIDAS</h2>
            <h3>Acuerdo de entregables funcionales</h3>
            <img src="https://i.pinimg.com/originals/5b/fb/09/5bfb099901e42ddab767185d73ced168.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/d9/8b/86/d98b86d483f7fa0373219fd9eaa8714d.jpg" alt="alvaro" />
            <BotonAtras direccion={"lanzamiento3"} /> 

        </div>
    )
}
