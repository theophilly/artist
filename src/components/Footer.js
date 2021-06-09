import React from 'react';
import './styles/Footer.css';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <>
      <footer className="foot">
        <div>
          <div className="log">
            <span> BAA RUU WAA </span>

            <span>ARTISTRY</span>
          </div>

          <div>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div>
          <p>CONTACT INFO</p>
          {/* <p>
            <i class="fas fa-map-marker-alt"></i>30 Ibokun Road, Osogbo, Osun
            State, Nigeria
          </p> */}
          <p>
            <i class="fas fa-phone-alt"></i>+2347038898581
          </p>
          <p>
            <i class="fas fa-envelope"></i>akinbaruwa@gmail.com
          </p>
        </div>
        <div>
          <p> QUICK LINKS</p>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="archive">Gallery</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
