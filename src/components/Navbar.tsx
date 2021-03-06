import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => (
  <nav>
    <Link to="/uslugi">Uslugi</Link>
    <Link to="/portfolio">Moje prace</Link>
    <Link to="/cennik">Cennik</Link>
    <Link to="/o-mnie">O mnie</Link>
    <Link to="/kontakt">Kontakt</Link>
  </nav>
);

export default Navbar;
