import React from 'react';
import { BotonAtras } from '../../botonAtras/BotonAtras';
import { Carta } from '../../carta/Carta';
import { Todos } from '../blockScreen/Todos';
import "./desarrolloEpicas.css";

export const DesarrolloEpicas = () => {
    return (
        <div className="contenedor-desarrollo-epicas" >
            <h2 className="title-principal" >DESARROLLO DE EPICAS</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <Todos/>

            <h3>Declaracion de la vision del proyecto</h3>
            Desarrollar una aplicación web que brinde herramientas de ayuda personalizada, para que los pacientes de NUTRI & FIT logren mantener un estilo de vida saludable y balanceado.

            <h3>Stakeholder</h3>
            <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />
            

            <h3>Leyes y Regulaciones</h3>
            <p>En este punto, ya que nosotros estamos haciendo uso de datos personales de nuestros pacientes, es necesario mencionar la Ley de Protección de Datos Personales Artículo 14. Limitaciones al consentimiento para el tratamiento de datos personales </p>
            <div className="desplasar-text">
                <p> 
                    “No se requiere el consentimiento del titular de datos personales, para los efectos de su tratamiento, en los siguientes casos: […]<br/><br/>
                    […]6. Cuando se trate de datos personales relativos a la salud y sea necesario, en circunstancia de riesgo, para la prevención, diagnóstico y tratamiento médico o quirúrgico del titular, siempre que dicho tratamiento sea realizado en establecimientos de salud o por profesionales en ciencias de la salud, observando el secreto profesional; o cuando medien razones de interés público previstas por ley o cuando deban tratarse por razones de salud pública, ambas razones deben ser calificadas como tales por el Ministerio de Salud; o para la realización de estudios epidemiológicos o análogos, en tanto se apliquen procedimientos de disociación adecuados.”
                </p>

            </div>

            <h3>Informacion de proyectos previos</h3>
            <p>Nuestro proyecto es nuevo para todos los que conforman el Equipo.</p>

            <h3>Recomendaciones del Scrum Guidance Body </h3>
            <Carta url={"https://i.pinimg.com/564x/35/20/c8/3520c8736cd3dcbc32d7f248cef8b490.jpg"} nombre={"“Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”"} descripcion={"Nuestro Scrum Guidance Body es el libro “Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”. El Scrum Guidance Body en esta sección nos indicó que el Product Owner mantenga reunión con el Stakeholder con la finalidad de poder recolectar épicas, a la misma vez, aconsejar que el Product Owner pueda aplicar un cuestionario para esta reunión. Finalmente organizarlos, y crear Prototipos."} especial={"libro"} />

            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones del grupo de usuarios</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/i749tTjIhZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            {/* <h3>Talleres de historias de usuarios</h3>
            <p>FALTA jose</p>

            <h3>Entrevista al cliente</h3>
            <p>FALTA jose</p> */}

            <h3>Cuestionarios</h3>
            <div className="contenedor-cuestionario">
                <p><strong> Cuestionario: </strong></p>
                <p>1.- ¿Cómo funciona su negocio?</p>
                <p>2.- ¿Cuántos trabajadores tiene en su negocio?</p>
                <p>3.- ¿Cuál es la necesidad que desea suplir?</p>
                <p>4.- ¿Cuántos pacientes recibe por día o por semana?</p>
                <p>5.- ¿Desea que se desarrolle una aplicación para móviles o una aplicación web?</p>
                <p>6.- ¿Es usted la persona que administará la aplicación o se designará a otra persona?</p>
                <p>7.- ¿Qué funcionalidades de administrador le gustaría que presentara esta aplicación?</p>
                <p>8.- ¿Qué funcionalidades de usuario (paciente) le gustaría que presentara esta aplicación?</p>
                <p>9.- Respecto a la opción de brindar recetas personalizadas, ¿qué funcionalidades le gustaría que tenga este apartado?</p>
                <p>10.- Sugerir apartado de favoritos, ¿está de acuerdo con esto?</p>
                <p>11.- ¿Desea alguna otra funcionalidad de la aplicación aparte de las ya mencionadas?</p>
                <p>12.- ¿Le gustaría que se añada un apartado enfocado al contacto con su consultorio?</p>
                <p>13.- Mencionar todas las funcionalidades por parte del administrador y del usuario, ¿es correcto todo lo mencionado o tiene alguna variante?</p>
                <p>14.- ¿Tiene alguna duda o sugerencia extra?</p>

            </div>

                {/* <h3>Experiencia del Scrum Guidance Body</h3>
                <p>FALTA no tiene nombre</p> */}

            <h2>SALIDAS</h2>
            <h3>Epicas</h3>
                <img src="https://i.pinimg.com/originals/fa/b1/74/fab174c911be0a29b5cf6ab82b73d8aa.jpg" alt="as" />
            <h3>Prototipo</h3>
            <p>1.- Romel tiene 20 años de edad y vive en Villa el Salvador. Actualmente cursa una carrera universitaria y le apasionan los videojuegos. Además, cuenta con una pequeña tienda de abarrotes, la cual administra con sus padres. Le gusta mantener una alimentación ordenada, por lo que le gustaría un sitio que le facilite esto. Se estresa cuando una web no le carga bien y cuando esta presenta colores fosforescentes.</p>
            <p>2.- Agustín tiene 43 años de edad y reside en Villa Maria del Triunfo. Actualmente brinda servicios de seguridad a un condominio de La Molina. Le gustan mucho los dulces, pero busca cómo poder controlarse. No tiene muchos conocimiento tecnológicos, por lo que siempre esperar encontrar webs que sean intuitivas. Odia ver páginas con tantas opciones, porque siente que hace todo el proceso engorroso.</p>
            <p>3.- Rafaela tiene 53 años de edad y vive en Chorrillos. Actualmente es ama de casa. Tiene problemas de obesidad, el cual busca contrarrestar con remedios o recetas encontradas por internet. Está muy relacionada con la tecnología y es fanática del material design de los sitios que visita. Le encanta que una aplicación web tenga imágenes coloridas, pero le disgusta tener que dar tantos clicks para llegar a lo que busca.</p>

            <h3>Prototipo de sistema</h3>
            <div className="content-prototipo-sistem">
                <img src="https://i.pinimg.com/originals/b9/aa/2f/b9aa2fa28d5ec1273aef78400c6fe4c9.jpg" alt="login" />
                <img src="https://i.pinimg.com/564x/15/d4/f0/15d4f075bc855f47d552051d347e40a0.jpg" alt="proto4" />
                <img src="https://i.pinimg.com/564x/f4/18/ae/f418ae250c68b399fda0a3eb00fc7e0f.jpg" alt="prototipo2" />
            </div>

            <BotonAtras direccion={"inicio"} /> 

        </div>
    )
}
