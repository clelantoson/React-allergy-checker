import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav>
            <NavLink exact to="/">
                Accueil
            </NavLink>
        </nav>
    );
}

export default Navigation;