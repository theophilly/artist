import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Header(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 908) {
      setdropdown(false);
    } else {
      setdropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 908) {
      setdropdown(false);
    } else {
      setdropdown(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <span>BAA RUU WAA</span>
        <span>ARTISTRY</span>
      </div>

      <div onClick={handleClick}>
        <i
          className={click ? 'fas fa-times hamburger' : 'fas fa-bars hamburger'}
        ></i>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul className={click ? 'menuLinks active' : 'menuLinks'}>
          <li>
            <Link to="/" onClick={closeMobileMenu} className="nav-Links">
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu} className="nav-Links">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu} className="nav-Links">
              Recent Work
            </Link>
          </li>
          <li onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <Link to="/" onClick={closeMobileMenu} className="nav-Links">
              Exhibitions <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu} className="nav-Links">
              Publications
            </Link>
          </li>
        </ul>
        <button>Gallery</button>
      </div>
    </header>
  );
}

export default Header;
