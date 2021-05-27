import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <span>BAA RUU WAA</span>
          <span>ARTISTRY</span>
        </Link>
      </div>
      <label for="menu" id="nav-icon">
        <div onClick={handleClick}>
          <i
            className={
              click ? 'fas fa-times hamburger' : 'fas fa-bars hamburger'
            }
          ></i>
        </div>
      </label>
      <input type="checkbox" id="menu" />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul className={click ? 'menuLinks active' : 'menuLinks'}>
          <Link to="/" onClick={closeMobileMenu} className="nav-Links">
            <li>About</li>
          </Link>
          <Link to="/" onClick={closeMobileMenu} className="nav-Links">
            <li>Contact</li>
          </Link>
          <Link to="/" onClick={closeMobileMenu} className="nav-Links">
            <li>Recent Work</li>
          </Link>
          <Link to="#" className="nav-Links">
            <li>
              Exhibitions <i className="fas fa-caret-down"></i>
              <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
              >
                <li>
                  <Link
                    to="/archive"
                    onClick={() => setClick(false)}
                    className=" dropdown-link"
                  >
                    ARTIST'S PUBLIC PROJECT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => setClick(false)}
                    className="dropdown-link"
                  >
                    ARTIST'S PAST WORKS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => setClick(false)}
                    className="dropdown-link"
                  >
                    ARTIST'S WORK IN PROGRESS
                  </Link>
                </li>
              </ul>
            </li>
          </Link>
          <Link to="/" onClick={closeMobileMenu} className="nav-Links">
            <li>Publications</li>
          </Link>
        </ul>
        <button>Gallery</button>
      </div>
    </header>
  );
}

export default Header;
