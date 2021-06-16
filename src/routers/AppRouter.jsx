import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { BlockScreen } from '../components/block/blockScreen/BlockScreen';
import { CrearBacklogPriorizado } from '../components/block/inicioScreen/CrearBacklogPriorizado';
import { DesarrolloEpicas } from '../components/block/inicioScreen/DesarrolloEpicas';
import { IdentificacionEquipoScrum } from '../components/block/inicioScreen/IdentificacionEquipoScrum';
import { IdentificarScrumMaster } from '../components/block/inicioScreen/IdentificarScrumMaster';
import { InicioScreen } from '../components/block/inicioScreen/InicioScreen';
import { PlanificacionDelLanzamiento } from '../components/block/inicioScreen/PlanificacionDelLanzamiento';
import { VisionDelProyecto } from '../components/block/inicioScreen/VisionDelProyecto';
import { ComprometerHistoriaUsuario } from '../components/block/sprint1/planificacionEstimacion/ComprometerHistoriaUsuario';
import { CrearHistoriaUsuario } from '../components/block/sprint1/planificacionEstimacion/CrearHistoriaUsuario';
import { CrearSprintBackLog } from '../components/block/sprint1/planificacionEstimacion/CrearSprintBackLog';
import { EstimarHistoriaUsuario } from '../components/block/sprint1/planificacionEstimacion/EstimarHistoriaUsuario';
import { EstimarTarea } from '../components/block/sprint1/planificacionEstimacion/EstimarTarea';
import { IdentificarTareas } from '../components/block/sprint1/planificacionEstimacion/IdentificarTareas';
import { PlanificacionEstimacion } from '../components/block/sprint1/planificacionEstimacion/PlanificacionEstimacion';
import { Sprint1 } from '../components/block/sprint1/Sprint1';
import { Sprint2 } from '../components/block/sprint2/Sprint2';
import { Sprint3 } from '../components/block/sprint3/Sprint3';
import { Sprint4 } from '../components/block/sprint4/Sprint4';
import { Footer } from '../components/footer/Footer';
import { NavBar } from './../components/navBar/NavBar';

import { Implementacion } from '../components/block/sprint1/implementacion/Implementacion'
import { CrearEntregable } from '../components/block/sprint1/implementacion/CrearEntregable';
import { RealizarDailyStandup } from '../components/block/sprint1/implementacion/RealizarDailyStandup';
import { RefinamientoDelBacklogPriorizado } from '../components/block/sprint1/implementacion/RefinamientoDelBacklogPriorizado';
import { RevisionRestrospectiva } from '../components/block/sprint1/revision y restrospectiva/RevisionRestrospectiva';
import { DemostrarValidaSprint } from '../components/block/sprint1/revision y restrospectiva/DemostrarValidaSprint';
import { RetrospectivaDelSprint } from '../components/block/sprint1/revision y restrospectiva/RetrospectivaDelSprint';
import { Lanzamiento } from '../components/block/sprint1/lanzamiento/Lanzamiento';
import { EnvioEntregables } from '../components/block/sprint1/lanzamiento/EnvioEntregables';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div>

                <Switch>
                    <Route exact path="/block" component={ BlockScreen } />
                    <Route exact path="/block/inicio" component={ InicioScreen } />
                    <Route exact path="/block/sprint1" component={ Sprint1 } />
                    <Route exact path="/block/sprint2" component={ Sprint2 } />
                    <Route exact path="/block/sprint3" component={ Sprint3 } />
                    <Route exact path="/block/sprint4" component={ Sprint4 } />

                    <Route exact path="/block/vision" component={ VisionDelProyecto } />
                    <Route exact path="/block/scrummaster" component={ IdentificarScrumMaster } />
                    <Route exact path="/block/equiposcrum" component={ IdentificacionEquipoScrum } />
                    <Route exact path="/block/epicas" component={ DesarrolloEpicas } />
                    <Route exact path="/block/backlog" component={ CrearBacklogPriorizado } />
                    <Route exact path="/block/planificacion" component={ PlanificacionDelLanzamiento } />

                    <Route exact path="/block/planificacionestimacion" component={ PlanificacionEstimacion } />
                    <Route exact path="/block/crearhistoria" component={ CrearHistoriaUsuario } />
                    <Route exact path="/block/estimarhistorias" component={ EstimarHistoriaUsuario } />
                    <Route exact path="/block/comprometerhistorias" component={ ComprometerHistoriaUsuario } />
                    <Route exact path="/block/identificartareas" component={ IdentificarTareas } />
                    <Route exact path="/block/estimartareas" component={ EstimarTarea } />
                    <Route exact path="/block/crearsprintbacklog" component={ CrearSprintBackLog } />

                    <Route exact path="/block/implementacion" component={ Implementacion } />
                    <Route exact path="/block/crearentregable1" component={ CrearEntregable } />
                    <Route exact path="/block/dailystand1" component={ RealizarDailyStandup } />
                    <Route exact path="/block/refinamiento1" component={ RefinamientoDelBacklogPriorizado } />

                    <Route exact path="/block/revision" component={ RevisionRestrospectiva} />
                    <Route exact path="/block/demostravalidar" component={ DemostrarValidaSprint} />
                    <Route exact path="/block/restrospectiva" component={ RetrospectivaDelSprint } />

                    <Route exact path="/block/lanzamiento" component={ Lanzamiento } />
                    <Route exact path="/block/envioentregables" component={ EnvioEntregables } />


                    <Redirect  to="/block"/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}

