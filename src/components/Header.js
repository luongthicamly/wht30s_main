import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Header.scss'
function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <header>
            <div className="">
                <div className='wrap_header'>
                    <div className="logo">
                        <img src='./assets/images/logo.png' alt='logo' />
                    </div>
                    <div className={"menu-mobile " + (showMenu === true ? 'isOpen' : '')}
                        onClick={handleShowMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={"menu " + (showMenu === true ? 'isOpen' : '')}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to='introduction'>introduction</NavLink>
                                </li>
                                <li>
                                    <NavLink to='rate-plan'>rate plan</NavLink>
                                </li>
                                <li>
                                    <NavLink to='login'>login</NavLink>
                                </li>
                                <li>
                                    <NavLink to='apply-for-free'>apply for free use</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;