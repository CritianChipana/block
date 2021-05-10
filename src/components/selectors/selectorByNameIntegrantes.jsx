
import {integrantes} from "./../../data/integrantes"

export const selectorByNameIntegrantes = ( name='' ) => {
    
    if( name==='' ){
        return [];
    }

    return integrantes.filter( inter=> inter.rol.includes(name) );

}
