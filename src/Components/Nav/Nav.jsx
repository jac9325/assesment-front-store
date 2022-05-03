import React from 'react';
import { Link } from 'react-router-dom';
import './__Navbar.scss';

function Nav() {
  return (
    <header>
      <nav classNme="navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p class="link">Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <p class="link">About</p>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
