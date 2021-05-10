import React from 'react';
import { integrantes } from '../../../data/integrantes';
import { IntegranteCard } from './IntegranteCard';

import "./todos.css"

export const Todos = () => {
    const inte = integrantes;
    return (

        <div className="content-todos" >
            <div className="todos" >
                {
                    inte.map( (dato)=>(
                        <IntegranteCard key={dato.id} {...dato}/>
                    ))
                }
            </div>
        </div>
    )
}
