import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      <Link to="/team" >Team</Link>
    </nav>
  );
};

export default Header;
