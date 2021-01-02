import React, {useState} from 'react';

import './Navigation.css';

function Navigation() {

    const handleNavClick = (index) =>{
        if(index === 1){
            setFirstLinkActive(true);
            setSecondLinkActive(false)
            setThirdLinkActive(false)
        }else if(index === 2){
            setFirstLinkActive(false);
            setSecondLinkActive(true)
            setThirdLinkActive(false)
        }else if(index === 3){
            setFirstLinkActive(false);
            setSecondLinkActive(false)
            setThirdLinkActive(true);
        }
    };

    const [firstLinkActive, setFirstLinkActive] = useState(true);
    const [secondLinkActive, setSecondLinkActive] = useState(false);
    const [thirdLinkActive, setThirdLinkActive] = useState(false);
    
    const activeTheme = {
        borderBottom: '4px solid #2F80ED',
        borderRadius: '4px 4px 0px 0px',
    }

    return (
        <nav className='nav'>
            <ul className="nav__list">
                <li style={firstLinkActive ? activeTheme : null} className="nav__link" onClick={() => handleNavClick(1)}>All</li>
                <li style={secondLinkActive ? activeTheme : null}  className="nav__link" onClick={() => handleNavClick(2)}>Active</li>
                <li style={thirdLinkActive ? activeTheme : null} className="nav__link" onClick={() => handleNavClick(3)}>Completed</li>
            </ul>
        </nav>
    )
}

export default Navigation;