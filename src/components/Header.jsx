import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <h1 id="logo">The World Belongs to YOU!</h1>
        <nav>
            <ul>
                <li><a href="#advertisement" className="active">Home</a></li>
                <li><a href="#sectionForm">Reserva</a></li>
            </ul>
        </nav>     
    </header>
  );
}

export default Header;