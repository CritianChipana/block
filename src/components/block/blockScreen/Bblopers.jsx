import React from 'react';
import { selectorByNameIntegrantes } from '../../selectors/selectorByNameIntegrantes';
import "./bblopers.css";
import { IntegranteCard } from './IntegranteCard';



export const Bblopers = () => {


    const bblopers = selectorByNameIntegrantes("Developers team");
    return (
        <div className="content-bblopers" >
            
            <div className="bblopers" >
                {
                    bblopers.map( (dato)=>(
                        <IntegranteCard key={dato.id} {...dato}/>
                    ) )
                }
            </div>
        </div>
    )
}
