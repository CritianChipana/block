import React from 'react';
import {
    Link
} from "react-router-dom";


import './navBar.css';

export const NavBar = () => {
    return (
        <nav className="nav-conteiner">
            <Link
                className="nav-link  nav-title"
                to="/block"
            >
                Block SCRUM
            </Link>

            <div>
                <div className ="aa" >
                    <Link
                        className="nav-link  nav-list-option link-transicion"
                        to="/block/inicio"
                    >
                        VISION
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/block/sprint1"
                    >
                        SPRINT I
                    </Link>
                    
                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/block/sprint2"
                    >
                        SPRINT II
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion "
                        to="/blockscrum/sprint3"
                    >
                        SPRINT III
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/block/sprint4"
                    >
                        SPRINT IV
                    </Link>

                </div>
            </div>

        </nav>
        
    )
}
