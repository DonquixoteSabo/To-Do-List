import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css';

function Navigation() {

    return (
        <nav className='nav'>
            <ul className="nav__list">
                <li className="nav__link">
                    <NavLink to='/all' activeClassName='active'>All</NavLink>
                </li>
                <li className="nav__link">
                    <NavLink to='/active' activeClassName='active'>Active</NavLink>
                </li>  
                <li className="nav__link">
                    <NavLink to='/completed' activeClassName='active'>Completed</NavLink>
                </li> 
            </ul>
        </nav>
    )
}

export default Navigation;


