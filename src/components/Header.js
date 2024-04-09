
// Header component
import React from 'react';
import './Header.css';

function Header() {

    return (
        <header className='header'>
            <div>
                <span className="title">Niklas Wicklund</span>
            </div>
            <nav>
                <ul>
                    <li><a href="/NiklasWicklund">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
