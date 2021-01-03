import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './Navigation.css';

function Navigation() {
   
    const location = useLocation();

    useEffect(()=>{
        const link1 =  document.querySelector('.nav__link:nth-child(1)');
        const link2 = document.querySelector('.nav__link:nth-child(2)');
        const link3 = document.querySelector('.nav__link:nth-child(3)');
        if(location.pathname === '/active'){
           link1.classList.remove('active');
           link2.classList.add('active');
           link3.classList.remove('active')
          
        }else if(location.pathname === '/completed'){
            link1.classList.remove('active');
            link2.classList.remove('active');
            link3.classList.add('active')
         
        } else {
            link1.classList.add('active');
            link2.classList.remove('active');
            link3.classList.remove('active')
        }
       
    })

    return (
        <nav className='nav'>
            <ul className="nav__list">
                <li className='nav__link'><Link to='/'>All</Link></li>
                <li className='nav__link'><Link to='/active'>Active</Link></li>
                <li className='nav__link'><Link to='/completed'>Completed</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;

