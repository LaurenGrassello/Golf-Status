import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to='/courses/'>
    <h1>Golf Score Card</h1>
    </Link>
  </header>
);

export default Header;