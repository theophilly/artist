import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      <li>
        <Link to="/" onClick={() => setClick(false)} className=" dropdown-link">
          ARTIST'S PUBLIC PROJECT
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => setClick(false)} className="dropdown-link">
          ARTIST'S PAST WORKS
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => setClick(false)} className="dropdown-link">
          ARTIST'S WORK IN PROGRESS
        </Link>
      </li>
    </ul>
  );
}

export default Dropdown;
