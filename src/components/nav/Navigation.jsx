import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

function Navigation({click, items, activeIndex}) {

    const checkClasses = (index) => (
        `nav__link ${index === activeIndex ? 'active': null}`
    )

    return (
        <nav className='nav'>
            <ul className="nav__list">
             {items.map((item,index) => (
                <li onClick={()=> click(index)} className={checkClasses(index)} key={index}>
                    <Link to={item}>{item}</Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default Navigation;


