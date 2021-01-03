import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

function Navigation({click, items, activeIndex}) {
    const menu = items.map((item,index) => (
        <li onClick={()=> click(index)} className={`nav__link ${index === activeIndex ? 'active' : null}`} key={index}>
            <Link to={`${item}`}>{item}</Link>
         </li>
    ))
    return (
        <nav className='nav'>
            <ul className="nav__list">
             {menu}
            </ul>
        </nav>
    )
}

export default Navigation;
/* <li className='nav__link'><Link to='/'>All</Link></li>
                <li className='nav__link'><Link to='/active'>Active</Link></li>
                <li className='nav__link'><Link to='/completed'>Completed</Link></li> */

