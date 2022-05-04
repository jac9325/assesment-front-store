import React from 'react';
import { Link } from 'react-router-dom';
import './__Navbar.scss';

function Nav() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p className="link">Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <p className="link">About</p>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
